import CoopBossGateIcon from "../assets/guild-battle-gates/coop-boss-gate.png";
import ElemBossGateIcon from "../assets/guild-battle-gates/elem-boss-gate.png";
import GuildGateIcon from "../assets/guild-battle-gates/guild-gate.png";
import MonsterEasyIcon from "../assets/guild-battle-gates/monster-easy-gate.png";
import MonsterHardIcon from "../assets/guild-battle-gates/monster-hard-gate.png";
import SweepIcon from "../assets/guild-battle-gates/sweep-gate.png";
import { GateTypeEnum } from "../enums/gate-type-enum";

const gateTypeProperties = {
  [GateTypeEnum.GUILD]: {
    imageUrl: GuildGateIcon,
    scrollCost: 8,
    costIncrement: 0,
  },
  [GateTypeEnum.COOP_BOSS]: {
    imageUrl: CoopBossGateIcon,
    scrollCost: 8,
    costIncrement: 0,
  },
  [GateTypeEnum.ELEM_BOSS]: {
    imageUrl: ElemBossGateIcon,
    scrollCost: 10,
    costIncrement: 0,
  },
  [GateTypeEnum.MONSTER_EASY]: {
    imageUrl: MonsterEasyIcon,
    scrollCost: 6,
    costIncrement: 6,
  },
  [GateTypeEnum.MONSTER_HARD]: {
    imageUrl: MonsterHardIcon,
    scrollCost: 8,
    costIncrement: 8,
  },
  [GateTypeEnum.SWEEP]: {
    imageUrl: SweepIcon,
    scrollCost: 1,
    costIncrement: 0,
  },
  [GateTypeEnum.ALL]: {
    imageUrl: SweepIcon,
    scrollCost: 1,
    costIncrement: 0,
  },
};

export default gateTypeProperties;
