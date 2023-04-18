import { createContext, useEffect, useState } from "react";
import { IPlanet } from "../components/AllPlanetsList/Interfaces";
import Earth from "../images/earth.png";
import Jupiter from "../images/jupiter.png";
import Mars from "../images/mars.png";
import Mercury from "../images/mercury.png";
import Neptune from "../images/neptune.png";
import Pluto from "../images/pluto.png";
import Saturn from "../images/saturn.png";
import Uranus from "../images/uranus.png";
import Venus from "../images/venus.png";
import Error from "../components/Error/Error";

interface IPlanetContext {
  setPlanets: any;
  planets: any;
  loading: boolean;
  images: any;
  sendApiRequest: () => void;
}

export const PlanetsContext = createContext<IPlanetContext>({
  setPlanets: [],
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
  const images: { [key: string]: any } = {
    Mercury: Mercury,
    Venus: Venus,
    Earth: Earth,
    Mars: Mars,
    Jupiter: Jupiter,
    Saturn: Saturn,
    Uranus: Uranus,
    Neptune: Neptune,
    Pluto: Pluto,
  };

  const needNames: string[] = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
  ];

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
