import { loadJsonFromDataFile } from "../utils/load-json-from-data-file";
import { HeaderProps, Flags } from "../utils/data-structure";
import Grid from "../components/grid";
import Header from "@/components/header";

export default function Home() {
  const header: HeaderProps = loadJsonFromDataFile("header.json");
  const data: Flags = loadJsonFromDataFile("data.json");

  return (
    <>
      <Header {...header} />
      <Grid {...data} />
    </>
  );
}
