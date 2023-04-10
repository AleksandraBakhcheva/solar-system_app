//import { useState } from "react";
import "./PlanetCard.scss";
import { IPlanet } from "./interfaces";
import Earth from '../../images/Earth.svg';
import Jupiter from '../../images/Jupiter.svg';
import Mars from '../../images/Mars.svg';
import Mercury from '../../images/Mercury.svg';
import Neptune from '../../images/Neptune.svg';
import Pluto from '../../images/Pluto.svg';
import Saturn from '../../images/Saturn.svg';
import Uranus from '../../images/Uranus.svg';
import venus from '../../images/venus.svg';

interface PlanetProps{
    planet: IPlanet
}

export default function PlanetCard({planet}:PlanetProps){
    //const [item, setItem] = useState(planet.id)
    const imagePath = `../../images/${planet.englishName}.svg`
    return(
        <div className="card-wrap" > 
            <img src={imagePath} alt={planet.englishName}/>
            <div>{planet.englishName}</div>
        </div>
    )

}
//onClick={() => setItem(planet.id)}> <img src={planet.img} alt={planet.name}/>