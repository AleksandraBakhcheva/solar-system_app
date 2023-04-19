import { SetStateAction, createContext, useEffect, useState } from "react";
import { IPlanet } from "../utils/Interfaces";
import { images } from "../utils/images";
import { needNames } from "../utils/needNames";
import Error from "../components/Error/Error";

interface IPlanetContext {
  setPlanets: (value: SetStateAction<IPlanet[]>) => void;
  planets: any;
  loading: boolean;
  images: { [key: string]: any };
  sendApiRequest: () => void;
}

export const PlanetsContext = createContext<IPlanetContext>({
  setPlanets: () => {},
  planets: [],
  loading: false,
  images: {},
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
          needNames.includes(planet.englishName)
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

  const values = { loading, setPlanets, planets, sendApiRequest, images };

  if (error) return <Error />;

  return (
    <PlanetsContext.Provider value={values}>{children}</PlanetsContext.Provider>
  );
};
