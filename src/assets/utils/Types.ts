import { SetStateAction } from "react";
import { IPlanet } from "./Interfaces";

export type PlanetContextType = {
  setPlanets: (value: SetStateAction<IPlanet[]>) => void;
  planets: any;
  loading: boolean;
  planetsPictures: { [key: string]: string };
  sendApiRequest: () => void;
};
