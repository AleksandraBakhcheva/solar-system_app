import "./Header.scss";
import logo from "../../images/logo.svg";
import sun from "../../images/sun.svg";
import { HashLink as Link } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";

export default function Header() {
  const [modal, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", modal);
  }, [modal]);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <img className="header__image" src={sun} alt="sun" />
        <ul
          className={
            modal
              ? ["header__menu", "header__menu_active"].join(" ")
              : "header__menu"
          }
        >
          <li>
            <Link to="#planets" onClick={() => setModalOpen(!modal)}>
              Planets
            </Link>
          </li>
          <li>
            <Link to="#statistics" onClick={() => setModalOpen(!modal)}>
              Statistics
            </Link>
          </li>
        </ul>
        {
          <div
            onClick={() => setModalOpen(!modal)}
            className="header-mobile__button"
          >
            {modal ? <ImCross size={30} /> : <GiHamburgerMenu size={40} />}
          </div>
        }
      </div>
    </header>
  );
}
