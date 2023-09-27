import { DataPoint } from "@/utils/data-structure";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function PreviousNextFlags({ sequenceFlags }: DataPoint) {
  return (
    <>
      <div className="flex justify-between">
        <>
          <Link
            href={`/flag/${sequenceFlags.previous.link}`}
            className="font-bold hover:text-dutch-orange transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="mx-2 align-middle"
              size="sm"
            />
            {sequenceFlags.previous.title}
          </Link>
        </>
        <Link
          href={`/flag/${sequenceFlags.next.link}`}
          className="font-bold hover:text-dutch-orange transition-colors duration-300"
        >
          {sequenceFlags.next.title}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="mx-2 align-middle"
            size="sm"
          />
        </Link>
      </div>
      <div className="after:content border-b border-dashed border-black my-20"></div>
    </>
  );
}
