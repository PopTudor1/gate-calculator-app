import ScrollIcon from "../assets/scroll.png";
import { RuneTypeEnum } from "../enums/rune-type-enum";

const runeTypeProperties = {
  [RuneTypeEnum.D]: {
    imageUrl: ScrollIcon,
    experience: 10,
  },
  [RuneTypeEnum.C]: {
    imageUrl: ScrollIcon,
    experience: 20,
  },
  [RuneTypeEnum.B]: {
    imageUrl: ScrollIcon,
    experience: 40,
  },
  [RuneTypeEnum.A]: {
    imageUrl: ScrollIcon,
    experience: 70,
  },
  [RuneTypeEnum.S]: {
    imageUrl: ScrollIcon,
    experience: 110,
  },
  [RuneTypeEnum.SR]: {
    imageUrl: ScrollIcon,
    experience: 160,
  },
};

export default runeTypeProperties;
