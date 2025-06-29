import "./gate-count-select.css";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export const GateCountSelect: React.FC<Props> = ({ value, onChange }) => {
  return (
    <select
      className="gate-count-select"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option className="gate-count-option" value={5}>
        5 Gates
      </option>
      <option className="gate-count-option" value={10}>
        10 Gates
      </option>
      <option className="gate-count-option" value={15}>
        15 Gates
      </option>
    </select>
  );
};
