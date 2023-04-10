import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import HeadTitle from "../HeadTitle/HeadTitle";

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <HeadTitle/>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
