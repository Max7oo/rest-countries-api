import "./back.css";

import back from "../../images/back.svg";
import backlight from "../../images/backlight.svg";

import { useNavigate } from "react-router-dom";

function Back({ check }) {
  const navigate = useNavigate();

  return (
    <section>
      <div className="button" onClick={() => navigate(-1)}>
        {check ? (
          <img src={backlight} alt="back" />
        ) : (
          <img src={back} alt="back" />
        )}
        <button>BACK</button>
      </div>
    </section>
  );
}

export default Back;
