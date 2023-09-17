import { DataPoint, HeaderProps } from "@/utils/data-structure";
import Image from "next/image";
import FlagMetadata from "./flag-metadata";

export default function Header({
  title,
  subtitle,
  flagPath,
  link,
  metadata,
}: HeaderProps | DataPoint) {
  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className=" relative text-8xl font-bold py-5 mb-5">
          {title}
          {subtitle && (
            <span className="absolute text-sm bottom-0 -right-12 italic">
              <span className="text-dutch-orange">
                {subtitle.split(" ")[0]}{" "}
              </span>
              &nbsp;
              {subtitle.split(" ")[1]}
            </span>
          )}
        </h1>

        <div className="my-auto">
          <Image
            className="w-32 rounded-md"
            src={flagPath}
            alt="Netherlands flag"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="after:content border-4 border-black"></div>
      <FlagMetadata {...metadata} />
    </>
  );
}
