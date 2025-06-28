import Area1 from "../components/area1/area-1";
import Area2 from "../components/area2/area-2";
import Area3 from "../components/area3/area-3";
import Area4 from "../components/area4/area-4";
import Area5 from "../components/area5/area-5";
import type { AreaModel } from "../models/area-model";

const AreasList: AreaModel[] = [
  {
    name: "Area 1",
    gatesList: Area1,
  },
  {
    name: "Area 2",
    gatesList: Area2,
  },
  {
    name: "Area 3",
    gatesList: Area3,
  },
  {
    name: "Area 4",
    gatesList: Area4,
  },
  {
    name: "Area 5",
    gatesList: Area5,
  },
];

export default AreasList;
