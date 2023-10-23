import "./flag.css";

import { useNavigate } from "react-router-dom";

function Flag({ index, flags, name, population, region, capital }) {
  const navigate = useNavigate();
  const Navigate = (index) => {
    navigate(`/${index}`);
  };

  return (
    <div
      className="flag"
      id={index}
      key={index}
      onClick={() => Navigate(index)}
    >
      <img src={flags.svg} alt={name} />
      <div className="information">
        <h2>{name}</h2>
        <ul>
          <li>
            <b>Population: </b>
            {population.toLocaleString()}
          </li>
          <li>
            <b>Region: </b>
            {region}
          </li>
          <li>
            <b>Capital: </b>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Flag;
