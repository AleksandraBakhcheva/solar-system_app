import "./PlanetInfo.scss";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlanetsContext } from "../../сontexts/PlanetsContext";
import PlanetTable from "../PlanetTable/PlanetTable";
import Loading from "../Loading/Loading";
import Planet404 from "./Planet404";

export default function PlanetInfo() {
  const params = useParams();
  const current = params.id;
  const { planetsPictures, planets, loading } = useContext(PlanetsContext);

  const planetItem = planets.find(
    (item: { englishName: string }) => item.englishName === current
  );

  let imagePath: string = planetsPictures[planetItem?.englishName];

  if (!planetItem && loading) {
    return <Loading />;
  }
  if (!planetItem && !loading) {
    return <Planet404 />;
  }

  return (
    <div className="planet-container_wrap">
      <div className="planet-container">
        <div className="planet-container__name">{planetItem.englishName}</div>
        <div className="planet-container__img">
          <img src={imagePath} alt="planet" />
        </div>
      </div>
      <PlanetTable planet={planetItem} />
    </div>
  );
}
//
