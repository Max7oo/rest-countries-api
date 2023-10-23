import "./search-and-filter.css";
import reset from "../../data.json";

import React, { useState } from "react";

import search from "../../images/search.svg";
import searchlight from "../../images/searchlight.svg";
import expand from "../../images/expand.svg";
import expandlight from "../../images/expandlight.svg";
import { useNavigate } from "react-router-dom";

function Searchandfilter({ check, data, setData }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState("Filter by Region");

  const fetchData = (value) => {
    const results = data.filter((country) => {
      return (
        value &&
        country &&
        country.name &&
        country.name.toLowerCase().includes(value)
      );
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const sortRegion = (selectedRegion) => {
    if (selectedRegion === "All regions") {
      setRegion(selectedRegion);
      setData(reset);
    } else {
      setRegion(selectedRegion);
      const results = reset.filter((country) => {
        return country.region === selectedRegion;
      });
      setData(results);
    }
  };

  return (
    <section id="search-and-filter">
      <div className="input">
        {check ? (
          <img src={searchlight} alt="search icon" />
        ) : (
          <img src={search} alt="search icon" />
        )}
        <input
          placeholder="Search for a country..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <div className="results-list">
          {results.map((result, index) => {
            const id = data.findIndex((x) => x.name === result.name);
            return (
              <div key={index} onClick={() => navigate(`/${id}`)}>
                {result.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="drop-down" onClick={handleOpen}>
        <button>
          {region}
          {check ? (
            <img src={expandlight} alt="arrow down" />
          ) : (
            <img src={expand} alt="arrow down" />
          )}
        </button>
        {open ? (
          <ul>
            <li onClick={() => sortRegion("Africa")}>Africa</li>
            <li onClick={() => sortRegion("Americas")}>Americas</li>
            <li onClick={() => sortRegion("Asia")}>Asia</li>
            <li onClick={() => sortRegion("Europe")}>Europe</li>
            <li onClick={() => sortRegion("Oceania")}>Oceania</li>
            <li onClick={() => sortRegion("All regions")}>All regions</li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}

export default Searchandfilter;
