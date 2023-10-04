import { DataPoint } from "@/utils/data-structure";
import Image from "next/image";

export default function CoatOfArms({ coatOfArms }: DataPoint) {
  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl">Coat of arms</h1>
          {coatOfArms.description && (
            <h2 className="text-xl font-light mt-3 ">
              {coatOfArms.description}
            </h2>
          )}
        </div>
        <div className="flex justify-center items-center">
          <Image
            className="object-cover w-96 rounded-md"
            src={coatOfArms.path}
            width={300}
            alt="placeholder"
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
