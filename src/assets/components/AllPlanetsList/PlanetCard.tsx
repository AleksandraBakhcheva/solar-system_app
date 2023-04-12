import "./AllPlanetsList.scss";
import { NavLink } from "react-router-dom";
import { IPlanet } from "./Interfaces";
import Earth from "../../images/earth.svg";
import Jupiter from "../../images/jupiter.svg";
import Mars from "../../images/mars.svg";
import Mercury from "../../images/mercury.svg";
import Neptune from "../../images/neptune.svg";
import Pluto from "../../images/pluto.svg";
import Saturn from "../../images/saturn.svg";
import Uranus from "../../images/uranus.svg";
import Venus from "../../images/venus.svg";

interface PlanetProps {
  planet: IPlanet;
}
const images: { [key: string]: any } = {
  Mercury: Mercury,
  Venus: Venus,
  Earth: Earth,
  Mars: Mars,
  Jupiter: Jupiter,
  Saturn: Saturn,
  Uranus: Uranus,
  Neptune: Neptune,
  Pluto: Pluto,
};

export default function PlanetCard({ planet }: PlanetProps) {
  let imagePath: string = images[planet.englishName];

  return (
    <div className="card">
      <NavLink to={`/${planet.englishName}`}>
        <img className="card__img" src={imagePath} alt={planet.englishName} />
        <div className="card__name">{planet.englishName}</div>
      </NavLink>
    </div>
  );
}
