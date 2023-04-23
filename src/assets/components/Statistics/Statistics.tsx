import "./Statistics.scss";
import { useContext, useState } from "react";
import { PlanetsContext } from "../../сontext/PlanetsContext";
import { statisticsCategories } from "../../utils/StatisticsCategories";
import thought from "../../images/thought.svg";
import astronaut from "../../images/astronaut.svg";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function Statistics() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const { planets } = useContext(PlanetsContext);
  const [selectIndex, setSelectIndex] = useState<any>("");

  const planetsStatistics: number[] = [];
  const labels = planets.map((a: any) => a.englishName);
  let planentsDensity = planets.map((a: any) => a.density);
  let planetsGravity = planets.map((a: any) => a.gravity);
  let planetsMass = planets.map((a: any) => a.mass.massValue);
  let planetsVolume = planets.map((a: any) => a.vol.volValue);
  let planetsEscape = planets.map((a: any) => a.escape);
  let planetsAvgTemp = planets.map((a: any) => a.avgTemp);
  let planetsMeanRadius = planets.map((a: any) => a.meanRadius);
  let planetsPolarRadius = planets.map((a: any) => a.polarRadius);
  let planetsSideralOrbit = planets.map((a: any) => a.sideralOrbit);
  let planetsEccentricity = planets.map((a: any) => a.eccentricity);

  planetsStatistics.push(
    planentsDensity,
    planetsGravity,
    planetsMass,
    planetsVolume,
    planetsEscape,
    planetsAvgTemp,
    planetsMeanRadius,
    planetsPolarRadius,
    planetsSideralOrbit,
    planetsEccentricity
  );

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "",
        data: 0,
        pointRadius: 0,
        borderColor: "",
        backgroundColor: "",
      },
    ],
  });

  const selectHandler = () => {
    if (selectIndex) {
      setData({
        labels,
        datasets: [
          {
            label: statisticsCategories[selectIndex],
            data: planetsStatistics[selectIndex],
            pointRadius: 8,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      });
    }
  };

  return (
    <div id={"statistics"} className="statistics__container">
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
            <select
              name="statistics"
              onChange={(e) => {
                setSelectIndex(e.target.value);
              }}
            >
              <option>Choose a comparison option</option>
              {statisticsCategories.map((category, index) => {
                return (
                  <option value={index} key={index}>
                    {category}
                  </option>
                );
              })}
            </select>
            <motion.button
              onClick={selectHandler}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
            >
              Compare
            </motion.button>
          </div>
          <div className="statistics__container__graph">
            <Line width="400px" height="400px" options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
