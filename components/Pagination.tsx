import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface PaginationProps {
  count: number;
}

export const Pagination = ({ count }: PaginationProps) => {
  const router = useRouter();
  const { query } = router;

  const pageNumber = Number(query.page);
  const numOfPages = Math.ceil(count / 36);

  const pageHandler = (num: number) => {
    const { query } = router;
    query.page = num.toString();
    router.push(router);
  };

  return (
    <div className="mb-24 flex items-center">
      <div className="ml-8 text-theme-black-50 text-xs w-36 md:block hidden">
        Page {query.page || 1} of {numOfPages}
      </div>
      <div className="w-full justify-center flex">
        <div className="flex justify-between items-center w-full px-6 max-w-[800px]">
          <button
            className={
              !query.page || pageNumber === 1
                ? "invisible text-theme-black text-sm font-bold rounded border hover:border-theme-black flex h-12 w-28 flex justify-center items-center"
                : " text-theme-black text-sm font-bold rounded border hover:border-theme-black flex h-12 w-28 flex justify-center items-center"
            }
            onClick={() => pageHandler(pageNumber - 1)}
          >
            <Image
              src={"/ic_left-chevron.svg"}
              width={8}
              height={8}
              alt="previous"
              className="mr-1.5"
            />
            Previous
          </button>
          <div className="grid grid-cols-10 gap-2">
            {Array.from({ length: numOfPages }, (_, i) => i + 1).map((el) => {
              return (
                <button
                  className={
                    el === pageNumber || (el === 1 && !query.page)
                      ? "bg-theme-black text-white text-sm font-bold py-1 px-2 rounded-sm"
                      : "text-theme-black hover:border text-sm font-bold py-0.25 px-1 rounded-sm"
                  }
                  onClick={() => pageHandler(el)}
                >
                  {el}
                </button>
              );
            })}
          </div>
          <button
            className={
              pageNumber === numOfPages
                ? "invisible text-theme-black text-sm font-bold rounded border hover:border-theme-black flex h-12 w-28 flex justify-center items-center"
                : " text-theme-black text-sm font-bold rounded border hover:border-theme-black flex h-12 w-28 flex justify-center items-center"
            }
            onClick={() => pageHandler(pageNumber + 1)}
          >
            Next
            <Image
              src={"/ic_left-chevron.svg"}
              width={8}
              height={8}
              alt="next"
              className="rotate-180 ml-1.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
