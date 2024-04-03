import { Component, ReactNode } from "react";
import ShopNav from "../ui/shop/shopNav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ShopNav />
      {children}
    </>
  );
}
