import "./Header.scss";
import logo from "../../images/logo.svg";
import sun from "../../images/sun.svg";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [navigation, setNavigation] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__box">
          <div className="header__images">
            <Link to="/">
              <img className="header__logo" src={logo} alt="logo" />
            </Link>
            <img className="header__pic" src={sun} alt="sun" />
          </div>
          <ul
            className={
              navigation
                ? ["header__menu", "header__menu_active"].join(" ")
                : "header__menu"
            }
          >
            <li>
              <Link to="">Data</Link>
            </li>
            <li>
              <Link to="">Statistics</Link>
            </li>
          </ul>
          {
            <div
              onClick={() => setNavigation(!navigation)}
              className="header-mobile__button"
            >
              {navigation ? (
                <AiOutlineClose size={30} />
              ) : (
                <AiOutlineMenu size={30} />
              )}
            </div>
          }
        </div>
      </div>
    </header>
  );
}
