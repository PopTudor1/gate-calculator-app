import { GateTypeEnum, GateTypeEnumLabel } from "../../enums/gate-type-enum";
import "./gate-type-select.css";
type Props = {
  value: GateTypeEnum;
  onChange: (value: GateTypeEnum) => void;
};

export const GateTypeSelect: React.FC<Props> = ({ value, onChange }) => {
  const allowedValues = [
    GateTypeEnum.MONSTER_EASY,
    GateTypeEnum.MONSTER_HARD,
    GateTypeEnum.ELEM_BOSS,
  ];

  const getTextColor = (type: GateTypeEnum) => {
    switch (type) {
      case GateTypeEnum.MONSTER_EASY:
        return "green";
      case GateTypeEnum.MONSTER_HARD:
        return "red";
      case GateTypeEnum.ELEM_BOSS:
        return "purple";
      default:
        return "black";
    }
  };

  return (
    <select
      className="gate-type-select"
      id="gateTypeSelect"
      value={value}
      onChange={(e) => onChange(e.target.value as GateTypeEnum)}
      style={{ color: getTextColor(value) }}
    >
      {allowedValues.map((enumKey) => {
        const color = getTextColor(enumKey);
        return (
          <option
            className="gate-type-option"
            key={enumKey}
            value={enumKey}
            style={{ color }}
          >
            {GateTypeEnumLabel[enumKey]}
          </option>
        );
      })}
    </select>
  );
};
