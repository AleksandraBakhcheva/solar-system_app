import "./PlanetInfo.scss";
import planet404 from "../../images/planet404.png";

export default function Planet404() {
  return (
    <div className="planet-container_wrap">
      <div className="planet-container">
        <p className="planet-container__name">Uknown object</p>
        <div className="planet-container__img">
          <img src={planet404} alt="planet" />
        </div>
      </div>
    </div>
  );
}
