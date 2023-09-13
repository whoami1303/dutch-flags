import { loadJsonFromDataFile } from "../utils/load-json-from-data-file";
import { WebsiteProps } from "../utils/data-structure";
import Grid from "../components/grid";
import Header from "@/components/header";

export default function Home() {
  const data: WebsiteProps = loadJsonFromDataFile("data.json");
  return (
    <>
      <Header {...data.header} />
      <Grid {...data} />
    </>
  );
}
