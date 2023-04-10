import { useEffect, useState } from "react";
import "./AllPlanets.scss";
import PlanetCard from "./PlanetCard";
import { IPlanet } from "./interfaces";

const needNames:string[] = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto']

export default function AllPlanets(){
    const [planets, setPlanets] = useState<IPlanet[]>([])

    async function sendApiRequest(): Promise<IPlanet[]> {
        //let response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/terre`)
        return await fetch(`https://api.le-systeme-solaire.net/rest/bodies`)
            .then(res => res.json())
            .then(res => {
                const planetList: IPlanet[] = res.bodies;                    
                const needList: IPlanet[] = planetList.filter((planet) => needNames.includes(planet.englishName))
               // console.log("needList", needList)                    
                setPlanets(needList.reverse())
                return needList
            })
    }


    useEffect(() => {
        sendApiRequest()
    }, [])

    return(
        <ul className='all-planets-container'>
            {planets.map(
                planet => 
                <PlanetCard
                planet={planet}
                key={planet.id}
                />)
            }                   
        </ul>
    )

}
/**
 *   <PlanetCard planet={planets[0]}/>
                <PlanetCard planet={planets[1]}/>
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