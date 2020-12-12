import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="chart">
        <ul className="numbers">
          <li>
            <span>100%</span>
          </li>
          <li>
            <span>75%</span>
          </li>
          <li>
            <span>50%</span>
          </li>
          <li>
            <span>25%</span>
          </li>
          <li>
            <span>0%</span>
          </li>
        </ul>
        <ul className="bars">
          <li>
            <div className="bar1" data-percentage=""></div>
            <span>Group 1</span>
          </li>
          <li>
            <div className="bar2" data-percentage=""></div>
            <span>Group 2</span>
          </li>
          <li>
            <div className="bar3" data-percentage=""></div>
            <span>Group 3</span>
          </li>
          <li>
            <div className="bar4" data-percentage=""></div>
            <span>Group 4</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
