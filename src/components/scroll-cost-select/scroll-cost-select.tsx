import {
  ScrollCostEnum,
  ScrollCostEnumLabel,
} from "../../enums/scroll-cost-enum";
import "./scroll-cost-select.css";

type Props = {
  value: ScrollCostEnum;
  onChange: (value: ScrollCostEnum) => void;
};

export const ScrollCostSelect: React.FC<Props> = ({ value, onChange }) => {
  return (
    <select
      className="scroll-cost-select"
      id="scrollCostSelect"
      value={value}
      onChange={(e) => onChange(e.target.value as ScrollCostEnum)}
    >
      {Object.values(ScrollCostEnum).map((enumKey) => (
        <option className="scroll-cost-option" key={enumKey} value={enumKey}>
          {ScrollCostEnumLabel[enumKey]}
        </option>
      ))}
    </select>
  );
};
