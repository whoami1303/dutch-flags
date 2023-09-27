export interface FlagMetadataProps {
  leftside?: string;
  rightside?: string;
}

export default function FlagMetadata({
  leftside,
  rightside,
}: FlagMetadataProps) {
  return (
    <div className="my-2 container">
      <div className="grid grid-cols-2 justify-between">
        <div className="text-start italic">{leftside ? leftside : ""}</div>
        <div className="text-end italic">
          {rightside ? `${rightside}` : "Date of adoption unknown"}
        </div>
      </div>
    </div>
  );
}
