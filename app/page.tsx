import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/todo">click me</Link>
      <Link className="m-5" href="/shop">
        ShopPage
      </Link>
    </main>
  );
}
