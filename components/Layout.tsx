import Head from "next/head";
import { PropsWithChildren } from "react";
import { Meta } from "./Meta";
import { Nav } from "./Nav";

export const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen pt-20">
      <Meta />
      <Nav />
      {props.children}
    </div>
  );
};
