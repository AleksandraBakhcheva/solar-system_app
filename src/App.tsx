import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import HeadTitle from "./assets/components/HeadTitle/HeadTitle";
import AllPlanets from "./assets/components/AllPlanetsList/AllPlanetsList";
import "./assets/styles/General.scss";
import Layout from "./assets/components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <HeadTitle/>
        <AllPlanets/>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </main>
        <Footer />
    </div>
  );
}

export default App;
