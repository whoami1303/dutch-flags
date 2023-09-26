"use client";
import { Statistics } from "@/utils/data-structure";
import CountUp from "react-countup";
import Coordinates from "./coordinates";

export default function Statistics({
  population,
  coordinates,
  area,
  density,
}: Statistics) {
  return (
    <>
      <div className="grid grid-cols-4 text-center my-36  text-4xl ">
        <div>
          <p className="mb-3 italic">Population</p>
          <CountUp end={population} duration={3} />
        </div>
        <div>
          <p className="mb-3 italic">Area</p>
          <CountUp end={area} duration={3} suffix=" km2" />
        </div>
        <div>
          <p className="mb-3 italic">Density</p>
          <CountUp end={density} duration={3} suffix="/km2" />
        </div>
        <Coordinates {...coordinates} />
      </div>
      <div className="after:content border border-dashed"></div>
    </>
  );
}
