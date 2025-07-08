import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AreasList from "../../components/areas-list";
import GateGrid from "../../components/gate-grid/gate-grid";
import GateTable, {
  GateWithArea,
} from "../../components/gate-table/gate-table";
import { ScrollCostEnum } from "../../enums/scroll-cost-enum";
import { AreaModel } from "../../models/area-model";
import { GateModel } from "../../models/gate-model";
import { processArea } from "../gate-simulator/simulator-utils";
import {
  numberToScrollEnum,
  toggleGateSelection,
  updateEfficienciesForAllAreas,
  updateScrollCost,
} from "./comparator-utils";
import "./gate-comparator.css";

export default function GateComparator() {
  const navigate = useNavigate();
  const [processedGates, setProcessedGates] = useState<GateModel[]>([]);
  const [selectedArea, setSelectedArea] = useState<AreaModel>(AreasList[0]);
  const [selectedGatesByArea, setSelectedGatesByArea] = useState<
    Record<string, GateModel[]>
  >({});
  const [sortedGates, setSortedGates] = useState<GateWithArea[]>([]);

  const grid: (GateModel | null)[][] = Array.from({ length: 10 }, () =>
    Array.from({ length: 9 }, () => null)
  );

  //Acts as an OnInit for table
  useEffect(() => {
    handleAreaClick(selectedArea);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthorized");
    navigate("/");
  };

  const handleAreaClick = (area: AreaModel) => {
    const sortedResults = processArea(area);
    setSelectedArea(area);
    setProcessedGates(sortedResults);
  };

  const handleToggleOrAddGatesOnly = (
    gates: GateModel | GateModel[],
    toggleMode: boolean
  ) => {
    const updated = toggleGateSelection(
      gates,
      selectedGatesByArea,
      selectedArea.name,
      toggleMode
    );

    setSelectedGatesByArea(updated);

    // 🔧 Keep sortedGates in sync
    // if (sortedGates.length !== 0) {
    const allGates: GateWithArea[] = Object.entries(updated).flatMap(
      ([areaName, gates]) =>
        gates.map((gate, index) => ({
          areaName,
          gateType: gate.type,
          index,
          row: gate.row,
          column: gate.column,
          scrollCost: numberToScrollEnum[gate.scrollCost],
          efficiency: gate.efficiency,
        }))
    );

    const sorted = allGates.sort((a, b) => b.efficiency - a.efficiency);
    setSortedGates(sorted.length > 0 ? sorted : []);
    // }
  };

  const handleRecalculateEfficiencies = () => {
    const updatedMap = updateEfficienciesForAllAreas(selectedGatesByArea);
    setSelectedGatesByArea(updatedMap);

    const allGates: GateWithArea[] = Object.entries(updatedMap).flatMap(
      ([areaName, gates]) =>
        gates.map((gate, index) => ({
          areaName,
          gateType: gate.type,
          index,
          row: gate.row,
          column: gate.column,
          scrollCost: numberToScrollEnum[gate.scrollCost],
          efficiency: gate.efficiency,
        }))
    );

    // Sort by efficiency descending (if you want sorting here)
    const sorted = allGates.sort((a, b) => b.efficiency - a.efficiency);
    setSortedGates(sorted.length > 0 ? sorted : []);
  };

  const handleResetSelectedGates = () => {
    setSelectedGatesByArea((prev) => ({
      ...prev,
      [selectedArea.name]: [],
    }));

    // Also update sortedGates if active
    if (sortedGates.length !== 0) {
      const updatedSortedGates = sortedGates.filter(
        (gate) => gate.areaName !== selectedArea.name
      );

      setSortedGates(updatedSortedGates.length > 0 ? updatedSortedGates : []);
    }
  };

  const handleRemoveGate = (areaName: string, row: number, column: number) => {
    setSelectedGatesByArea((prev) => {
      const gates = prev[areaName];
      if (!gates) return prev;

      const updatedGates = gates.filter(
        (gate) => !(gate.row === row && gate.column === column)
      );

      const newState = {
        ...prev,
        [areaName]: updatedGates,
      };

      // If we are in sorted mode, update that too
      if (sortedGates.length !== 0) {
        const updatedSortedGates = sortedGates.filter(
          (gate) =>
            !(
              gate.areaName === areaName &&
              gate.row === row &&
              gate.column === column
            )
        );
        setSortedGates(updatedSortedGates);
      }

      return newState;
    });
  };

  const onUpdateScrollCost = (
    areaName: string,
    row: number,
    column: number,
    newCost: ScrollCostEnum
  ) => {
    const updated = updateScrollCost(
      areaName,
      row,
      column,
      newCost,
      selectedGatesByArea
    );
    setSelectedGatesByArea(updated);

    if (sortedGates.length !== 0) {
      // Rebuild flat list from updated grouped gates
      const allGates: GateWithArea[] = Object.entries(updated).flatMap(
        ([areaName, gates]) =>
          gates.map((gate, index) => ({
            areaName,
            gateType: gate.type,
            index,
            row: gate.row,
            column: gate.column,
            scrollCost: numberToScrollEnum[gate.scrollCost],
            efficiency: gate.efficiency,
          }))
      );

      // Re-sort by efficiency
      const sorted = allGates.sort((a, b) => b.efficiency - a.efficiency);
      setSortedGates(sorted.length > 0 ? sorted : []);
    }
  };

  processedGates.forEach((gate) => {
    const rowIndex = gate.row - 1;
    const colIndex = gate.column - 1;
    if (rowIndex >= 0 && rowIndex < 10 && colIndex >= 0 && colIndex < 9) {
      grid[rowIndex][colIndex] = gate;
    }
  });

  const currentSelectedGates = selectedGatesByArea[selectedArea.name] || [];

  return (
    <div className="comparator-page">
      <span style={{ color: "red", fontSize: "32px" }}>GATE COMPARATOR</span>
      <span className="comparator-madeBy">
        ( made by Tudique26 from the KNIGHTSXORDER guild on Trakan server )
      </span>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      <div className="comparator-content">
        <div className="comparator-areas-section">
          <label className="comparator-step-label">
            Step 1: Select an area
          </label>
          <div>
            {AreasList.map((area, index) => (
              <button
                className="comparator-area-button"
                key={index}
                onClick={() => handleAreaClick(area)}
              >
                {area.name}
              </button>
            ))}
          </div>
          {selectedArea && (
            <div className="comparator-grid-section">
              <div className="area-title-container">
                <span className="area-title-text">{selectedArea.name}</span>
                <button
                  className="reset-gates-button"
                  onClick={() => handleResetSelectedGates()}
                >
                  Reset Selected Gates
                </button>
              </div>
              <label className="comparator-step-label">
                Step 2: Select the gates
              </label>

              <GateGrid
                gates={grid}
                selectedGates={currentSelectedGates}
                handleToggleOrAddGatesOnly={handleToggleOrAddGatesOnly}
                isGateComparator={true}
              />
            </div>
          )}
        </div>
        <div className="comparator-middle-section">
          <span className="middle-arrow">{"=>"}</span>
        </div>
        <div className="comparator-table-section">
          <label className="comparator-step-label">
            Step 3: Select the Scroll Cost for each gate
          </label>
          <label className="comparator-step-label">
            Step 4: Click on Calculate Efficiencies for Selected Gates
          </label>
          <div className="comparator-table-title-button">
            <span className="selected-gates-summary">Gates Summary</span>
            <button
              className="calculate-efficiencies-button"
              onClick={handleRecalculateEfficiencies}
            >
              Calculate Efficiencies For Selected Gates
            </button>
          </div>
          <GateTable
            selectedGatesByArea={selectedGatesByArea}
            onUpdateScrollCost={onUpdateScrollCost}
            onRemoveGate={handleRemoveGate}
            sortedGates={sortedGates}
          />
        </div>
      </div>
    </div>
  );
}
