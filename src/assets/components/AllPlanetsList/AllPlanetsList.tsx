import { useEffect, useState } from "react";
import "./AllPlanetsList.scss";
import PlanetCard from "./PlanetCard";
import { IPlanet } from "./Interfaces";

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

export default function AllPlanets() {
  const [planets, setPlanets] = useState<IPlanet[]>([]);
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState('')

  async function sendApiRequest(): Promise<IPlanet[]> {
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
      });
  }

  useEffect(() => {
    sendApiRequest();
  }, []);

  return (
    <div className="all-planets-outer-container">
      <div className="all-planets-inner-container">
        {loading && <p className="loading-message">Loading...</p>}
        {planets.map((planet) => (
          <PlanetCard planet={planet} key={planet.id} />
        ))}
      </div>
    </div>
  );
}
