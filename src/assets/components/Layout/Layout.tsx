import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import HeadTitle from "../HeadTitle/HeadTitle";
import AllPlanets from "../AllPlanetsList/AllPlanetsList";
import Statistics from "../Statistics/Statistics";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <HeadTitle />
        <AllPlanets />
        <Outlet />
        <Statistics />
      </main>
      <Footer />
    </>
  );
}
