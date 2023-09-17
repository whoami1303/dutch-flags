import { SiteStructure } from "@/utils/site-structure";
import { loadJsonFromDataFile } from "../utils/load-json-from-data-file";

export default function Filter() {
  const data: SiteStructure = loadJsonFromDataFile("site-structure.json");
  return (
    <div className="flex justify-end ">
      {data.filter.map((filter: string) => (
        <button
          className="first:rounded-l-md last:rounded-r-md bg-silver px-2"
          key={filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
