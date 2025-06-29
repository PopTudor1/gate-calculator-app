import { GateTypeEnum } from "../../enums/gate-type-enum";
import type { GateModel } from "../../models/gate-model";
import { RuneWithChance } from "../../models/rune-model";
import A5Row1, { a5Row1RuneInput } from "../area5/rows/row1";
import A5Row10, { a5Row10RuneInput } from "../area5/rows/row10";
import A5Row2, { a5Row2RuneInput } from "../area5/rows/row2";
import A5Row3, { a5Row3RuneInput } from "../area5/rows/row3";
import A5Row4, { a5Row4RuneInput } from "../area5/rows/row4";
import A5Row5, { a5Row5RuneInput } from "../area5/rows/row5";
import A5Row6, { a5Row6RuneInput } from "../area5/rows/row6";
import A5Row7, { a5Row7RuneInput } from "../area5/rows/row7";
import A5Row8, { a5Row8RuneInput } from "../area5/rows/row8";
import A5Row9, { a5Row9RuneInput } from "../area5/rows/row9";

const Area5: GateModel[] = [
  ...A5Row1,
  ...A5Row2,
  ...A5Row3,
  ...A5Row4,
  ...A5Row5,
  ...A5Row6,
  ...A5Row7,
  ...A5Row8,
  ...A5Row9,
  ...A5Row10,
];

export default Area5;

export const area5GateTypesInput: GateTypeEnum[] = [
  //row 1
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.BOSS,
  //row2
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row3
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row4
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row5
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row6
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row7
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row8
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row9
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row10
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
];

export const area5RunesInput: RuneWithChance[][] = [
  ...a5Row1RuneInput,
  ...a5Row2RuneInput,
  ...a5Row3RuneInput,
  ...a5Row4RuneInput,
  ...a5Row5RuneInput,
  ...a5Row6RuneInput,
  ...a5Row7RuneInput,
  ...a5Row8RuneInput,
  ...a5Row9RuneInput,
  ...a5Row10RuneInput,
];
