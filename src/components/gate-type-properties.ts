import BossGateIcon from "../assets/guild-battle-gates/boss-gate.png";
import GuildGateIcon from "../assets/guild-battle-gates/guild-gate.png";
import MonsterEasyIcon from "../assets/guild-battle-gates/monster-easy-gate.png";
import MonsterHardIcon from "../assets/guild-battle-gates/monster-hard-gate.png";

import { GateTypeEnum } from "../enums/gate-type-enum";

//TODO check if this values are correct
const gateTypeProperties = {
  [GateTypeEnum.GUILD]: {
    imageUrl: GuildGateIcon,
    scrollCost: 8,
    costIncrement: 0,
  },
  [GateTypeEnum.BOSS]: {
    imageUrl: BossGateIcon,
    scrollCost: 8,
    costIncrement: 8,
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
};

export default gateTypeProperties;
