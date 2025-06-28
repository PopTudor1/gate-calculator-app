import { useEffect, useState } from "react";
import AreasList from "../components/areas-list";
import type { GateModel } from "../models/gate-model";
import "./gate-comparator.css";

export default function GateComparator() {
  const [processedGates, setProcessedGates] = useState<GateModel[]>([]);

  // Calculates efficiencies for one area
  function calculateGateEfficiencies(area: GateModel[]) {
    return area.flat().map((gate) => {
      const totalBuffExperience = gate.runesList.reduce((sum, rune) => {
        return sum + (rune.chance * rune.experience) / 100;
      }, 0);

      const efficiency = totalBuffExperience / gate.scrollCost;

      return {
        ...gate,
        totalBuffExperience,
        efficiency,
      };
    });
  }

  useEffect(() => {
    const results = calculateGateEfficiencies(AreasList[0].gatesList);
    const sortedResults = results.sort((a, b) => b.efficiency - a.efficiency);

    setProcessedGates(sortedResults);
  }, []);

  return (
    <div>
      <h2 style={{ color: "white" }}>{AreasList[0].name} Top List</h2>
      <div className="container">
        {processedGates.map((gate, index) => (
          <div key={`${gate.row}-${gate.column}-${index}`} className="row">
            <img
              src={gate.imageUrl}
              alt={`Gate at row ${gate.row}, column ${gate.column}`}
              className="image"
            />
            <p>
              <strong>Row:</strong> {gate.row}
            </p>
            <p>
              <strong>Column:</strong> {gate.column}
            </p>
            <p>
              <strong>Scroll Cost:</strong> {gate.scrollCost}
            </p>
            <p>
              <strong>Total Buff Exp:</strong>{" "}
              {gate.totalBuffExperience.toFixed(4)}
            </p>
            <p>
              <strong>Efficiency:</strong> {gate.efficiency.toFixed(4)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
