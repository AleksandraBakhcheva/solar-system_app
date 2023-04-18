import { createContext, useEffect, useState } from "react";
import { IPlanet } from "../components/AllPlanetsList/Interfaces";
import Earth from "../images/real-png/earth.png";
import Jupiter from "../images/real-png/jupiter.png";
import Mars from "../images/real-png/mars.png";
import Mercury from "../images/real-png/mercury.png";
import Neptune from "../images/real-png/neptune.png";
import Pluto from "../images/real-png/pluto.png";
import Saturn from "../images/real-png/saturn.png";
import Uranus from "../images/real-png/uranus.png";
import Venus from "../images/real-png/venus.png";
import Error from "../components/Error/Error";

// import Earth from "../images/cartoon-png/earth.png";
// import Jupiter from "../images/cartoon-png/jupiter.png";
// import Mars from "../images/cartoon-png/mars.png";
// import Mercury from "../images/cartoon-png/mercury.png";
// import Neptune from "../images/cartoon-png/neptune.png";
// import Pluto from "../images/cartoon-png/pluto.png";
// import Saturn from "../images/cartoon-png/saturn.png";
// import Uranus from "../images/cartoon-png/uranus.png";
// import Venus from "../images/cartoon-png/venus.png";

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
