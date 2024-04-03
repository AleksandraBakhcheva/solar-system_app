import "../PlanetInfo/PlanetInfo.scss";
import planet404 from "../../assets/images/planet404.png";

export default function UnknownPlanet() {
  return (
    <div className="planet__container">
      <div className="planet__container_box">
        <p className="planet__container_name">Unknown object</p>
        <div className="planet__container_img">
          <img src={planet404} alt="planet" />
        </div>
      </div>
    </div>
  );
}
