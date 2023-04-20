import "./Footer.scss";
import github from "../../images/github.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container_link">
          <a href="https://github.com/AleksandraBakhcheva">
            <img src={github} alt="github" />
          </a>
          <a href="https://github.com/Ann-uta">
            <img src={github} alt="github" />
          </a>
        </div>
        <div>&#169; 2023</div>
      </div>
    </footer>
  );
}
