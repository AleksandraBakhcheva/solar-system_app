import "./AllPlanetsList.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IPlanet, PlanetProps } from "../../utils/Interfaces";
import { PlanetsContext } from "../../сontext/PlanetsContext";
import PlanetInfo from "../PlanetInfo/PlanetInfo";

export default function PlanetCard({ planet, onClick }: PlanetProps) {
  const { images, planetItem, setPlanetItem } = useContext(PlanetsContext);
  let imagePath: string = images[planet.englishName];
  const cardRef = useRef<HTMLDivElement>(null);
  let location = useLocation();

  //const [item, setItem] = useState<IPlanet>(i[7]);

  /*const clickHandler = (e: any): void => {
    //  e.preventDefault();
    setItem(e.target.id);
    console.log(item);
  };*/

  useEffect(() => {
    if (cardRef.current?.className.includes("active")) {
      cardRef.current?.focus();
    }
  }, [location.pathname]);

  return (
    <>
      <div
        className="card"
        id={planet.englishName}
        ref={cardRef}
        onClick={() => setPlanetItem(planet)}
      >
        <NavLink to={`/${planet.englishName}`}>
          <img className="card__img" src={imagePath} alt="planet" />
          <div className="card__name">{planet.englishName}</div>
        </NavLink>
      </div>
    </>
  );
}
