import Image from "next/image";
import React from "react";

export const Nav = () => {
  return (
    <div className="flex justify-center bg-white fixed w-full top-0 shadow-md shadow-gray-100 z-20 no-scrollbar">
      <div className="flex justify-between w-full max-w-[95%] h-20 px-4 items-center">
        <Image alt="logo" src={"/logo.png"} width={46} height={28} />
      </div>
    </div>
  );
};
