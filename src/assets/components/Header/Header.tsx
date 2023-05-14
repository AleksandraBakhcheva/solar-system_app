import "./Header.scss";
import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../images/logo.svg";
import sun from "../../images/sun.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default function Header() {
  const [modal, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", modal);
  }, [modal]);

  return (
    <header className="header__container">
      <div className="header__container_box">
        <Link to="/">
          <img className="header__container_logo" src={logo} alt="logo" />
        </Link>
        <img className="header__container_image" src={sun} alt="sun" />
        <ul
          className={
            modal
              ? [
                  "header__container_menu",
                  "header__container_menu-active",
                ].join(" ")
              : "header__container_menu"
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
            className="header__container_mobile-button"
          >
            {modal ? <ImCross size={30} /> : <GiHamburgerMenu size={40} />}
          </div>
        }
      </div>
    </header>
  );
}
