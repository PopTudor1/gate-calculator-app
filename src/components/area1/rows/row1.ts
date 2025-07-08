import { GateStatusEnum } from "../../../enums/gate-status.enum";
import { GateTypeEnum } from "../../../enums/gate-type-enum";
import { RuneTypeEnum } from "../../../enums/rune-type-enum";
import type { GateModel } from "../../../models/gate-model";
import { RuneWithChance } from "../../../models/rune-model";

const A1Row1: GateModel[] = [
  {
    rowPosition: 1,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
      {
        type: RuneTypeEnum.A,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
      {
        type: RuneTypeEnum.S,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 1,
    column: 1,
  },
  {
    rowPosition: 2,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 1,
    column: 2,
  },
  {
    rowPosition: 3,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 1,
    column: 3,
  },
  {
    rowPosition: 4,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 1,
    column: 4,
  },
  {
    rowPosition: 5,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 1,
    column: 5,
  },
  {
    rowPosition: 6,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 1,
    column: 6,
  },
  {
    rowPosition: 7,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 1,
    column: 7,
  },
  {
    rowPosition: 8,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 12,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 1,
    column: 8,
  },
  {
    rowPosition: 9,
    type: GateTypeEnum.MONSTER_EASY,
    status: GateStatusEnum.UNCLEARED,
    costIncrement: 6,
    scrollCost: 6,
    totalBuffExperience: 1,
    efficiency: 1,
    runesList: [
      {
        type: RuneTypeEnum.D,
        chance: 80,
        experience: 111,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 1,
    column: 9,
  },
];

export default A1Row1;

export const a1Row1RuneInput: RuneWithChance[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 6 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 5 },
  ],
  [{ rune: RuneTypeEnum.D, chance: 100 }],
  [{ rune: RuneTypeEnum.D, chance: 100 }],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [{ rune: RuneTypeEnum.D, chance: 100 }],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.D, chance: 20 },
    { rune: RuneTypeEnum.C, chance: 9 },
  ],
];
