import React, { useState } from "react";
import { Product, ProductProps } from "./Product";

interface Props {
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
  listView: boolean;
}

export const ProductsList = ({ products, listView }: Props) => {
  return (
    <div
      className={
        listView
          ? "p-6"
          : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8 m-6 pb-24 border-b"
      }
    >
      {products.map((item, index) => {
        return <Product data={item} key={index} listView={listView} />;
      })}
    </div>
  );
};
