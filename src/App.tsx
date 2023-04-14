import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import HeadTitle from "./assets/components/HeadTitle/HeadTitle";
import AllPlanets from "./assets/components/AllPlanetsList/AllPlanetsList";
import "./assets/styles/General.scss";
import Layout from "./assets/components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import PlanetInfo from "./assets/components/PlanetInfo/PlanetInfo";
import { PlanetsContextProvider } from "./assets/сontext/PlanetsContext";

function App() {
  return (
    <PlanetsContextProvider>
      <Header />
      <main>
        <HeadTitle/>
        <AllPlanets/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate replace to="/Earth" />}/>
            <Route path="/:id" element={<PlanetInfo />} />
          </Route>
        </Routes>
      </main>
        <Footer />
    </PlanetsContextProvider>
  );
}

export default App;
