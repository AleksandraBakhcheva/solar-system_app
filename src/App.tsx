import "./assets/styles/General.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { PlanetsContextProvider } from "./assets/сontext/PlanetsContext";
import Layout from "./assets/components/Layout/Layout";
import PlanetInfo from "./assets/components/PlanetInfo/PlanetInfo";

function App() {
  return (
    <PlanetsContextProvider>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate replace to="/Earth" />} />
            <Route path="/:id" element={<PlanetInfo />} />
          </Route>
        </Routes>
      </>
    </PlanetsContextProvider>
  );
}

export default App;
