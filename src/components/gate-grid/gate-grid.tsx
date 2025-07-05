import React from "react";
import { GateTypeEnum } from "../../enums/gate-type-enum";
import { GateModel } from "../../models/gate-model";
import {
  getSelectableColumnGates,
  getSelectableRowGates,
} from "./gate-grid-utils";
import "./gate-grid.css";

type Props = {
  gates: (GateModel | null)[][];
  topGates?: GateModel[];
  isGateComparator?: boolean;
  selectedGates?: GateModel[];
  handleToggleOrAddGatesOnly: (
    gates: GateModel | GateModel[],
    toggleMode: boolean
  ) => void;
};

const GateGrid: React.FC<Props> = ({
  gates,
  topGates = [],
  isGateComparator,
  selectedGates = [],
  handleToggleOrAddGatesOnly,
}) => {
  const topGateMap = new Map<string, number>();
  topGates.forEach((gate, index) => {
    const key = `${gate.row}-${gate.column}`;
    topGateMap.set(key, index + 1);
  });

  return (
    <table className="gate-table">
      <thead>
        <tr>
          <th></th>
          {Array.from({ length: 9 }, (_, colIndex) => (
            <th
              className="col-index"
              key={`col-${colIndex}`}
              onClick={() => {
                const colGates = getSelectableColumnGates(gates, colIndex);
                handleToggleOrAddGatesOnly(colGates, true); // use add-only toggle
              }}
            >
              Col {colIndex + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {gates.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td
              className="row-index"
              onClick={() => {
                const rowGates = getSelectableRowGates(row);
                handleToggleOrAddGatesOnly(rowGates, true); // use add-only toggle
              }}
            >
              Row {rowIndex + 1}
            </td>
            {row.map((gate, colIndex) => {
              const key = `${gate?.row}-${gate?.column}`;
              const rank = gate && topGateMap.get(key);

              const isSelected =
                gate &&
                selectedGates?.some(
                  (g) => g.row === gate.row && g.column === gate.column
                );

              return (
                <td
                  key={colIndex}
                  className={
                    gate?.type === GateTypeEnum.BOSS ||
                    gate?.type === GateTypeEnum.GUILD
                      ? "gate-cell-disabled"
                      : isGateComparator
                      ? "gate-cell-comparator"
                      : "gate-cell-simulator"
                  }
                  onClick={() => {
                    if (
                      gate &&
                      gate.type !== GateTypeEnum.BOSS &&
                      gate.type !== GateTypeEnum.GUILD
                    ) {
                      handleToggleOrAddGatesOnly?.(gate, false);
                    }
                  }}
                  style={{
                    backgroundImage: `url(${gate?.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    position: "relative",
                  }}
                >
                  {isSelected && <span className="checkmark">✅</span>}

                  <div className="gate-cell-content">
                    {rank && <span className={"gate-rank"}>#{rank}</span>}

                    {(gate?.efficiency ?? 0) > 0 && !isGateComparator && (
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
