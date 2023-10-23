import "./country.css";

import { useParams, useNavigate } from "react-router-dom";

function Country({ data }) {
  const params = useParams();

  let borderCountries = [];

  const navigate = useNavigate();
  const Navigate = (index) => {
    navigate(`/${index}`);
  };

  return (
    <section id="country">
      <div className="left">
        <img src={data[params.id].flags.svg} alt={data[params.id].name} />
      </div>
      <div className="right">
        <h2>{data[params.id].name}</h2>
        <div className="country_info">
          <ul>
            <li>
              <b>Native Name: </b>
              {data[params.id].nativeName}
            </li>
            <li>
              <b>Population: </b>
              {data[params.id].population.toLocaleString()}
            </li>
            <li>
              <b>Region: </b>
              {data[params.id].region}
            </li>
            <li>
              <b>Sub Region: </b>
              {data[params.id].subregion}
            </li>
            <li>
              <b>Capital: </b>
              {data[params.id].capital}
            </li>
          </ul>
          <ul>
            <li>
              <b>Top Level Domain: </b>
              {data[params.id].topLevelDomain}
            </li>
            <li>
              <b>Currencies: </b>
              {data[params.id].currencies[0].name}
            </li>
            <li className="no-gap">
              <b>Languages: </b>
              {data[params.id].languages.map((language, index) => {
                const { name } = language;
                return <span key={index}>{(index ? ", " : "") + name}</span>;
              })}
            </li>
          </ul>
        </div>

        <ul>
          {data[params.id].borders ? (
            <li className="borders">
              <b>Border Countries: </b>
              {data[params.id].borders.map((border, index) => {
                for (var i = 0; i < data.length; i++) {
                  if (data[i].alpha3Code === border) {
                    borderCountries.push({ name: data[i].name, id: i });
                  }
                }
                return (
                  <span
                    key={index}
                    className="box"
                    onClick={() => Navigate(borderCountries[index].id)}
                  >
                    {borderCountries[index].name}
                  </span>
                );
              })}
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </section>
  );
}

export default Country;
