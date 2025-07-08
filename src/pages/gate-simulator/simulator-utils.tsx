import gateTypeProperties from "../../components/gate-type-properties";
import runeTypeProperties from "../../components/rune-type-properties";
import { GateTypeEnum } from "../../enums/gate-type-enum";
import { AreaModel } from "../../models/area-model";
import { GateModel } from "../../models/gate-model";
import { RuneModel } from "../../models/rune-model";

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

//Get top gates by efficiency
export const getTopEfficientGates = (
  gates: GateModel[],
  count: number,
  gateType: GateTypeEnum
): GateModel[] => {
  return [...gates]
    .filter(
      (gate) => gate.type === gateType && gate.efficiency && gate.efficiency > 0
    )
    .sort((a, b) => b.efficiency - a.efficiency)
    .slice(0, count);
};

// Update Area Gates based on type entered by user
export const updateGatesBasedOnTypes = (area: AreaModel): AreaModel => {
  const updatedGatesList = area.gatesList.map((gate, index) => {
    const gateType = area.gateTypesInput[index];
    const properties = gateTypeProperties[gateType];
    console.log("Properties", properties, gateType);

    // Get rune inputs for this gate
    const runeInputs = area.runesInput[index];

    // Create runesList from runeInputs
    const runesList: RuneModel[] = runeInputs.map(
      (runeWithChance, runeIndex) => {
        const runeProps = runeTypeProperties[runeWithChance.rune];
        return {
          index: runeIndex,
          type: runeWithChance.rune,
          chance: runeWithChance.chance,
          experience: runeProps.experience,
          imageUrl: runeProps.imageUrl,
        };
      }
    );

    // Create the updated gate with updated runes
    return {
      ...gate,
      type: gateType,
      imageUrl: properties.imageUrl,
      scrollCost: properties.scrollCost,
      costIncrement: properties.costIncrement,
      runesList,
    };
  });

  return {
    ...area,
    gatesList: updatedGatesList,
  };
};

export const processArea = (area: AreaModel) => {
  const updatedArea = updateGatesBasedOnTypes(area);
  const results = calculateGateEfficiencies(updatedArea.gatesList);
  const sortedResults = results.sort((a, b) => b.efficiency - a.efficiency);
  return sortedResults;
};
