import { DataPoint } from "@/utils/data-structure";
export default function Introduction({ introduction }: DataPoint) {
  return (
    <>
      <div className="container mt-20">
        <div className="justify-start w-2/3 font-thin text-2xl">
          {introduction}
        </div>
      </div>
    </>
  );
}
