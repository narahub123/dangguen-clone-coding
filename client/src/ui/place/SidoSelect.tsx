import type { ChangeEvent, FC } from "react";
import { sidos } from "../../data";

interface SidoSelectProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  sido: string;
}

export const SidoSelect: FC<SidoSelectProps> = ({ onChange, sido }) => {
  return (
    <select
      name="sido"
      id="sido"
      onChange={onChange}
      value={sido}
      className="border"
    >
      {sidos.map((sido) => (
        <option value={sido.code} key={sido.code}>
          {sido.nameKor}
        </option>
      ))}
    </select>
  );
};
