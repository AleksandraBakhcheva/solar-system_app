import "./PlanetCard.scss";
import { IPlanet } from "../AllPlanets/interfaces/IPlanet";

interface PlanetProps{
    planet: IPlanet
}

export default function PlanetCard(props:PlanetProps){
    return(
        <div className="card-wrap">
            <img src={props.planet.img}/>
            <div>{props.planet.name}</div>
        </div>
    )

}