import "./PlanetTable.scss";
import { PlanetProps } from "../AllPlanetsList/Interfaces";

export default function PlanetTable({ planet }: PlanetProps) {
  return (
    <div className="planet-container_table">
      <div className="planet-container_table__section">
        <h3 className="table__title">History</h3>
        <div className="table">
          <div className="table__row">
            <div className="table__item">is planet</div>
            <div className="table__value">{planet.bodyType}</div>
          </div>
          <div className="table__row">
            <div className="table__item">english name</div>
            <div className="table__value">{planet.englishName}</div>
          </div>
          <div className="table__row">
            <div className="table__item">discovery date</div>
            {planet.discoveryDate ? (
              <div className="table__value">{planet.discoveryDate}</div>
            ) : (
              <div className="table__value">not defined</div>
            )}
          </div>
          <div className="table__row">
            <div className="table__item">discovered by</div>
            {planet.discoveredBy ? (
              <div className="table__value">{planet.discoveredBy}</div>
            ) : (
              <div className="table__value">not defined</div>
            )}
          </div>
          <div className="table__row">
            <div className="table__item">moons quantity</div>
            {planet.moons?.length != null ? (
              <div className="table__value">{planet.moons?.length}</div>
            ) : (
              <div className="table__value">0</div>
            )}
          </div>
        </div>
      </div>
      <div className="planet-container_table__section">
        <h3 className="table__title">Physical characteristics</h3>
        <div className="table">
          <div className="table__row">
            <div className="table__item">gravity</div>
            <div className="table__value">{planet.gravity}</div>
          </div>
          <div className="table__row">
            <div className="table__item">mass</div>
            <div className="table__value">{planet.mass?.massValue}</div>
          </div>
          <div className="table__row">
            <div className="table__item">volume</div>
            <div className="table__value">{planet.vol?.volValue}</div>
          </div>
          <div className="table__row">
            <div className="table__item">escape</div>
            <div className="table__value">{planet.escape}</div>
          </div>
          <div className="table__row">
            <div className="table__item">mean radius</div>
            <div className="table__value">{planet.meanRadius}</div>
          </div>
          <div className="table__row">
            <div className="table__item">avg temp</div>
            <div className="table__value">{planet.avgTemp}</div>
          </div>
        </div>
      </div>
      <div className="planet-container_table__section">
        <h3 className="table__title">Orbital parameter</h3>
        <div className="table">
          <div className="table__row">
            <div className="table__item">aphelion</div>
            <div className="table__value">{planet.aphelion}</div>
          </div>
          <div className="table__row">
            <div className="table__item">perihelion</div>
            <div className="table__value">{planet.perihelion}</div>
          </div>
          <div className="table__row">
            <div className="table__item">sideralOrbit</div>
            <div className="table__value">{planet.sideralOrbit}</div>
          </div>
          <div className="table__row">
            <div className="table__item">sideralRotation</div>
            <div className="table__value">{planet.sideralRotation}</div>
          </div>
          <div className="table__row">
            <div className="table__item">inclination</div>
            <div className="table__value">{planet.inclination}</div>
          </div>
          <div className="table__row">
            <div className="table__item">eccentricity</div>
            <div className="table__value">{planet.eccentricity}</div>
          </div>
          <div className="table__row">
            <div className="table__item">avgTemp</div>
            <div className="table__value">{planet.avgTemp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
