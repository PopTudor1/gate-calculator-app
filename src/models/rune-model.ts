import type { RuneTypeEnum } from "../enums/rune-type-enum";

export type RuneModel = {
  index?: number;
  type: RuneTypeEnum;
  chance: number;
  experience: number;
  imageUrl: string;
};
