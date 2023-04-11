import "./AllPlanetsList.scss";
import { NavLink } from "react-router-dom";
import { IPlanet } from "./interfaces";
import Earth from '../../images/earth.svg';
import Jupiter from '../../images/jupiter.svg';
import Mars from '../../images/mars.svg';
import Mercury from '../../images/mercury.svg';
import Neptune from '../../images/neptune.svg';
import Pluto from '../../images/pluto.svg';
import Saturn from '../../images/saturn.svg';
import Uranus from '../../images/uranus.svg';
import Venus from '../../images/venus.svg';

interface PlanetProps{
    planet: IPlanet
}
const images:{[key: string]: any} = {
    'Mercury': Mercury,
    'Venus': Venus,
    'Earth': Earth,
    'Mars': Mars,
    'Jupiter': Jupiter,
    'Saturn': Saturn,
    'Uranus': Uranus,
    'Neptune': Neptune,
    'Pluto': Pluto        
}

export default function PlanetCard({planet}:PlanetProps){

    let imagePath:string = images[planet.englishName]

    return (
        <div className="card">
            <NavLink to={`/${planet.englishName}`}>        
                <img className="card__img" src={imagePath} alt={planet.englishName}/>
                <div className="card__name">{planet.englishName}</div>
            </NavLink>
        </div>
    )
}
//<li className="card" > </li>
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