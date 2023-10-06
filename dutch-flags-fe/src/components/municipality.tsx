import { DataPoint } from "@/utils/data-structure";
import Image from "next/image";
import Link from "next/link";
export default function Municipality({ title, flagPath, link }: DataPoint) {
  return (
    <div className="flex my-6">
      <div className="text-center">
        <Link
          href={`/flag/${link}`}
          className="font-bold hover:text-dutch-orange transition-colors duration-300"
        >
          <Image
            className="h-44 w-64 border border-silver"
            src={flagPath}
            width={300}
            alt="placeholder"
            height={150}
          />
          {title}
        </Link>
      </div>
    </div>
  );
}
