import { useContext } from "react";
import "./AllPlanetsList.scss";
import PlanetCard from "./PlanetCard";
import { IPlanet } from "../../utils/Interfaces";
import { PlanetsContext } from "../../сontext/PlanetsContext";

export default function AllPlanets() {
  const { planets } = useContext(PlanetsContext);

  return (
    <div className="all-planets-outer-container">
      <div className="all-planets-inner-container">
        {planets.map((planet: IPlanet) => (
          <PlanetCard planet={planet} key={planet.id} />
        ))}
      </div>
    </div>
  );
}
