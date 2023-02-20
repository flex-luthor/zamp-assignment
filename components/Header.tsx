import React from "react";

interface HeaderProps {
  itemsCount: number;
}

export const Header = ({ itemsCount }: HeaderProps) => {
  return (
    <div className="px-6 py-6 flex">
      <h1 className="text-theme-black text-base font-bold mr-1">
        {"Myntra Fashion Store"}
      </h1>
      <h1 className="text-theme-gray text-base tracking-wide">
        - {itemsCount} items
      </h1>
    </div>
  );
};
