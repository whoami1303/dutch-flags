import { DataPoint } from "@/utils/data-structure";
import Image from "next/image";

export default function CoatOfArms({ coatOfArms }: DataPoint) {
  return (
    <div className="container my-10">
      <div className="grid grid-cols-2 ">
        <div>
          <h1 className="text-3xl">Coat of arms</h1>
        </div>
        <div className="flex justify-center">
          <Image
            className="object-cover w-96 rounded-md"
            src={coatOfArms}
            width={300}
            alt="placeholder"
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
