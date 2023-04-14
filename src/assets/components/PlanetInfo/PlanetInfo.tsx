import "./PlanetInfo.scss";
import { useContext, useState } from "react"; 
import { useParams } from "react-router-dom";
import { PlanetsContext } from "../../сontext/PlanetsContext";
//mport { IPlanet, PlanetProps } from "../AllPlanetsList/Interfaces";

export default function PlanetInfo(){    
    const params = useParams();
    const current = params.id;
    const { images, planets } = useContext(PlanetsContext)
    

    return(
        <div className="planet-container">{current}</div>
    )

}