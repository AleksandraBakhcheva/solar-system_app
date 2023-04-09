import "./AllPlanets.scss";
import PlanetCard from "../PlanetCard/PlanetCard";
import { IPlanet } from "./interfaces/IPlanet";


const planets: IPlanet[] = [
    {
        id: 1,
        name: 'Earth',
        img: 'https://s0.rbk.ru/v6_top_pics/resized/640xH/media/img/1/42/756629959272421.jpg'
    },
    {
        id: 2,
        name: 'Mars',
        img: 'https://s0.rbk.ru/v6_top_pics/resized/640xH/media/img/1/42/756629959272421.jpg'
    }
]

export default function AllPlanets(){
    return(
        <div className='all-planets-container'>
            <div className='card-wrap'>
                <PlanetCard planet={planets[0]}/>
                <PlanetCard planet={planets[1]}/>
            </div>
        </div>
    )

}
/**
 *  <div className='container'><h1 className='caption'>Flachcards</h1>
            <div className='card-wrap'>             
            {
                data.map((word) =>
                <Card key={word.id} english={word.english}
                transcription={word.transcription}
                russian={word.russian}/>
            )}
            </div>
        </div>
 */