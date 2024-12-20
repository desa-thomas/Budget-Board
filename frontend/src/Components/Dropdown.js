import "../styles/components_styles/dropdown.css";

import { useState } from "react";

export default function Dropdown({ name }) {
  const [clicked, setClicked] = useState(false);

  // Change months and years based on available data (call api)
  // Update when backend is setup
  const months = ["Sept", "Oct", "Nov"];
  const years = [2024];

  const elements = [];

  const list = name === "Month" ? months : years;

  for (let i = 0; i < list.length; i++) {
    elements.push(
      <div className="dropdown-item" key={`dropdown-${name}-${i}`}>
        <p> {list[i]} </p>
      </div>
    );
  }

  return (
    <div className="dropdown" onMouseLeave={() =>{setClicked(false)}}>
      <div className="dropdown-button" onClick={() => {setClicked(!clicked)}}>
        <h2>{name}</h2>
        <span className="carrot">v</span>
      </div>

      <div className={`dropdown-content ${clicked ? "show" : ""}`}>
        {elements}
      </div>
    </div>
  );
}
