import { WebsiteProps } from "@/utils/data-structure";
import Municipality from "./municipality";

export default function Grid({ municipalities }: WebsiteProps) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2   my-8 ">
      {municipalities.map((municipality) => (
        <div key={municipality.title}>
          <Municipality
            title={municipality.title}
            flagPath={municipality.flagPath}
          />
        </div>
      ))}
    </div>
  );
}
