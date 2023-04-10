import "./Header.scss";
import logo from "../../images/logo.svg";
import sun from "../../images/sun.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <img className="header__pic" src={sun} alt="sun" />
      <nav className="header__menu">
        <ul>
          <li>
            <Link to="">Data</Link>
          </li>
          <li>
            <Link to="">Statistics</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
