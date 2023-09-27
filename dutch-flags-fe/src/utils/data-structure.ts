import { FlagMetadataProps } from "@/components/flag-metadata";

export interface CoatOfArms {
  description?: string;
  path: string;
}

export interface Color {
  value: string;
  rgb: string;
  name: string;
  primary: boolean;
}

export interface Colors {
  primary: Color[];
  secondary: Color[];
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

export interface DataPoint {
  category: string;
  coatOfArms: CoatOfArms;
  colors: Colors;
  colorSymbolism?: string[];
  favicon: string[];
  flagAdoption?: string;
  flagDescription: string;
  flagPath: string;
  introduction: string;
  link: string;
  metadata: FlagMetadataProps;
  otherFlagsPaths?: OtherFlags[];
  personsOfInterest?: string[];
  sequenceFlags: SequenceFlags;
  sources: Source[];
  statistics?: Statistics;
  subtitle?: string;
  title: string;
}

export interface Flags {
  flags: DataPoint[];
}

export interface HeaderProps {
  title: string;
  subtitle: string;
  flagPath: string;
  link: string;
  metadata: FlagMetadataProps;
}

export interface OtherFlags {
  metadata: string;
  path: string;
}
export interface SequenceFlags {
  previous: SequenceFlagsItem;
  next: SequenceFlagsItem;
}

export interface SequenceFlagsItem {
  title: string;
  link: string;
}

export interface Source {
  name: string;
  link: string;
}

export interface Statistics {
  population: number;
  coordinates: Coordinates;
  area: number;
  density: number;
}
