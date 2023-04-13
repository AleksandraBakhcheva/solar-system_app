import { createContext, useEffect, useState } from 'react';
import { IPlanet } from '../components/AllPlanetsList/Interfaces';
import Earth from '../images/earth.svg';
import Jupiter from '../images/jupiter.svg';
import Mars from '../images/mars.svg';
import Mercury from '../images/mercury.svg';
import Neptune from '../images/neptune.svg';
import Pluto from '../images/pluto.svg';
import Saturn from '../images/saturn.svg';
import Uranus from '../images/uranus.svg';
import Venus from '../images/venus.svg';
import Error from '../components/Error/Error';

interface IPlanetContext {
  setPlanets: any
  planets: any
  loading: boolean
  images: any
  sendApiRequest: () => void
}

export const PlanetsContext = createContext<IPlanetContext>({
  setPlanets: [],
  planets: [],
  loading: false,
  images: {},
  sendApiRequest: () => { },
});

export const PlanetsContextProvider = ({ children }: { children: React.ReactNode }) => {
  
  const images: { [key: string]: any } = {
    'Mercury': Mercury,
    'Venus': Venus,
    'Earth': Earth,
    'Mars': Mars,
    'Jupiter': Jupiter,
    'Saturn': Saturn,
    'Uranus': Uranus,
    'Neptune': Neptune,
    'Pluto': Pluto
  };
  
  const needNames: string[] = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Pluto'
  ];

  const [planets, setPlanets] = useState<IPlanet[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function sendApiRequest(): Promise<void | IPlanet[]> {
    setLoading(true);
    return await fetch(`https://api.le-systeme-solaire.net/rest/bodies`)
      .then((res) => res.json())
      .then((res) => {
        const planetList: IPlanet[] = res.bodies;
        const needList: IPlanet[] = planetList.filter((planet) =>
          needNames.includes(planet.englishName)
        );
        setPlanets(needList);
        setLoading(false);
        return needList;
      })
      .catch((error) => setError(error));
    }

  useEffect(() => {
    sendApiRequest();
  }, []);
  
  const values = { loading, setPlanets, planets, sendApiRequest, images };

//if (loading) return <Loading/>
if (error) return <Error/>

//if(!res){
//    return;
//}
  
  return (
    <PlanetsContext.Provider value={values}>
      {children}
    </PlanetsContext.Provider>
  );
}