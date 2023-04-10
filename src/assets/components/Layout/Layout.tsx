import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import HeadTitle from "../HeadTitle/HeadTitle";
import AllPlanets from "../AllPlanets/AllPlanets";

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <HeadTitle/>
        <AllPlanets/>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
