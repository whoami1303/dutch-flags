import { Color } from "@/utils/data-structure";

export default function ColorBlock({ value, name }: Color) {
  return (
    <div className="text-center my-2">
      <div className="h-24 rounded-md" style={{ backgroundColor: value }}></div>
      <div className="font-bold text-left mt-1 mb-2">
        <span className="text-sm">{name}</span>
      </div>

      <div className="after:content border border-dotted border-silver my-1"></div>

      <div className="text-left italic mt-2">{value}</div>
    </div>
  );
}
