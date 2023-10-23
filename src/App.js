import "./App.css";
import countries from "./data.json";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home/home";
import Item from "./pages/item/item";

function App() {
  const [check, setChecked] = useState(
    JSON.parse(localStorage.getItem("selectedTheme"))
  );
  const [data, setData] = useState(countries);

  return (
    <>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                check={check}
                setChecked={setChecked}
                data={data}
                setData={setData}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <Item
                check={check}
                setChecked={setChecked}
                data={data}
                setData={setData}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
