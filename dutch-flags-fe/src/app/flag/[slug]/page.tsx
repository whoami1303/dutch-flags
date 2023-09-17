import { DataPoint, Flags } from "@/utils/data-structure";
import { loadJsonFromDataFile } from "@/utils/load-json-from-data-file";
import Header from "@/components/header";
import Colors from "@/components/colors/colors";
import CoatOfArms from "@/components/coat-of-arms";
import FlagDisplay from "@/components/flag-display";

export default function Page({ params }: { params: { slug: string } }) {
  const data: Flags = loadJsonFromDataFile("data.json");

  const result = data.flags.find((flag: DataPoint) => {
    return flag.link === params.slug;
  });

  const flag: DataPoint = result!;
  return (
    <>
      <Header {...flag} />
      <FlagDisplay {...flag} />
      <CoatOfArms {...flag} />
      <Colors {...flag} />
    </>
  );
}
