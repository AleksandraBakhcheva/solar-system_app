import "./PlanetInfo.scss";
import { useContext, useState } from "react"; 
import { useParams } from "react-router-dom";
import { PlanetsContext } from "../../сontext/PlanetsContext";
import { PlanetProps } from '../AllPlanetsList/Interfaces';

export default function PlanetInfo(){    
    const params = useParams();
    const current = params.id;
    const { images, planets } = useContext(PlanetsContext)
    
    const planet = planets.find((item: { englishName: string; }) => item.englishName === current);
    let imagePath: string = images[current!]

    return (
        <div>
            {planet ? (<div className="planet-container">
                <div className="planet-container__name">{ planet.englishName}</div>
                <img className="planet-container__img" src={imagePath} alt={ planet.englishName} />
            </div>) : (
                <div>Object not found</div>
            )}
        </div>
    )
}