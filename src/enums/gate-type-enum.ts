export enum GateTypeEnum {
  GUILD = "GUILD",
  COOP_BOSS = "COOP_BOSS",
  ELEM_BOSS = "ELEM_BOSS",
  MONSTER_EASY = "MONSTER_EASY",
  MONSTER_HARD = "MONSTER_HARD",
  SWEEP = "SWEEP",
  ALL = "ALL",
}

export const GateTypeEnumLabel: Record<GateTypeEnum, string> = {
  [GateTypeEnum.GUILD]: "Guild",
  [GateTypeEnum.COOP_BOSS]: "Co-op Boss",
  [GateTypeEnum.ELEM_BOSS]: "Elem Boss",
  [GateTypeEnum.MONSTER_EASY]: "Normal",
  [GateTypeEnum.MONSTER_HARD]: "Hard",
  [GateTypeEnum.SWEEP]: "Start",
  [GateTypeEnum.ALL]: "All",
};
