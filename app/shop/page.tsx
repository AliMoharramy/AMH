import Main from "../ui/shop/main";
import ShopNav from "../ui/shop/shopNav";
import { fetchProducts } from "../lib/data";

export default async function ShopPage() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div className="bg-shopBody">
      <ShopNav />
      <Main />
    </div>
  );
}
