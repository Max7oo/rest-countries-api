import "./item.css";

import Nav from "../../components/nav/nav";
import Back from "../../components/back/back";
import Country from "../../components/country/country";

function Item({ check, setChecked, data }) {
  return (
    <div>
      <Nav check={check} setChecked={setChecked} />
      <Back check={check} />
      <Country data={data} />
    </div>
  );
}

export default Item;
