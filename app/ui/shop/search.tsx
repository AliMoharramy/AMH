"use client";
import { IconContext } from "react-icons";
import { FiSearch } from "react-icons/fi";
export default function Search() {
  return (
    <IconContext.Provider value={{ className: "shopping-cart" }}>
      <FiSearch />
    </IconContext.Provider>
  );
}
