import { Flags } from "@/utils/data-structure";
import Municipality from "./municipality";
import Filter from "./filter";

export default function Grid({ flags }: Flags) {
  return (
    <>
      <div className="flex justify-end ">
        <Filter />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-8 mb-auto ">
        {flags.map((flag) =>
          flag.title !== "Netherlands" ? (
            <div key={flag.title}>
              <Municipality {...flag} />
            </div>
          ) : null
        )}
      </div>
    </>
  );
}
