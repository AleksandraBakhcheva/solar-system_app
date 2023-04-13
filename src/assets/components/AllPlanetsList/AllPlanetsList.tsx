import { useContext } from "react";
import "./AllPlanetsList.scss";
import PlanetCard from "./PlanetCard";
import { IPlanet } from "./Interfaces";
import { PlanetsContext } from "../../сontext/PlanetsContext";

export default function AllPlanets() {
    
    const { planets, loading } = useContext(PlanetsContext)

    return(
        <div className='all-planets-outer-container'>
            <div className="all-planets-inner-container">
            {loading && <p className="loading-message">Loading...</p>}
            {planets.map(
                (planet: IPlanet) => 
                <PlanetCard
                planet={planet}
                key={planet.id}
                />)
            }
            </div>                   
        </div>
    )

}
