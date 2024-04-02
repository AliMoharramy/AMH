import { products } from "@/app/lib/definitions";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { inconsolataBold } from "../fonts";
const productimg = {
  padding: "2rem",
};

export default function Card({ data }: { data: products }) {
  return (
    <div className="flex justify-center flex-col">
      <div className="border-3 flex justify-center h-72 relative">
        <Image
          src={data.img}
          alt={"paint1"}
          width={400}
          height={0}
          style={productimg}
        />
      </div>
      <div className={`${inconsolataBold.className} p-2`}>
        <div className="flex justify-between items-center">
          <h4 className="text-textgray">{data.name}</h4>
          <GoHeart />
        </div>
        <div className="flex justify-between pt-1">
          <p>{data.cost}</p>
          <p className="text-textgray">{data.size}</p>
        </div>
      </div>
    </div>
  );
}
