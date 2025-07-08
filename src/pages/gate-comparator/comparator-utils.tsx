import { GateTypeEnum } from "../../enums/gate-type-enum";
import {
  ScrollCostEnum,
  ScrollCostEnumNumber,
} from "../../enums/scroll-cost-enum";
import { GateModel } from "../../models/gate-model";

export const toggleGateSelection = (
  gates: GateModel | GateModel[],
  selectedGatesByArea: Record<string, GateModel[]>,
  areaKey: string,
  forceAddOnly = false
): Record<string, GateModel[]> => {
  const gatesArray = Array.isArray(gates) ? gates : [gates];
  const currentSelected = selectedGatesByArea[areaKey] || [];

  const currentKeys = new Set(
    currentSelected.map((g) => `${g.row}-${g.column}`)
  );
  let newSelected: GateModel[];

  if (forceAddOnly) {
    const additional = gatesArray.filter(
      (g) => !currentKeys.has(`${g.row}-${g.column}`)
    );
    newSelected = [...currentSelected, ...additional];
  } else {
    newSelected = gatesArray.reduce((acc, gate) => {
      const key = `${gate.row}-${gate.column}`;
      if (currentKeys.has(key)) {
        return acc.filter((g) => `${g.row}-${g.column}` !== key); // remove
      } else {
        return [...acc, gate]; // add
      }
    }, currentSelected);
  }

  return {
    ...selectedGatesByArea,
    [areaKey]: newSelected,
  };
};

export const updateScrollCost = (
  areaName: string,
  row: number,
  column: number,
  newCost: ScrollCostEnum,
  selectedGatesByArea: Record<string, GateModel[]>
): Record<string, GateModel[]> => {
  const gatesInArea = selectedGatesByArea[areaName];
  if (!gatesInArea) return selectedGatesByArea;

  const updatedGates = gatesInArea.map((gate) =>
    gate.row === row && gate.column === column
      ? { ...gate, scrollCost: ScrollCostEnumNumber[newCost] }
      : gate
  );

  return {
    ...selectedGatesByArea,
    [areaName]: updatedGates,
  };
};

export const numberToScrollEnum: Record<number, ScrollCostEnum> =
  Object.entries(ScrollCostEnumNumber).reduce((acc, [key, value]) => {
    acc[value] = key as ScrollCostEnum;
    return acc;
  }, {} as Record<number, ScrollCostEnum>);

// Calculates efficiencies for one area
export const calculateGateEfficiencies = (area: GateModel[]) => {
  return area.flat().map((gate) => {
    if (
      gate.type === GateTypeEnum.COOP_BOSS ||
      gate.type === GateTypeEnum.ELEM_BOSS ||
      gate.type === GateTypeEnum.SWEEP ||
      gate.type === GateTypeEnum.GUILD
    ) {
      return {
        ...gate,
        totalBuffExperience: 0,
        efficiency: 0,
      };
    }

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
};

export const updateEfficienciesForAllAreas = (
  selectedGatesByArea: Record<string, GateModel[]>
): Record<string, GateModel[]> => {
  const updated: Record<string, GateModel[]> = {};

  for (const [areaName, gates] of Object.entries(selectedGatesByArea)) {
    updated[areaName] = calculateGateEfficiencies(gates);
  }

  return updated;
};
