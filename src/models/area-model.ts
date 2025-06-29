import { GateTypeEnum } from "../enums/gate-type-enum";
import type { GateModel } from "./gate-model";
import { RuneWithChance } from "./rune-model";

export type AreaModel = {
  name: string;
  gatesList: GateModel[];
  gateTypesInput: GateTypeEnum[];
  runesInput: RuneWithChance[][];
};
