import "./PlanetInfo.scss";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlanetsContext } from "../../сontexts/PlanetsContext";
import Loading from "../Loading/Loading";
import PlanetTable from "../PlanetTable/PlanetTable";
import UnknownPlanet from "../UnknownPlanet/UnknownPlanet";

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
    return <UnknownPlanet />;
  }

  return (
    <div className="planet__container">
      <div className="planet__container_box">
        <div className="planet__container_name">{planetItem.englishName}</div>
        <div className="planet__container_img">
          <img src={imagePath} alt="planet" />
        </div>
      </div>
      <PlanetTable planet={planetItem} />
    </div>
  );
}
