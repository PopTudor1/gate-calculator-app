import { GateTypeEnum } from "../../enums/gate-type-enum";
import type { GateModel } from "../../models/gate-model";
import { RuneWithChance } from "../../models/rune-model";
import A1Row1, { a1Row1RuneInput } from "../area1/rows/row1";
import A1Row10, { a1Row10RuneInput } from "../area1/rows/row10";
import A1Row2, { a1Row2RuneInput } from "../area1/rows/row2";
import A1Row3, { a1Row3RuneInput } from "../area1/rows/row3";
import A1Row4, { a1Row4RuneInput } from "../area1/rows/row4";
import A1Row5, { a1Row5RuneInput } from "../area1/rows/row5";
import A1Row6, { a1Row6RuneInput } from "../area1/rows/row6";
import A1Row7, { a1Row7RuneInput } from "../area1/rows/row7";
import A1Row8, { a1Row8RuneInput } from "../area1/rows/row8";
import A1Row9, { a1Row9RuneInput } from "../area1/rows/row9";

const Area1: GateModel[] = [
  ...A1Row1,
  ...A1Row2,
  ...A1Row3,
  ...A1Row4,
  ...A1Row5,
  ...A1Row6,
  ...A1Row7,
  ...A1Row8,
  ...A1Row9,
  ...A1Row10,
];

export default Area1;

export const area1GateTypesInput: GateTypeEnum[] = [
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
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.BOSS,
];

export const area1RunesInput: RuneWithChance[][] = [
  ...a1Row1RuneInput,
  ...a1Row2RuneInput,
  ...a1Row3RuneInput,
  ...a1Row4RuneInput,
  ...a1Row5RuneInput,
  ...a1Row6RuneInput,
  ...a1Row7RuneInput,
  ...a1Row8RuneInput,
  ...a1Row9RuneInput,
  ...a1Row10RuneInput,
];
