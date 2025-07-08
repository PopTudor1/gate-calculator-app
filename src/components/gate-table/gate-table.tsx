import { GateTypeEnum, GateTypeEnumLabel } from "../../enums/gate-type-enum";
import { ScrollCostEnum } from "../../enums/scroll-cost-enum";
import { GateModel } from "../../models/gate-model";
import { numberToScrollEnum } from "../../pages/gate-comparator/comparator-utils";
import { ScrollCostSelect } from "../scroll-cost-select/scroll-cost-select";
import "./gate-table.css";

export type GateWithArea = {
  areaName: string;
  gateType: GateTypeEnum;
  index: number;
  row: number;
  column: number;
  scrollCost: ScrollCostEnum;
  efficiency: number;
};

type Props = {
  selectedGatesByArea: Record<string, GateModel[]>;
  onUpdateScrollCost: (
    areaName: string,
    row: number,
    column: number,
    newCost: ScrollCostEnum
  ) => void;
  onRemoveGate: (areaName: string, row: number, column: number) => void;
  sortedGates?: GateWithArea[];
};

const GateTable: React.FC<Props> = ({
  selectedGatesByArea,
  onUpdateScrollCost,
  onRemoveGate,
  sortedGates,
}) => {
  const allSelectedGates: GateWithArea[] | undefined =
    sortedGates?.length !== 0
      ? sortedGates
      : Object.entries(selectedGatesByArea).flatMap(([areaName, gates]) =>
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

  if (allSelectedGates?.length === 0) {
    return <span className="no-gates-message">No gates selected</span>;
  }

  return (
    <div className="scrollable-table-container">
      <table className="selected-gates-table">
        <thead>
          <tr>
            <th style={{ border: "none" }}></th>
            <th className="area-name-text">Area Name</th>
            <th className="gate-type-text">Gate Type</th>
            <th className="row-text">Row</th>
            <th className="col-text">Col</th>
            <th className="scroll-cost-text">Scroll Cost</th>
            <th className="efficiency-text">Efficiency</th>
          </tr>
        </thead>
        <tbody>
          {allSelectedGates?.map(
            (
              { areaName, gateType, row, column, scrollCost, efficiency },
              i
            ) => (
              <tr key={`${areaName}-${row}-${column}-${i}`}>
                <td style={{ border: "none" }}>
                  <button
                    title="Remove gate"
                    className="remove-gate-button"
                    onClick={() => onRemoveGate(areaName, row, column)}
                  >
                    ❌
                  </button>
                </td>
                <td className="area-name-text">{areaName}</td>
                <td
                  className={
                    gateType === GateTypeEnum.ELEM_BOSS
                      ? "elem-boss"
                      : gateType === GateTypeEnum.MONSTER_HARD
                      ? "monster-hard"
                      : "monster-easy"
                  }
                >
                  {GateTypeEnumLabel[gateType]}
                </td>
                <td className="row-text">{row}</td>
                <td className="col-text">{column}</td>
                <td>
                  <ScrollCostSelect
                    value={scrollCost}
                    onChange={(newCost) => {
                      onUpdateScrollCost(areaName, row, column, newCost);
                    }}
                  />
                </td>
                <td className="efficiency-text">{efficiency.toFixed(2)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GateTable;
