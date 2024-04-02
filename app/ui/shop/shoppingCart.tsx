"use client";
import { IconContext } from "react-icons";
import { CiShoppingCart } from "react-icons/ci";
export default function ShoppingCart() {
  return (
    <IconContext.Provider value={{ className: "shopping-cartbox" }}>
      <CiShoppingCart />
    </IconContext.Provider>
  );
}
