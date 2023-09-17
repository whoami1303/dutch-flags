import Link from "next/link";
import { loadJsonFromDataFile } from "../utils/load-json-from-data-file";
import { SiteStructure, NavigationLink } from "@/utils/site-structure";

export default function Navigation() {
  const data: SiteStructure = loadJsonFromDataFile("site-structure.json");
  return (
    <div className="flex justify-end">
      <ul className="flex font-bold">
        {data.navigation.map((link: NavigationLink) => (
          <li
            key={link.title}
            className="mx-3 mb-5 hover:text-dutch-orange transition-colors duration-300"
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
