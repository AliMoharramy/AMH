"use client";
import Search from "./search";
import { GoHeart } from "react-icons/go";
import { IconContext } from "react-icons";
import ShoppingCart from "./shoppingCart";

export default function ShopNav() {
  return (
    <div className="flex my-4 border-b-2 py-4">
      <div className="w-11/12 m-auto flex justify-between">
        <div className="flex">
          <h3 className="logo mr-4">AMHSHOP</h3>
          <nav className="border-r-2 px-2">
            <ul className="flex gap-5 ">
              <li>Products</li>
              <li>about</li>
              <li>Blog</li>
            </ul>
          </nav>
          <IconContext.Provider value={{ className: "navHeart" }}>
            <Search />
          </IconContext.Provider>
        </div>
        <div className="justify-end flex">
          <IconContext.Provider value={{ className: "navHeart" }}>
            <GoHeart />
          </IconContext.Provider>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}
