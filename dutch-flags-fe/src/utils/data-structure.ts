import { FlagMetadataProps } from "@/components/flag-metadata";

export interface HeaderProps {
  title: string;
  subtitle: string;
  flagPath: string;
  link: string;
  metadata: FlagMetadataProps;
}

export interface Flags {
  flags: DataPoint[];
}

export interface DataPoint {
  title: string;
  subtitle?: string;
  flagPath: string;
  flagDescription: string;
  flagAdoption?: string;
  coatOfArms: string;
  historicalFlagPaths?: string[];
  colors: Colors;
  colorSymbolism?: string[];
  link: string;
  category: string;
  metadata: FlagMetadataProps;
}

export interface Colors {
  primary: Color[];
  secondary: Color[];
}
export interface Color {
  value: string;
  rgb: string;
  name: string;
  primary: boolean;
}
