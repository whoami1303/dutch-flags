import { DataPoint } from "@/utils/data-structure";
import Image from "next/image";

export default function HistoricalFlags({ otherFlagsPaths }: DataPoint) {
  return (
    <>
      {otherFlagsPaths && (
        <div>
          <h1 className="text-3xl mb-5">Other flags</h1>
          <div className="grid grid-cols-4">
            {otherFlagsPaths.map((otherFlag) => (
              <div key={otherFlag.metadata}>
                <Image
                  className="h-44 w-64 border border-silver my-8"
                  src={otherFlag.path}
                  width={300}
                  alt="placeholder"
                  height={150}
                />
                <span className="italic">{otherFlag.metadata}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
