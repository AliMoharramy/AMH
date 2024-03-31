import Image from "next/image";

export default function Card() {
  return (
    <div className="flex justify-center flex-col">
      <div className="border-3">
        <Image src={require("../../../public/paint1.webp")} alt="paint1" />
      </div>
      <div>here is the text</div>
    </div>
  );
}
