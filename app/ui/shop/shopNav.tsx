"use client";
import Search from "./search";
import { GoHeart } from "react-icons/go";
import { IconContext } from "react-icons";
import ShoppingCart from "./shoppingCart";
import clsx from "clsx";
import { inconsolataBold } from "../fonts";

const salevalue = 2;

export default function ShopNav() {
  return (
    <div className="flex border-b-3 py-6">
      <div className="w-11/12 m-auto flex justify-between">
        <div className="flex items-center">
          <h3 className={`${inconsolataBold.className} logo mr-4 text-3xl`}>
            AMH..Shop
          </h3>
          <nav className="border-r-2 px-8 flex ml-20 items-center">
            <ul
              className={`${inconsolataBold.className} flex gap-8 text-lg text-textgray`}
            >
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">about</li>
              <li className="cursor-pointer">Blog</li>
            </ul>
          </nav>
          <IconContext.Provider value={{ className: "sscard" }}>
            <Search />
          </IconContext.Provider>
        </div>
        <div className="justify-end flex items-center">
          <IconContext.Provider value={{ className: "navHeart" }}>
            <GoHeart />
          </IconContext.Provider>
          <div className="relative ml-12 cursor-pointer">
            <ShoppingCart />
            <p
              className={clsx(
                "absolute top-1 right-0 bg-black text-white text-sm px-1.5 rounded-full",
                { "-right-2": salevalue >= 10 }
              )}
            >
              {salevalue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
