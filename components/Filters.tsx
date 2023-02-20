import React from "react";
import { Checkbox } from "./Checkbox";
import { RadioButton } from "./RadioButton";
import "../styles/filters.module.css";
import { useQuery } from "../hooks/useQuery";

export interface FilterProps {
  gender: string[];
  categories: string[];
  brands: string[];
  colors: string[];
  priceRange: string[];
  discount: string[];
}

export const Filters = ({ filters }: { filters: FilterProps }) => {
  const { query, setQuery, resetQuery } = useQuery();
  const {
    gender = "all",
    category = "all",
    brand = "all",
    priceRange = "all",
    color = "all",
    discount = "all",
  } = query;

  const queryHandler = (e: { target: { value: string } }, type: string) => {
    switch (type) {
      case "gender":
        setQuery({ gender: e.target.value });
        break;
      case "category":
        if (category === "all") {
          setQuery({ category: e.target.value });
        } else {
          const categoryArr = category.split(",");
          if (categoryArr.includes(e.target.value)) {
            const newArr = categoryArr.filter(
              (el: string) => el !== e.target.value
            );
            const newCategory = newArr.toString();
            if (newCategory === "") {
              setQuery({ category: "all" });
            } else {
              setQuery({ category: newCategory });
            }
          } else {
            categoryArr.push(e.target.value);
            const newCategory = categoryArr.toString();
            setQuery({ category: newCategory });
          }
        }
        // setQuery({ category: e.target.value });
        break;
      case "brand":
        if (brand === "all") {
          setQuery({ brand: e.target.value });
        } else {
          const brandArr = brand.split(",");
          if (brandArr.includes(e.target.value)) {
            const newArr = brandArr.filter(
              (el: string) => el !== e.target.value
            );
            const newBrand = newArr.toString();
            if (newBrand === "") {
              setQuery({ brand: "all" });
            } else {
              setQuery({ brand: newBrand });
            }
          } else {
            brandArr.push(e.target.value);
            const newBrand = brandArr.toString();
            setQuery({ brand: newBrand });
          }
        }
        break;
      case "priceRange":
        if (priceRange === "all") {
          setQuery({ priceRange: e.target.value });
        } else {
          const priceRangeArr = priceRange.split(",");
          if (priceRangeArr.includes(e.target.value)) {
            const newArr = priceRangeArr.filter(
              (el: string) => el !== e.target.value
            );
            const newPriceRange = newArr.toString();
            if (newPriceRange === "") {
              setQuery({ priceRange: "all" });
            } else {
              setQuery({ priceRange: newPriceRange });
            }
          } else {
            priceRangeArr.push(e.target.value);
            const newPriceRange = priceRangeArr.toString();
            setQuery({ priceRange: newPriceRange });
          }
        }
        break;
      case "color":
        if (color === "all") {
          setQuery({ color: e.target.value });
        } else {
          const colorArr = color.split(",");
          if (colorArr.includes(e.target.value)) {
            const newArr = colorArr.filter(
              (el: string) => el !== e.target.value
            );
            const newColor = newArr.toString();
            if (newColor === "") {
              setQuery({ color: "all" });
            } else {
              setQuery({ color: newColor });
            }
          } else {
            colorArr.push(e.target.value);
            const newColor = colorArr.toString();
            setQuery({ color: newColor });
          }
        }
        break;
      case "discount":
        setQuery({ discount: e.target.value });
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-w-[252px] sticky top-20 h-[90vh] overflow-y-scroll no-scrollbar pb-4 md:block hidden">
      <div className="border-b h-14 flex justify-between">
        <h2 className="text-theme-black text-sm font-bold px-6 pt-6">
          FILTERS
        </h2>

        {Object.keys(query).length !== 0 && (
          <button
            className="text-theme-cherry pt-3 mr-4 text-xs font-bold"
            onClick={resetQuery}
          >
            CLEAR ALL
          </button>
        )}
      </div>
      <div className="pl-6 py-4 border-r border-b">
        {filters.gender.map((genderName) => {
          return (
            <RadioButton
              value={genderName}
              checked={gender === genderName}
              onChange={(e: any) => queryHandler(e, "gender")}
              label={genderName}
              variant="bold"
            />
          );
        })}
      </div>
      <div className="pl-6 py-4 border-r border-b">
        <h3 className="text-theme-black text-xs font-bold mb-2">CATEGORIES</h3>
        {filters.categories.map((categoryName) => {
          return (
            <Checkbox
              value={categoryName}
              checked={category.split(",").includes(categoryName)}
              onChange={(e: any) => queryHandler(e, "category")}
              label={categoryName}
            />
          );
        })}
      </div>
      <div className="pl-6 py-4 border-r border-b">
        <h3 className="text-theme-black text-xs font-bold mb-2">PRICE</h3>
        {filters.priceRange.map((priceRangeName) => {
          return (
            <Checkbox
              value={priceRangeName}
              checked={priceRange.split(",").includes(priceRangeName)}
              onChange={(e: any) => queryHandler(e, "priceRange")}
              label={priceRangeName}
            />
          );
        })}
      </div>
      <div className="pl-6 py-4 border-r border-b">
        <h3 className="text-theme-black text-xs font-bold mb-2">BRAND</h3>
        {filters.brands.map((brandName: any) => {
          return (
            <Checkbox
              value={brandName}
              checked={brand.split(",").includes(brandName)}
              onChange={(e: any) => queryHandler(e, "brand")}
              label={brandName}
            />
          );
        })}
      </div>
      <div className="pl-6 py-4 border-r border-b">
        <h3 className="text-theme-black text-xs font-bold mb-2">COLOR</h3>
        {filters.colors.map((colorName: any) => {
          return (
            <Checkbox
              value={colorName}
              checked={color.split(",").includes(colorName)}
              onChange={(e: any) => queryHandler(e, "color")}
              label={colorName}
            />
          );
        })}
      </div>
      <div className="pl-6 py-4 border-r border-b">
        <h3 className="text-theme-black text-xs font-bold mb-2">DISCOUNT</h3>
        {filters.discount.map((discountName: any) => {
          return (
            <RadioButton
              value={discountName}
              checked={discount === discountName}
              onChange={(e: any) => queryHandler(e, "discount")}
              label={`${discountName}% and above`}
            />
          );
        })}
      </div>
    </div>
  );
};
