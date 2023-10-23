import "./home.css";
import Flags from "../../components/flags/flags";
import Nav from "../../components/nav/nav";
import Searchandfilter from "../../components/search-and-filter/search-and-filter";

function Home({ check, setChecked, data, setData }) {
  return (
    <div>
      <Nav check={check} setChecked={setChecked} />
      <Searchandfilter check={check} data={data} setData={setData} />
      <Flags data={data} />
    </div>
  );
}

export default Home;
