import "./assets/styles/General.scss";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import HeadTitle from "./assets/components/HeadTitle/HeadTitle";
import AllPlanets from "./assets/components/AllPlanetsList/AllPlanetsList";
import Layout from "./assets/components/Layout/Layout";
import Statistics from "./assets/components/Statistics/Statistics";
import PlanetInfo from "./assets/components/PlanetInfo/PlanetInfo";
import Planet404 from "./assets/components/PlanetInfo/Planet404";
import { Routes, Route, Navigate } from "react-router-dom";
import { PlanetsContextProvider } from "./assets/сontext/PlanetsContext";

function App() {
  return (
    <PlanetsContextProvider>
      <Header />
      <main>
        <HeadTitle />
        <AllPlanets />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/:id" element={<PlanetInfo />} />
            <Route path="*" element={<Planet404 />} />
          </Route>
        </Routes>
        <Statistics />
      </main>
      <Footer />
    </PlanetsContextProvider>
  );
}

export default App;
//<Route path="/" element={<Navigate replace to="/Earth" />} />
