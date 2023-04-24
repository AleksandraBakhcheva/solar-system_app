import { useContext } from "react";
import "./AllPlanetsList.scss";
import PlanetCard from "./PlanetCard1";
import { IPlanet } from "../../utils/Interfaces";
import { PlanetsContext } from "../../сontext/PlanetsContext";
import PlanetInfo from "../PlanetInfo/PlanetInfo";

export default function AllPlanets() {
  const { planets } = useContext(PlanetsContext);

  return (
    <div className="all-planets-outer-container" id="planets">
      <div className="all-planets-inner-container">
        {planets.map((planet: IPlanet) => (
          <PlanetCard planet={planet} key={planet.id} />
        ))}
      </div>
    </div>
  );
}
