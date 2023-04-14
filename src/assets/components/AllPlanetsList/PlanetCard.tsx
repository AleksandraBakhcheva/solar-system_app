import "./AllPlanetsList.scss";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IPlanet, PlanetProps } from "./Interfaces";
import { PlanetsContext } from "../../сontext/PlanetsContext";

export default function PlanetCard({planet}:PlanetProps){
    
    const { images, planets } = useContext(PlanetsContext)
    let imagePath:string = images[planet.englishName]

  return (
    <div className="card" id={planet.englishName}>
      <NavLink to={`/${planet.englishName}`}>
        <img className="card__img" src={imagePath} alt="planet" />
        <div className="card__name">{planet.englishName}</div>
      </NavLink>
    </div>
  );
}
