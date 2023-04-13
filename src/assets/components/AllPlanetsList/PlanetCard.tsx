import "./AllPlanetsList.scss";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IPlanet } from "./Interfaces";
import { PlanetsContext } from "../../сontext/PlanetsContext";

interface PlanetProps{
    planet: IPlanet
}

export default function PlanetCard({planet}:PlanetProps){
    
    const { images } = useContext(PlanetsContext)
    let imagePath:string = images[planet.englishName]

    return (
        <div className="card" >
            <NavLink to={`/${planet.englishName}`}>        
                <img className="card__img" src={imagePath} alt={planet.englishName}/>
                <div className="card__name">{planet.englishName}</div>
            </NavLink>
        </div>
    )
}