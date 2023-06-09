export interface IPlanet {
  alternativeName?: string;
  aphelion?: number;
  argPeriapsis?: number;
  aroundPlanet?: object;
  avgTemp?: number;
  axialTilt?: number;
  bodyType?: string;
  density?: number;
  dimension?: string;
  discoveredBy?: string;
  discoveryDate?: string;
  eccentricity?: number;
  englishName: string;
  equaRadius?: number;
  escape?: number;
  flattening?: number;
  gravity?: number;
  id?: string;
  inclination?: number;
  isPlanet?: boolean;
  longAscNode?: number;
  mainAnomaly?: number;
  mass?: { massValue: number; massExponent: number };
  meanRadius?: number;
  moons?: [];
  name?: string;
  perihelion?: number;
  polarRadius?: number;
  semimajorAxis?: number;
  sideralOrbit?: number;
  sideralRotation?: number;
  vol?: { volValue: number; volExponent: number };
}

export interface IPlanetProps {
  planet: IPlanet;
}
