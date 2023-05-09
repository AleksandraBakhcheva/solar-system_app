import { createContext, useEffect, useState } from "react";
import { IPlanet } from "../utils/Interfaces";
import { planetsPictures } from "../utils/PlanetsPictures";
import { planetsNames } from "../utils/PlanetsNames";
import { PlanetContextType } from "../utils/Types";
import Error from "../components/Error/Error";

export const PlanetsContext = createContext<PlanetContextType>({
  setPlanets: () => {},
  planets: [],
  loading: false,
  planetsPictures: {},
  sendApiRequest: () => {},
});

export const PlanetsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendApiRequest(): Promise<void | IPlanet[]> {
    setLoading(true);
    return await fetch(`https://api.le-systeme-solaire.net/rest/bodies`)
      .then((res) => res.json())
      .then((res) => {
        const planetList: IPlanet[] = res.bodies;
        const needList: IPlanet[] = planetList.filter((planet) =>
          planetsNames.includes(planet.englishName)
        );
        setPlanets(needList);
        setLoading(false);
        return needList;
      })
      .catch((error) => setError(error));
  }

  useEffect(() => {
    sendApiRequest();
  }, []);

  const values = {
    loading,
    setPlanets,
    planets,
    sendApiRequest,
    planetsPictures,
  };

  console.log(planets);

  if (error) return <Error />;

  return (
    <PlanetsContext.Provider value={values}>{children}</PlanetsContext.Provider>
  );
};
