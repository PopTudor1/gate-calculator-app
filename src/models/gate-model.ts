import type { GateStatusEnum } from "../enums/gate-status.enum";
import type { GateTypeEnum } from "../enums/gate-type-enum";
import type { RuneModel } from "./rune-model";

export type GateModel = {
  rowPosition?: number;
  type: GateTypeEnum;
  status: GateStatusEnum;
  costIncrement: number;
  scrollCost: number;
  totalBuffExperience: number;
  efficiency: number;
  runesList: RuneModel[];
  imageUrl: string;
  swipeCount: number;
  row: number;
  column: number;
};
