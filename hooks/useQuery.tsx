import { useRouter } from "next/router";

export interface QueryInterface {
  page?: string;
  gender?: string;
  category?: string;
  brand?: string;
  priceRange?: string;
  color?: string;
  discount?: string;
  sortBy?: string;
}

export const useQuery = () => {
  const router = useRouter();
  const { query }: { query: QueryInterface } = router;

  const setQuery = ({
    page,
    gender,
    category,
    brand,
    priceRange,
    color,
    discount,
    sortBy,
  }: QueryInterface) => {
    if (page) {
      query.page = page.toString();
    } else {
      if (gender) query.gender = gender;
      if (category) query.category = category;
      if (brand) query.brand = brand;
      if (priceRange) query.priceRange = priceRange;
      if (color) query.color = color;
      if (discount) query.discount = discount;
      if (sortBy) query.sortBy = sortBy;
      query.page = "1";
    }

    router.push(router);
  };

  const resetQuery = () => {
    router.replace({ query: undefined }, undefined);
  };

  return { query, setQuery, resetQuery };
};
