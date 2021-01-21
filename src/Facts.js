import * as React from "react";
import "./facts.scss";
import milkbox from "./icons/milkbox.svg";

export default function Facts() {
  return (
    <div className="facts">
      <img src={milkbox} className="Milk" alt="milkboxs" />
      <button className="download-btn"> Download Full Report</button>

      <div className="cards">
        <div className="section1">
          <div className="f1">pH</div>
          <div className="f2">Fat</div>
        </div>
        <div className="section2">
          <div className="f3">SNF</div>
          <div className="f4">A2/A1 Split</div>
        </div>
        <div className="section3">
          <div className="f5">Antibiotic</div>
          <div className="f6">Aflatoxin</div>
        </div>
      </div>
    </div>
  );
}
