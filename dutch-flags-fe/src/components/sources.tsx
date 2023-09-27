import { DataPoint } from "@/utils/data-structure";
import Link from "next/link";

export default function Sources({ sources }: DataPoint) {
  return (
    <div className="container mb-20">
      <h1 className="text-3xl my-10">Sources</h1>
      {sources.map((source) => (
        <Link
          key={source.name}
          href={source.link}
          target="_blank"
          className="flex my-1 text-black font-bold italic hover:text-dutch-orange underline transition-colors duration-300"
        >
          {source.name}
          <div className="after:content-['➚']"></div>
        </Link>
      ))}
    </div>
  );
}
