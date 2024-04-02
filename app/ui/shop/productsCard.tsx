import Card from "./card";
import { products } from "@/app/lib/definitions";

export default function ProductsCards({
  products,
}: {
  products: Array<products>;
}) {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-24 relative">
      <p className="bg-shopBody absolute py-1 px-2 border-3 rounded-full -left-6 z-10 font-bold text-2xl top-1/3 cursor-pointer">
        &#x2190;
      </p>
      {products.map((item) => (
        <Card data={item} key={item.product_id} />
      ))}
      <p className="absolute py-1 px-2 border-3 rounded-full -right-6 bg-shopBody font-bold text-2xl top-1/3 cursor-pointer">
        &#x2192;
      </p>
    </div>
  );
}
