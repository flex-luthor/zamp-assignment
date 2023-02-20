import { useState } from "react";
import { server } from "../config";
import { Header } from "../components/Header";
import { ProductsList } from "../components/ProductsList";
import { FilterProps, Filters } from "../components/Filters";
import { Pagination } from "../components/Pagination";
import { ProductProps } from "../components/Product";
import { ViewControls } from "../components/ViewControls";

interface HomeProps {
  data: {
    products: {
      name: string;
      brand: string;
      images: string[];
      price: number;
      discount: number;
      ratings: {
        average: number;
        count: number;
      };
      category: string;
    }[];
    count: number;
  };
  filters: {
    gender: string[];
    categories: string[];
    brands: string[];
    colors: string[];
    priceRange: string[];
    discount: string[];
  };
}

const Home = ({ data, filters }: HomeProps) => {
  const [listView, setListView] = useState(false);
  const { products, count } = data;

  return (
    <div className="grow">
      <Header itemsCount={count} />
      <div className="flex">
        <Filters filters={filters} />
        <div className="grow">
          <ViewControls listView={listView} setListView={setListView} />
          <ProductsList products={products} listView={listView} />
          <Pagination count={count} />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const res = await fetch(`${server}/api/products`, {
    method: "POST",
    body: JSON.stringify(context.query),
  });
  const data = await res.json();

  const filtersRes = await fetch(`${server}/api/filters`, {
    method: "POST",
    body: JSON.stringify(context.query),
  });
  const filters = await filtersRes.json();
  return {
    props: {
      data,
      filters,
    }, // will be passed to the page component as props
  };
}

export default Home;
