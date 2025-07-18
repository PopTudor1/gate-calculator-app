import { GateTypeEnum } from "../../../enums/gate-type-enum";
import { GateModel } from "../../../models/gate-model";
import { RuneWithChance } from "../../../models/rune-model";
import A2Row1, { a2Row1RuneInput } from "../area2/rows/row1";
import A2Row10, { a2Row10RuneInput } from "../area2/rows/row10";
import A2Row2, { a2Row2RuneInput } from "../area2/rows/row2";
import A2Row3, { a2Row3RuneInput } from "../area2/rows/row3";
import A2Row4, { a2Row4RuneInput } from "../area2/rows/row4";
import A2Row5, { a2Row5RuneInput } from "../area2/rows/row5";
import A2Row6, { a2Row6RuneInput } from "../area2/rows/row6";
import A2Row7, { a2Row7RuneInput } from "../area2/rows/row7";
import A2Row8, { a2Row8RuneInput } from "../area2/rows/row8";
import A2Row9, { a2Row9RuneInput } from "../area2/rows/row9";

const Area2: GateModel[] = [
  ...A2Row1,
  ...A2Row2,
  ...A2Row3,
  ...A2Row4,
  ...A2Row5,
  ...A2Row6,
  ...A2Row7,
  ...A2Row8,
  ...A2Row9,
  ...A2Row10,
];

export default Area2;

export const area2GateTypesInput: GateTypeEnum[] = [
  //row 1
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.SWEEP,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row2
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  //row3
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_HARD,
  //row4
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.GUILD,
  //row5
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.GUILD,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row6
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  //row7
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  //row8
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.COOP_BOSS,
  //row9
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  //row10
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
];

export const area2RunesInput: RuneWithChance[][] = [
  ...a2Row1RuneInput,
  ...a2Row2RuneInput,
  ...a2Row3RuneInput,
  ...a2Row4RuneInput,
  ...a2Row5RuneInput,
  ...a2Row6RuneInput,
  ...a2Row7RuneInput,
  ...a2Row8RuneInput,
  ...a2Row9RuneInput,
  ...a2Row10RuneInput,
];
