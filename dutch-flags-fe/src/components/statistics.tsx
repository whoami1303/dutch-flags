"use client";
import { Statistics } from "@/utils/data-structure";
import CountUp from "react-countup";
import Coordinates from "./coordinates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faMaximize,
  faPeopleGroup,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

export default function Statistics({
  population,
  coordinates,
  area,
  density,
}: Statistics) {
  return (
    <>
      <div className="grid grid-cols-4 text-center my-10 text-4xl ">
        {population && (
          <div className="flex justify-center items-center">
            {/*<p className="mb-3 italic">Population</p>*/}
            <FontAwesomeIcon
              icon={faPerson}
              className="mx-2 align-middle"
              size="lg"
            />

            <CountUp end={population} duration={3} />
          </div>
        )}
        {area && (
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faMaximize}
              className="mx-2 align-middle"
              size="lg"
            />
            <CountUp end={area} suffix=" km2" />
          </div>
        )}
        {density && (
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              className="mx-2 align-middle"
              size="lg"
            />
            <CountUp end={density} duration={3} suffix="/km2" />
          </div>
        )}
        {coordinates && (
          <div>
            <Coordinates {...coordinates} />
          </div>
        )}
      </div>
    </>
  );
}
