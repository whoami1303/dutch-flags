import { DataPoint, Flags } from "@/utils/data-structure";
import { loadJsonFromDataFile } from "@/utils/load-json-from-data-file";
import Header from "@/components/header";
import Colors from "@/components/colors/colors";
import CoatOfArms from "@/components/coat-of-arms";
import FlagDisplay from "@/components/flag-display";
import Statistics from "@/components/statistics";
import Introduction from "@/components/introduction";
import { Metadata, ResolvingMetadata } from "next";
import Sources from "@/components/sources";
import PersonsOfInterest from "@/components/persons-of-interest";
import PreviousNextFlags from "@/components/previous-next-flags";
import Divider from "@/components/divider";
import HistoricalFlags from "@/components/other-flags";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data: Flags = loadJsonFromDataFile("data.json");

  const result = data.flags.find((flag: DataPoint) => {
    return flag.link === params.slug;
  });

  return {
    title: result ? result.title : "Dutch Flags",
    icons: {
      icon: [
        { url: result!.favicon[0] },
        { url: result!.favicon[1] },
        { url: result!.favicon[2] },
      ],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const data: Flags = loadJsonFromDataFile("data.json");

  const result = data.flags.find((flag: DataPoint) => {
    return flag.link === params.slug;
  });
  const flag: DataPoint = result!;

  return (
    <>
      <Header {...flag} />
      <Introduction {...flag} />
      <Divider />
      <FlagDisplay {...flag} />
      <Divider />
      <Colors {...flag} />
      <Divider />
      {flag.statistics && (
        <>
          <Statistics {...flag.statistics} />
          <Divider />
        </>
      )}
      <CoatOfArms {...flag} />
      <Divider />
      {flag.personsOfInterest && (
        <>
          <PersonsOfInterest {...flag} />
          <Divider />
        </>
      )}
      {flag.otherFlagsPaths && flag.otherFlagsPaths.length > 0 && (
        <>
          <HistoricalFlags {...flag} />
          <Divider />
        </>
      )}
      <PreviousNextFlags {...flag} />
      <Sources {...flag} />
    </>
  );
}
