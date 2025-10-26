import { useEffect, useState, type ChangeEvent, type FC } from "react";
import type { SggType } from "../../types";
import { sigungus } from "../../data";

interface SiGunGuSelectProps {
  sido: string;
  sigungu: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const SiGunGuSelect: FC<SiGunGuSelectProps> = ({
  sido,
  sigungu,
  onChange,
}) => {
  const [bases, setbases] = useState<SggType[]>([]);

  useEffect(() => {
    const bases = sigungus.filter((s) => s.parentCode === sido) ?? [];

    setbases(bases);
  }, [sido]);

  return (
    <select
      name="sgg"
      id="sgg"
      onChange={onChange}
      value={sigungu}
      className="border"
    >
      {!sigungu && <option value="">시군구</option>}
      {bases.map((b) => (
        <option value={b.code} key={b.code}>
          {b.nameKor}
        </option>
      ))}
    </select>
  );
};
