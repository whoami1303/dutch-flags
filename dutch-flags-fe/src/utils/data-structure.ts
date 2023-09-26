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
  introduction: string;
  flagPath: string;
  flagDescription: string;
  flagAdoption?: string;
  favicon: string[];
  coatOfArms: string;
  historicalFlagPaths?: string[];
  colors: Colors;
  colorSymbolism?: string[];
  link: string;
  category: string;
  statistics?: Statistics;
  metadata: FlagMetadataProps;
  sources: Source[];
}

export interface Source {
  name: string;
  link: boolean;
}

export interface Statistics {
  population: number;
  coordinates: Coordinates;
  area: number;
  density: number;
}

export interface Coordinates {
  latitude: {
    degrees: number;
    minutes?: number;
    seconds?: number;
    direction: string;
  };
  longitude: {
    degrees: number;
    minutes?: number;
    seconds?: number;
    direction: string;
  };
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
