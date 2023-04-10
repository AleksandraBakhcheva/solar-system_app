//import { useState } from "react";
import "./AllPlanets.scss";
import { NavLink } from "react-router-dom";
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
        <div className="card-wrap">
            <NavLink to={`/${planet.englishName}`}>            
            <li className="card" >            
                <img className="card_img" src={imagePath} alt={planet.englishName}/>
                <div className="card_name">{planet.englishName}</div>                
            </li>
            </NavLink>
        </div>
    )

}
//onClick={() => setItem(planet.id)}> <img src={planet.img} alt={planet.name}/>
/**                 <li>
                        <button className={className} onClick={handleClick}>Add new word</button>
                        <Modal  ><NewWord /></Modal></li>                    
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/flachcards">Flachcards</NavLink>
                    </li>
                    <li>
                        <NavLink to="/game">Game</NavLink>
                    </li> */