import "./PlanetInfo.scss";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlanetsContext } from "../../сontext/PlanetsContext";
import PlanetTable from "./PlanetTable";
import Loading from "../Loading/Loading";
import Planet404 from "./Planet404";

export default function PlanetInfo() {
  const params = useParams();
  const current = params.id;
  const { images, planets, loading } = useContext(PlanetsContext);

  const planet = planets.find(
    (item: { englishName: string }) => item.englishName === current
  );
  let imagePath: string = images[current!];

  if (!planet && loading) {
    return <Loading />;
  }
  if (!planet && !loading) {
    return <Planet404 />;
  }

  return (
    <div className="planet-container_wrap">
      <div className="planet-container">
        <div className="planet-container__name">{planet.englishName}</div>
        <div className="planet-container__img">
          <img src={imagePath} alt="planet" />
        </div>
      </div>
      <PlanetTable planet={planet} />
    </div>
  );
}
