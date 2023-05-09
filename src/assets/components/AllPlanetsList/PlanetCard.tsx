import "./AllPlanetsList.scss";
import { useContext, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IPlanetProps } from "../../utils/Interfaces";
import { PlanetsContext } from "../../сontext/PlanetsContext";

export default function PlanetCard({ planet }: IPlanetProps) {
  const { planetsPictures } = useContext(PlanetsContext);
  let imagePath: string = planetsPictures[planet.englishName];
  const cardRef = useRef<HTMLAnchorElement>(null);
  let location = useLocation();

  useEffect(() => {
    if (cardRef.current?.className.includes("active")) {
      cardRef.current?.focus();
    }
  }, [location.pathname]);

  return (
    <div className="card" id={planet.englishName}>
      <NavLink to={`/${planet.englishName}`} ref={cardRef}>
        <img className="card__img" src={imagePath} alt="planet" />
        <div className="card__name">{planet.englishName}</div>
      </NavLink>
    </div>
  );
}
