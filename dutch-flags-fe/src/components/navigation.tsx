import Link from "next/link";
import { loadJsonFromDataFile } from "../utils/load-json-from-data-file";
import { SiteStructure, NavigationLink } from "@/utils/site-structure";

export default function Navigation() {
  const data: SiteStructure = loadJsonFromDataFile("site-structure.json");
  return (
    <div className="flex justify-end">
      <ul className="flex">
        {data.navigation.map((link: NavigationLink) => (
          <li key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
