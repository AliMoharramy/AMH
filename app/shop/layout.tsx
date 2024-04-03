import { Component } from "react";
import ShopNav from "../ui/shop/shopNav";

export default function Layout({ children }: { children: Component }) {
  return (
    <>
      <ShopNav />
      {children}
    </>
  );
}
