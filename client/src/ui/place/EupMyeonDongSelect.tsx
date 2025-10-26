import { useEffect, useState, type ChangeEvent, type FC } from "react";
import { eupMyeonDongs } from "../../data";
import type { HjdType } from "../../types";

interface EupMyeonDongSelectProps {
  sigungu: string;
  eupMyeonDong: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const EupMyeonDongSelect: FC<EupMyeonDongSelectProps> = ({
  sigungu,
  eupMyeonDong,
  onChange,
}) => {
  const [dongs, setDongs] = useState<HjdType[]>([]);

  useEffect(() => {
    const emds = eupMyeonDongs.filter((e) => e.parentCode === sigungu);

    setDongs(emds);
  }, [sigungu]);

  return (
    <select
      id="eupMyeonDong"
      name="eupMyeonDong"
      onChange={onChange}
      value={eupMyeonDong}
      className="border"
    >
      {!eupMyeonDong && <option value="">읍면동</option>}
      {dongs.map((d) => (
        <option value={d.code} key={d.code}>
          {d.nameKor}
        </option>
      ))}
    </select>
  );
};
