import "./PlanetInfo.scss";
//import { useContext, useState } from "react"; 
import { useParams } from "react-router-dom";
//import { PlanetsContext } from "../../сontext/PlanetsContext";
//import { IPlanet, PlanetProps } from "../AllPlanetsList/Interfaces";

export default function PlanetInfo(){    
    const params = useParams();
    const current = params.id;
   // const { images, planets } = useContext(PlanetsContext)

    /*const defaultPlanet: IPlanet = {
        englishName: "Earth"
    }*/        
   // const [item, setItem] = useState(planet.englishName)

    return(
        <div className="planet-container">{current}</div>
    )

}