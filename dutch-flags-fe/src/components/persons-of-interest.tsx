import { DataPoint } from "@/utils/data-structure";

export default function PersonsOfInterest({ personsOfInterest }: DataPoint) {
  return (
    <>
      {personsOfInterest && (
        <div>
          <h1 className="text-3xl">Persons of interest</h1>
          {personsOfInterest.map((person) => (
            <h3 className={"my-2 italic"} key={person}>
              {person}
            </h3>
          ))}
        </div>
      )}
    </>
  );
}
