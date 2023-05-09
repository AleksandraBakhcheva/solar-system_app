import { useContext } from "react";
import "./AllPlanetsList.scss";
import PlanetCard from "./PlanetCard";
import { IPlanet } from "../../utils/Interfaces";
import { PlanetsContext } from "../../сontexts/PlanetsContext";

export default function AllPlanets() {
  const { planets } = useContext(PlanetsContext);

  return (
    <div className="all-planets-outer-container" id="planets">
      <div id={"planets"} className="all-planets-inner-container">
        {planets.map((planet: IPlanet) => (
          <PlanetCard planet={planet} key={planet.id} />
        ))}
      </div>
    </div>
  );
}
