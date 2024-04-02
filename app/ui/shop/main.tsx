import { products } from "@/app/lib/definitions";
import ProductsCards from "./productsCard";
import { inconsolataBold, merriweather } from "../fonts";

export default function Main({ products }: { products: Array<products> }) {
  return (
    <div className="w-11/12 m-auto">
      <div
        className={`${merriweather.className} border-3 p-8 shopBox bg-shop2Body my-12`}
      >
        <h4 className={`${inconsolataBold.className} text-3xl`}>
          Art In The Making
        </h4>
        <p className="w-3/4 py-4">
          The curiosity of what inspiration lies behind an artwork is an inquiry
          that has been made time and time again.And granted that is the peek we
          all want into the minds of the creatives.
        </p>
        <button className="px-10 py-3 border-2 readmorebtn">Read More</button>
      </div>
      <ProductsCards products={products} />
    </div>
  );
}
