import Area1, {
  area1GateTypesInput,
  area1RunesInput,
} from "../components/area1/area-1";
import Area2, {
  area2GateTypesInput,
  area2RunesInput,
} from "../components/area2/area-2";
import type { AreaModel } from "../models/area-model";
import Area3, { area3GateTypesInput, area3RunesInput } from "./area3/area-3";
import Area4, { area4GateTypesInput, area4RunesInput } from "./area4/area-4";
import Area5, { area5GateTypesInput, area5RunesInput } from "./area5/area-5";

const AreasList: AreaModel[] = [
  {
    name: "Area 1",
    gatesList: Area1,
    gateTypesInput: area1GateTypesInput,
    runesInput: area1RunesInput,
  },
  {
    name: "Area 2",
    gatesList: Area2,
    gateTypesInput: area2GateTypesInput,
    runesInput: area2RunesInput,
  },
  {
    name: "Area 3",
    gatesList: Area3,
    gateTypesInput: area3GateTypesInput,
    runesInput: area3RunesInput,
  },
  {
    name: "Area 4",
    gatesList: Area4,
    gateTypesInput: area4GateTypesInput,
    runesInput: area4RunesInput,
  },
  {
    name: "Area 5",
    gatesList: Area5,
    gateTypesInput: area5GateTypesInput,
    runesInput: area5RunesInput,
  },
];

export default AreasList;
