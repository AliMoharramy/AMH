import { fetchProducts } from "@/app/lib/data";
import Card from "@/app/ui/shop/card";

export default async function Products() {
  const products = await fetchProducts();
  return (
    <div className="grid grid-cols-5 gap-8 w-11/12 mx-auto mt-12">
      {products.map((item) => (
        <Card data={item} key={item.product_id} />
      ))}
    </div>
  );
}
