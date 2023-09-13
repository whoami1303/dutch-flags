export interface WebsiteProps {
  header: DataPoint;
  country: DataPoint[];
  provinces: DataPoint[];
  historical_provinces: DataPoint[];
  public_bodies: DataPoint[];
  municipalities: DataPoint[];
  region_with_no_administrative_status: DataPoint[];
  royal: DataPoint[];
  governmental: DataPoint[];
  military_and_naval: DataPoint[];
}

export interface DataPoint {
  title: string;
  subtitle?: string;
  flagPath: string;
  historicalFlagPaths?: string[];
  colors?: Color[];
}

export interface Color {
  value: string;
  name: string;
  primary: boolean;
}
