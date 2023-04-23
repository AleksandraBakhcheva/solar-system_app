import "./Header.scss";
import logo from "../../images/logo.svg";
import sun from "../../images/sun.svg";
import { HashLink as Link } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
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
            <img src={sun} alt="sun" />
          </div>
          <ul
            className={
              navigation
                ? ["header__menu", "header__menu_active"].join(" ")
                : "header__menu"
            }
          >
            <li>
              <Link to="#planets" onClick={() => setNavigation(!navigation)}>
                Planets
              </Link>
            </li>
            <li>
              <Link to="#statistics" onClick={() => setNavigation(!navigation)}>
                Statistics
              </Link>
            </li>
          </ul>
          {
            <div
              onClick={() => setNavigation(!navigation)}
              className="header-mobile__button"
            >
              {navigation ? (
                <ImCross size={30} />
              ) : (
                <GiHamburgerMenu size={40} />
              )}
            </div>
          }
        </div>
      </div>
    </header>
  );
}
