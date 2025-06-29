import ScrollIcon from "../assets/scroll.png";
import { RuneTypeEnum } from "../enums/rune-type-enum";

//TODO change this with the actual values from the game
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
    experience: 100,
  },
  [RuneTypeEnum.SR]: {
    imageUrl: ScrollIcon,
    experience: 150,
  },
};

export default runeTypeProperties;
