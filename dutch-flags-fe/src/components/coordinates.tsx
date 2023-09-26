import { Coordinates } from "@/utils/data-structure";
import CountUp from "react-countup";

export default function Coordinates({ latitude, longitude }: Coordinates) {
  return (
    <div>
      <p className="mb-3 italic">Coordinates</p>
      <div className="flex justify-center">
        {latitude.degrees && (
          <CountUp end={latitude.degrees} duration={3} suffix="°" />
        )}
        {latitude.minutes && (
          <CountUp end={latitude.minutes} duration={3} suffix="'" />
        )}
        {latitude.seconds && (
          <CountUp end={latitude.seconds} duration={3} suffix="''" />
        )}
        {latitude.direction && <span>{latitude.direction} </span>}

        {longitude.degrees && (
          <CountUp end={longitude.degrees} duration={3} suffix="°" />
        )}
        {longitude.minutes && (
          <CountUp end={longitude.minutes} duration={3} suffix="'" />
        )}
        {longitude.seconds && (
          <CountUp end={longitude.seconds} duration={3} suffix="''" />
        )}
        {longitude.direction && <span>{longitude.direction}</span>}
      </div>
    </div>
  );
}
