import Image from "next/image";
import React, { useEffect, useState } from "react";

export type ProductProps = {
  data: {
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
  };
  listView: boolean;
};

export const Product = ({ data, listView }: ProductProps) => {
  return (
    <div className={listView ? "flex mb-8 w-96" : "flex flex-col"}>
      <div className={listView ? "relative" : "relative"}>
        <div className={listView ? "w-32 h-42" : ""}>
          <img src={data.images[0]} alt={data.name} width={"100%"} />
        </div>

        <div className="flex text-xs font-bold text-theme-black absolute bottom-1 left-1 bg-white/90 px-2 py-1 rounded">
          <span className="mr-1"> {data.ratings.average} </span>
          <Image alt="logo" src={"/ic_star.svg"} width={12} height={12} />
          <span className="ml-1"> | {data.ratings.count}</span>
        </div>
      </div>
      <div className={listView ? "flex flex-col px-2.5" : "flex flex-col mt-3"}>
        <h3 className="text-base font-bold text-theme-black">{data.brand}</h3>
        <h4
          className={
            listView
              ? "text-xs text-theme-black-50 mb-1"
              : "text-xs text-theme-black-50 truncate mb-1"
          }
        >
          {data.name}
        </h4>
        <div>
          <span className="text-sm font-bold text-theme-black mr-1">
            Rs. {data.price}
          </span>
          <span className="text-xs text-theme-black-20 line-through">
            Rs. {Math.round(data.price * (data.discount / 100 + 1))}
          </span>
          <span className="text-xs text-theme-orange font-light">
            {` (${data.discount}% OFF)`}
          </span>
        </div>
      </div>
    </div>
  );
};
