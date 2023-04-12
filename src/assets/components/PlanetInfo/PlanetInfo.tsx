
import "./PlanetInfo.scss";
import { useParams } from "react-router-dom";

export default function PlanetInfo(){    
    const params = useParams();
    const current = params.id;

    return(
        <div className="planet-container">{current}</div>
    )

}