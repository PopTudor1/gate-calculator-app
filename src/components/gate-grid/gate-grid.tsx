import React from "react";
import { GateModel } from "../../models/gate-model";
import "./gate-grid.css";

type Props = {
  gates: (GateModel | null)[][];
  topGates?: GateModel[];
};

const GateGrid: React.FC<Props> = ({ gates, topGates = [] }) => {
  const topGateMap = new Map<string, number>();
  topGates.forEach((gate, index) => {
    const key = `${gate.row}-${gate.column}`;
    topGateMap.set(key, index + 1);
  });

  return (
    <table className="gate-table">
      <thead>
        <tr>
          <th></th> {/* Top-left corner empty */}
          {Array.from({ length: 9 }, (_, colIndex) => (
            <th
              style={{ color: "white", width: "50px" }}
              key={`col-${colIndex}`}
            >
              Col {colIndex + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {gates.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td style={{ color: "white", width: "50px" }}>
              Row {rowIndex + 1}
            </td>
            {row.map((gate, colIndex) => {
              const key = `${gate?.row}-${gate?.column}`;
              const rank = gate && topGateMap.get(key);

              return (
                <td
                  key={colIndex}
                  className="gate-cell"
                  style={{
                    backgroundImage: `url(${gate?.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="gate-cell-content">
                    {rank && <span className="gate-rank">#{rank}</span>}
                    {(gate?.totalBuffExperience ?? 0) > 0 && (
                      <span className="gate-cell-exp">
                        Rune Exp: {(gate?.totalBuffExperience ?? 0).toFixed(2)}
                      </span>
                    )}
                    <span className="gate-cell-cost">
                      Scroll Cost: {gate?.scrollCost}
                    </span>
                    {(gate?.efficiency ?? 0) > 0 && (
                      <span className="gate-cell-eff">
                        Efficiency: {(gate?.efficiency ?? 0).toFixed(2)}
                      </span>
                    )}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GateGrid;
