import { GateStatusEnum } from "../../../enums/gate-status.enum";
import { GateTypeEnum } from "../../../enums/gate-type-enum";
import { RuneTypeEnum } from "../../../enums/rune-type-enum";
import type { GateModel } from "../../../models/gate-model";
import { RuneWithChance } from "../../../models/rune-model";

const A4Row8: GateModel[] = [
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
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 8,
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
    row: 8,
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
    row: 8,
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
    row: 8,
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
    row: 8,
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
    row: 8,
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
    row: 8,
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
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 8,
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
        experience: 1,
        imageUrl: "dummy rune url",
      },
    ],
    imageUrl: "dummy url",
    swipeCount: 0,
    row: 8,
    column: 9,
  },
];

export default A4Row8;

export const a4Row8RuneInput: RuneWithChance[][] = [
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.A, chance: 20 },
    { rune: RuneTypeEnum.S, chance: 7.4 },
    { rune: RuneTypeEnum.SR, chance: 1.8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 18 },
    { rune: RuneTypeEnum.S, chance: 3 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 10 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.C, chance: 20 },
    { rune: RuneTypeEnum.B, chance: 14 },
    { rune: RuneTypeEnum.A, chance: 4 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 12 },
    { rune: RuneTypeEnum.S, chance: 1 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 100 },
    { rune: RuneTypeEnum.B, chance: 20 },
    { rune: RuneTypeEnum.A, chance: 14 },
    { rune: RuneTypeEnum.S, chance: 1.8 },
  ],
  [
    { rune: RuneTypeEnum.D, chance: 1 },
    { rune: RuneTypeEnum.D, chance: 1 },
  ],
];
