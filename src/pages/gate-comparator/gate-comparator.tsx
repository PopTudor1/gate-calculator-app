import { useEffect, useState } from "react";
import AreasList from "../../components/areas-list";
import { GateCountSelect } from "../../components/gate-count-select/gate-count-select";
import GateGrid from "../../components/gate-grid/gate-grid";
import { ScrollCostSelect } from "../../components/scroll-cost-select/scroll-cost-select";
import { ScrollCostEnum } from "../../enums/scroll-cost-enum";
import { AreaModel } from "../../models/area-model";
import { GateModel } from "../../models/gate-model";
import "./gate-comparator.css";
import { getTopEfficientGates, processArea } from "./utils";

export default function GateComparator() {
  const [processedGates, setProcessedGates] = useState<GateModel[]>([]);
  const [selectedArea, setSelectedArea] = useState<AreaModel>(AreasList[0]);
  const [selectedScrollCost, setSelectedScrollCost] = useState<ScrollCostEnum>(
    ScrollCostEnum.SCROLLS_6
  );
  const [topGates, setTopGates] = useState<GateModel[]>([]);
  const [topGatesCount, setTopGatesCount] = useState<number>(10);
  const grid: (GateModel | null)[][] = Array.from({ length: 10 }, () =>
    Array.from({ length: 9 }, () => null)
  );

  //Acts as an OnInit for table
  useEffect(() => {
    handleAreaClick(selectedArea);
  }, []);

  const handleAreaClick = (area: AreaModel) => {
    const sortedResults = processArea(area);
    setSelectedArea(area);
    setProcessedGates(sortedResults);
    setTopGates([]); // reset top gates on area change
  };

  processedGates.forEach((gate) => {
    const rowIndex = gate.row - 1;
    const colIndex = gate.column - 1;
    if (rowIndex >= 0 && rowIndex < 10 && colIndex >= 0 && colIndex < 9) {
      grid[rowIndex][colIndex] = gate;
    }
  });

  const handleShowTopGates = () => {
    const top = getTopEfficientGates(processedGates, topGatesCount);
    setTopGates(top);
  };

  return (
    <div className="page">
      <h1 style={{ color: "red" }}>GATE COMPARATOR</h1>
      <p style={{ color: "white" }}>
        ( made by Tudique26 from the KNIGHTSXORDER guild on Trakan server )
      </p>

      <div className="content">
        <div className="inputs-section">
          <div className="inputs-content">
            <label className="step-label">Step 1 : Select your Area</label>
            <div>
              {AreasList.map((area, index) => (
                <button
                  className="area-button"
                  key={index}
                  onClick={() => handleAreaClick(area)}
                >
                  {area.name}
                </button>
              ))}
            </div>
            <label className="step-label">
              Step 2 : Select your scroll cost
            </label>
            <ScrollCostSelect
              value={selectedScrollCost}
              onChange={(value) => {
                setSelectedScrollCost(value);
                setTopGates([]); // reset top gates on scroll cost change
              }}
            />
            <label className="step-label">
              Step 3 : Select how many gates to show
            </label>
            <GateCountSelect
              value={topGatesCount}
              onChange={(value) => {
                setTopGatesCount(value);
                setTopGates([]); // reset top gates on gate amount change
              }}
            />

            <label className="step-label">
              Step 4 : Show the best {topGatesCount} gates
            </label>
            <button className="best-gates-button" onClick={handleShowTopGates}>
              Show Top {topGatesCount} Best Gates to Farm
            </button>
            <hr style={{ width: "100%" }} />
            <div className="top-results">
              <span className="top-text">Top {topGatesCount} Gates</span>
              <ul className="top-gates-list">
                {topGates.map((gate, index) => (
                  <li
                    key={`${gate.row}-${gate.column}`}
                    className="top-gate-item"
                  >
                    <span>#{index + 1}</span> — Row: {gate.row}, Column:{" "}
                    {gate.column}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="areas-section">
          {selectedArea && (
            <div className="table-section">
              <h2 className="area-title">{selectedArea.name}</h2>
              <GateGrid gates={grid} topGates={topGates} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
