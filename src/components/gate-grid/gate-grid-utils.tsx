import { GateTypeEnum } from "../../enums/gate-type-enum";
import { GateModel } from "../../models/gate-model";

/**
 * Filters out BOSS and GUILD gates from a list.
 */
export const filterSelectableGates = (
  gates: (GateModel | null)[]
): GateModel[] => {
  return gates.filter(
    (g): g is GateModel =>
      g !== null &&
      g.type !== GateTypeEnum.COOP_BOSS &&
      g.type !== GateTypeEnum.ELEM_BOSS &&
      g.type !== GateTypeEnum.SWEEP &&
      g.type !== GateTypeEnum.GUILD
  );
};

/**
 * Returns all selectable gates in a row.
 */
export const getSelectableRowGates = (
  row: (GateModel | null)[]
): GateModel[] => {
  return filterSelectableGates(row);
};

/**
 * Returns all selectable gates in a column.
 */
export const getSelectableColumnGates = (
  grid: (GateModel | null)[][],
  colIndex: number
): GateModel[] => {
  const column = grid.map((row) => row[colIndex]);
  return filterSelectableGates(column);
};
