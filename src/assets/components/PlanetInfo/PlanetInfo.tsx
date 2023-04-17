import "./PlanetInfo.scss";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PlanetsContext } from "../../сontext/PlanetsContext";

export default function PlanetInfo() {
  const params = useParams();
  const current = params.id;
  const { images, planets } = useContext(PlanetsContext);

  const planet = planets.find(
    (item: { englishName: string }) => item.englishName === current
  );
  let imagePath: string = images[current!];

  if (!planet) {
    return <div className="not_found__message">Object not found</div>;
  }

  return (
    <div className="planet-container">
      <div className="planet-container__name">{planet.englishName}</div>
      <div className="planet-container__img">
        <img src={imagePath} alt="planet" />
      </div>
    </div>
  );
}
