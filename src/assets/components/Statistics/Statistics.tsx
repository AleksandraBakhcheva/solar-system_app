import "./Statistics.scss";
import thought from "../../images/thought.svg";
import astronaut from "../../images/astronaut.svg";
import { motion } from "framer-motion";

export default function Statistics() {
  return (
    <div className="statistics__container">
      <div className="statistics__container__header">Statistics</div>
      <div className="statistics__container__box">
        <div className="statistics__container__thought">
          <p>
            Hi, I'm Nick. I will help <br /> you to understand how <br /> the
            planets differ from <br /> each other.
          </p>
          <img src={thought} alt="thought" />
          <img src={astronaut} alt="astronaut" />
        </div>
        <div>
          <div className="statistics__container__buttons">
            <select name="statistics" id="">
              <option value="">Choose a comparison option</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            >
              Compare
            </motion.button>
          </div>
          <div className="statistics__container__graph"></div>
        </div>
      </div>
    </div>
  );
}
