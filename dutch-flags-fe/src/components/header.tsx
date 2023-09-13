import { DataPoint } from "@/utils/data-structure";
import Image from "next/image";

export default function Header({ title, subtitle, flagPath }: DataPoint) {
  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className=" relative text-8xl font-bold py-5 mb-5">
          {title}
          {subtitle && (
            <span className="absolute text-sm bottom-0 -right-12 italic">
              {subtitle}
            </span>
          )}
        </h1>

        <div>
          <Image
            src={flagPath}
            alt="Netherlands flag"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="after:content border-4 border-black"></div>
    </>
  );
}
