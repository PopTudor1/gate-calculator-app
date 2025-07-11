import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AreasList from "../../components/areas-list";
import { GateCountSelect } from "../../components/gate-count-select/gate-count-select";
import GateGrid from "../../components/gate-grid/gate-grid";
import { GateTypeSelect } from "../../components/gate-type-select/gate-type-select";
import { GateTypeEnum } from "../../enums/gate-type-enum";
import { AreaModel } from "../../models/area-model";
import { GateModel } from "../../models/gate-model";
import "./gate-simulator.css";
import { getTopEfficientGates, processArea } from "./simulator-utils";

export default function GateSimulator() {
  const navigate = useNavigate();
  const [processedGates, setProcessedGates] = useState<GateModel[]>([]);
  const [selectedArea, setSelectedArea] = useState<AreaModel>(AreasList[0]);
  const [selectedGateType, setSelectedGateType] = useState<GateTypeEnum>(
    GateTypeEnum.MONSTER_EASY
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
    const top = getTopEfficientGates(
      processedGates,
      topGatesCount,
      selectedGateType
    );
    setTopGates(top);
  };

  const handleReset = () => {
    setTopGates([]);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthorized");
    navigate("/");
  };

  return (
    <div className="page">
      <h1 style={{ color: "red" }}>GATE SIMULATOR</h1>
      <span className="madeBy">
        ( made by Tudique26 from the KNIGHTSXORDER guild on Trakan server )
      </span>

      <div className="content">
        <div className="inputs-section">
          <div className="inputs-content">
            <div className="reset-button-container">
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
              <button onClick={handleReset} className="reset-button">
                Reset Gates
              </button>
            </div>
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
            <label className="step-label">Step 2 : Select the gate type</label>
            <GateTypeSelect
              value={selectedGateType}
              onChange={(value) => {
                setSelectedGateType(value);
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
              <span className="top-text">
                Top {topGatesCount} Gates for{" "}
                <span className="area-title">{selectedArea.name}</span>
              </span>
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
              <span className="area-title">{selectedArea.name}</span>
              <GateGrid
                gates={grid}
                topGates={topGates}
                isGateComparator={false}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
