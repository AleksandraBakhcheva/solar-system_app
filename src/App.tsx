import AllPlanets from "./assets/components/AllPlanets/AllPlanets";
import "./assets/styles/General.scss";
import "./assets/styles/Variables.scss";
import Layout from "./assets/components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
