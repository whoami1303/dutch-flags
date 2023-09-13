import { DataPoint } from "@/utils/data-structure";
import Image from "next/image";
import Link from "next/link";
export default function Municipality({ title, flagPath }: DataPoint) {
  return (
    <div className="flex">
      <div className="text-center">
        <Image
          className="border-2 border-black"
          src={flagPath}
          alt="placeholder"
          width={300}
          height={100}
        />
        <Link href="/details">{title}</Link>
      </div>
    </div>
  );
}
