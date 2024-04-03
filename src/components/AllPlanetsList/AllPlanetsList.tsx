import "./AllPlanetsList.scss";
import { useContext } from "react";
import { IPlanet } from "../../utils/Interfaces";
import { PlanetsContext } from "../../сontexts/PlanetsContext";
import PlanetCard from "../PlanetCard/PlanetCard";

export default function AllPlanets() {
  const { planets } = useContext(PlanetsContext);

  return (
    <div className="all-planets__container-outer" id="planets">
      <div id={"planets"} className="all-planets__container-inner">
        {planets.map((planet: IPlanet) => (
          <PlanetCard planet={planet} key={planet.id} />
        ))}
      </div>
    </div>
  );
}
