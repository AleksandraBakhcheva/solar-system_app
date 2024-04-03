import "./PlanetTable.scss";
import { IPlanetProps } from "../../utils/Interfaces";

export default function PlanetTable({ planet }: IPlanetProps) {
  return (
    <div className="planet-table__container">
      <div className="planet-table__container_section">
        <h3 className="planet-table__container_section-title">History</h3>
        <div className="table__container">
          <div className="table__container_row">
            <div className="table__container_item">is planet</div>
            <div className="table__container_value">{planet.bodyType}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">english name</div>
            <div className="table__container_value">{planet.englishName}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">discovery date</div>
            {planet.discoveryDate ? (
              <div className="table__container_value">
                {planet.discoveryDate}
              </div>
            ) : (
              <div className="table__container_value">not defined</div>
            )}
          </div>
          <div className="table__container_row">
            <div className="table__container_item">discovered by</div>
            {planet.discoveredBy ? (
              <div className="table__container_value">
                {planet.discoveredBy}
              </div>
            ) : (
              <div className="table__container_value">not defined</div>
            )}
          </div>
          <div className="table__container_row">
            <div className="table__container_item">moons quantity</div>
            {planet.moons?.length != null ? (
              <div className="table__container_value">
                {planet.moons?.length}
              </div>
            ) : (
              <div className="table__container_value">0</div>
            )}
          </div>
        </div>
      </div>
      <div className="planet-table__container_section">
        <h3 className="planet-table__container_section-title">
          Physical characteristics
        </h3>
        <div className="table__container">
          <div className="table__container_row">
            <div className="table__container_item">gravity</div>
            <div className="table__container_value">{planet.gravity}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">mass</div>
            <div className="table__container_value">
              {planet.mass?.massValue}
            </div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">volume</div>
            <div className="table__container_value">{planet.vol?.volValue}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">escape</div>
            <div className="table__container_value">{planet.escape}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">mean radius</div>
            <div className="table__container_value">{planet.meanRadius}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">avg temp</div>
            <div className="table__container_value">{planet.avgTemp}</div>
          </div>
        </div>
      </div>
      <div className="planet-table__container_section">
        <h3 className="planet-table__container_section-title">
          Orbital parameter
        </h3>
        <div className="table__container">
          <div className="table__container_row">
            <div className="table__container_item">aphelion</div>
            <div className="table__container_value">{planet.aphelion}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">perihelion</div>
            <div className="table__container_value">{planet.perihelion}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">sideral orbit</div>
            <div className="table__container_value">{planet.sideralOrbit}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">sideral rotation</div>
            <div className="table__container_value">
              {planet.sideralRotation}
            </div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">inclination</div>
            <div className="table__container_value">{planet.inclination}</div>
          </div>
          <div className="table__container_row">
            <div className="table__container_item">eccentricity</div>
            <div className="table__container_value">{planet.eccentricity}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
