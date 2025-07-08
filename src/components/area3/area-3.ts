import { GateTypeEnum } from "../../enums/gate-type-enum";
import type { GateModel } from "../../models/gate-model";
import { RuneWithChance } from "../../models/rune-model";
import A3Row1, { a3Row1RuneInput } from "../area3/rows/row1";
import A3Row10, { a3Row10RuneInput } from "../area3/rows/row10";
import A3Row2, { a3Row2RuneInput } from "../area3/rows/row2";
import A3Row3, { a3Row3RuneInput } from "../area3/rows/row3";
import A3Row4, { a3Row4RuneInput } from "../area3/rows/row4";
import A3Row5, { a3Row5RuneInput } from "../area3/rows/row5";
import A3Row6, { a3Row6RuneInput } from "../area3/rows/row6";
import A3Row7, { a3Row7RuneInput } from "../area3/rows/row7";
import A3Row8, { a3Row8RuneInput } from "../area3/rows/row8";
import A3Row9, { a3Row9RuneInput } from "../area3/rows/row9";

const Area3: GateModel[] = [
  ...A3Row1,
  ...A3Row2,
  ...A3Row3,
  ...A3Row4,
  ...A3Row5,
  ...A3Row6,
  ...A3Row7,
  ...A3Row8,
  ...A3Row9,
  ...A3Row10,
];

export default Area3;

export const area3GateTypesInput: GateTypeEnum[] = [
  //row 1
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.SWEEP,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.GUILD,
  //row2
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  //row3
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  //row4
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.COOP_BOSS,
  //row5
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  //row6
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  //row7
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  //row8
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_HARD,
  //row9
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.ELEM_BOSS,
  //row10
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.GUILD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_EASY,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.MONSTER_HARD,
  GateTypeEnum.COOP_BOSS,
  GateTypeEnum.MONSTER_EASY,
];

export const area3RunesInput: RuneWithChance[][] = [
  ...a3Row1RuneInput,
  ...a3Row2RuneInput,
  ...a3Row3RuneInput,
  ...a3Row4RuneInput,
  ...a3Row5RuneInput,
  ...a3Row6RuneInput,
  ...a3Row7RuneInput,
  ...a3Row8RuneInput,
  ...a3Row9RuneInput,
  ...a3Row10RuneInput,
];
