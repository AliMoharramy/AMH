import { products } from "@/app/lib/definitions";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { inconsolataBold } from "../fonts";

export default function Card({ data }: { data: products }) {
  return (
    <div className="flex justify-center flex-col cursor-pointer">
      <div className="border-3 flex justify-center h-72 relative">
        <Image
          src={require(`../../../image/${data.img}`)}
          alt={"paint1"}
          width={400}
          height={0}
          className="transform hover:scale-110 transition duration-500 p-8"
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
