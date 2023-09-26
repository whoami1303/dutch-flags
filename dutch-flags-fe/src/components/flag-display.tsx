import { DataPoint } from "@/utils/data-structure";
import Image from "next/image";

export default function FlagDisplay({ flagPath, flagDescription }: DataPoint) {
  return (
    <div className="container my-10">
      <div className="grid grid-cols-2 ">
        <div>
          <h1 className="text-3xl">Composition</h1>
          <p className="text-2xl font-light mt-3 pr-32">{flagDescription}</p>
        </div>
        <div className="flex justify-center p-5  ">
          <Image
            className="object-cover w-full rounded-md"
            src={flagPath}
            width={300}
            alt="placeholder"
            height={150}
          />
        </div>
      </div>
      <div className="after:content border border-dashed my-20"></div>
    </div>
  );
}
