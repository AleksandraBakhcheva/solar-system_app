import "./Error.scss";
import error404 from "../../images/error404.svg";
import { motion } from "framer-motion";

export default function Error() {
  return (
    <div className="error__container">
      <h1>Something went wrong...</h1>
      <p>We're trying to fix it</p>
      <img src={error404} alt="error404" />
      <motion.button
        onClick={() => {
          window.location.href = "/solar-system_app";
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
      >
        Reload this page
      </motion.button>
    </div>
  );
}
