import "./styles/General.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { PlanetsContextProvider } from "./сontexts/PlanetsContext";
import Error from "./components/Error/Error";
import Layout from "./components/Layout/Layout";
import PlanetInfo from "./components/PlanetInfo/PlanetInfo";

function App() {
  return (
    <PlanetsContextProvider>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate replace to="/Earth" />} />
            <Route path="/:id" element={<PlanetInfo />} />
          </Route>
          <Route path="404" element={<Error />} />
          <Route path="*" element={<Navigate replace to="404" />} />
        </Routes>
      </>
    </PlanetsContextProvider>
  );
}

export default App;
