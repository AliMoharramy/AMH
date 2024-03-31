import ProductsCards from "./productsCard";

export default function Main() {
  return (
    <div className="w-11/12 m-auto">
      <div className="border-3 p-8 shopBox bg-shop2Body my-16">
        <h4 className="text-3xl">Art In The Making</h4>
        <p className="w-3/4 py-4">
          The curiosity of what inspiration lies behind an artwork is an inquiry
          that has been made time and time again.And granted that is the peek we
          all want into the minds of the creatives.
        </p>
        <button className="px-10 py-3 border-2">Read More</button>
      </div>
      <ProductsCards />
    </div>
  );
}
