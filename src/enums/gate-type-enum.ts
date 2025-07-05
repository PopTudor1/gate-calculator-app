export enum GateTypeEnum {
  GUILD = "GUILD",
  BOSS = "BOSS",
  MONSTER_EASY = "MONSTER_EASY",
  MONSTER_HARD = "MONSTER_HARD",
}

export const GateTypeEnumLabel: Record<GateTypeEnum, string> = {
  [GateTypeEnum.GUILD]: "Guild",
  [GateTypeEnum.BOSS]: "Boss",
  [GateTypeEnum.MONSTER_EASY]: "Easy",
  [GateTypeEnum.MONSTER_HARD]: "Hard",
};
