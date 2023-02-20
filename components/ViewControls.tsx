import Image from "next/image";
import React, { useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { toTitleCase } from "../utils/commonUtils";

interface ViewControlsProps {
  listView: boolean;
  setListView: (arg0: boolean) => void;
}
export const ViewControls = ({ listView, setListView }: ViewControlsProps) => {
  const { query, setQuery } = useQuery();
  const [isSortOpen, setIsSortOpen] = useState(false);

  const showDropdown = () => {
    setIsSortOpen(true);
  };
  const hideDropdown = () => {
    setIsSortOpen(false);
  };

  const { sortBy = "recommended" } = query;

  return (
    <div className="border-b h-14 flex relative">
      <div
        className="absolute right-6 top-2 border pt-1 pb-2 rounded w-full max-w-[255px] cursor-pointer hover:shadow-lg bg-white z-10"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <div className="flex justify-between px-3">
          <div>
            <span className="font-theme-black text-xs">Sort by : </span>
            <span className="font-theme-black font-bold text-xs">
              {toTitleCase(sortBy.toString())}
            </span>
          </div>
          <div className="pt-1.5">
            <Image
              src={"/ic_down-chevron.png"}
              alt="More"
              width={15}
              height={10}
            />
          </div>
        </div>
        {isSortOpen && (
          <div className="mt-4">
            <div
              className={
                sortBy === "recommended" || sortBy === undefined
                  ? "bg-theme-gray/10 font-bold px-3 pt-1 pb-2"
                  : "hover:bg-theme-gray/10 px-3 pt-1 pb-2"
              }
              onClick={() => setQuery({ sortBy: "recommended" })}
            >
              <span className="font-theme-black text-xs">Recommended</span>
            </div>
            <div
              className={
                sortBy === "popularity"
                  ? "bg-theme-gray/10 font-bold px-3 pt-1 pb-2"
                  : "hover:bg-theme-gray/10 px-3 pt-1 pb-2"
              }
              onClick={() => setQuery({ sortBy: "popularity" })}
            >
              <span className="font-theme-black text-xs">Popularity</span>
            </div>
            <div
              className={
                sortBy === "trending"
                  ? "bg-theme-gray/10 font-bold px-3 pt-1 pb-2"
                  : "hover:bg-theme-gray/10 px-3 pt-1 pb-2"
              }
              onClick={() => setQuery({ sortBy: "trending" })}
            >
              <span className="font-theme-black text-xs">Trending</span>
            </div>
          </div>
        )}
      </div>
      <div className="absolute left-6 top-4 bg-white">
        <div className="text-sm text-theme-black">
          <button
            className={
              listView
                ? "text-theme-gray border-2 text-xs font-semibold py-0.5 px-2 mr-3"
                : "text-theme-black border-theme-black border-2 text-xs font-bold py-0.5 px-2 mr-3 rounded"
            }
            onClick={() => setListView(false)}
          >
            Grid
          </button>
          <button
            className={
              listView
                ? "text-theme-blac border-theme-black border-2 text-xs font-bold py-0.5 px-2 rounded"
                : "text-theme-gray border-2 text-xs font-semibold py-0.5 px-2"
            }
            onClick={() => setListView(true)}
          >
            List
          </button>
        </div>
      </div>
    </div>
  );
};
