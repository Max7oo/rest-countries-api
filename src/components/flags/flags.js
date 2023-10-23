import "./flags.css";

import Flag from "./flag/flag";

function Flags({ data }) {
  return (
    <section id="flags">
      {data.map((country, index) => {
        const { flags, name, population, region, capital } = country;
        return (
          <Flag
            index={index}
            key={index}
            flags={flags}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </section>
  );
}

export default Flags;
