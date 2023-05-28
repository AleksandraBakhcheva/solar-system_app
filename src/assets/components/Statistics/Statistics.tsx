import "./Statistics.scss";
import { useContext, useState } from "react";
import { PlanetsContext } from "../../сontexts/PlanetsContext";
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
  const [selectIndex, setSelectIndex] = useState<string>();

  const planetsStatistics: number[] = [];
  const labels = planets.map(
    (item: { englishName: string }) => item.englishName
  );
  let planentsDensity = planets.map(
    (item: { density: number }) => item.density
  );
  let planetsGravity = planets.map((item: { gravity: number }) => item.gravity);
  let planetsMass = planets.map(
    (item: { mass: { massValue: number } }) => item.mass.massValue
  );
  let planetsVolume = planets.map(
    (item: { vol: { volValue: number } }) => item.vol.volValue
  );
  let planetsEscape = planets.map((item: { escape: number }) => item.escape);
  let planetsAvgTemp = planets.map((item: { avgTemp: number }) => item.avgTemp);
  let planetsMeanRadius = planets.map(
    (item: { meanRadius: number }) => item.meanRadius
  );
  let planetsPolarRadius = planets.map(
    (item: { polarRadius: number }) => item.polarRadius
  );
  let planetsSideralOrbit = planets.map(
    (item: { sideralOrbit: number }) => item.sideralOrbit
  );
  let planetsEccentricity = planets.map(
    (item: { eccentricity: number }) => item.eccentricity
  );

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
      if (selectIndex !== "Choose a comparison option") {
        setData({
          labels,
          datasets: [
            {
              label: statisticsCategories[Number(selectIndex)],
              data: planetsStatistics[Number(selectIndex)],
              pointRadius: 8,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        });
      } else {
        setData({
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
      }
    }
  };

  return (
    <div id={"statistics"} className="statistics__container">
      <div className="statistics__container_header">Statistics</div>
      <div className="statistics__container_box">
        <div className="statistics__container_thought">
          <p>
            Hi, I'm Nick. I will help <br /> you to understand how <br /> the
            planets differ from <br /> each other.
          </p>
          <img src={thought} alt="thought" />
          <img src={astronaut} alt="astronaut" />
        </div>
        <div>
          <div className="statistics__container_buttons">
            <select
              name="statistics"
              onChange={(evt) => {
                setSelectIndex(evt.target.value);
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
          <div className="statistics__container_graph">
            <Line width="400px" height="400px" options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
