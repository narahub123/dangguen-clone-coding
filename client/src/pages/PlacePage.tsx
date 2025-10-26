import { useState, type ChangeEvent } from "react";
import type { HjdType, PlaceType, SggType, SidoType } from "../types";
import { eupMyeonDongs, sidos, sigungus } from "../data";
import { PlaceSelectors } from "../ui";

const sidoInitialValue: SidoType = {
  code: "",
  nameKor: "시도",
  nameEng: "Sido",
};

const sggInitialValue: SggType = {
  code: "",
  parentCode: "",
  nameKor: "시군구",
  nameEng: "Shigungu",
  kind: "si",
  isAutonomous: true,
};

const eupMyeonDongInitialValue: HjdType = {
  code: "",
  parentCode: "",
  nameKor: "읍면동",
  nameEng: "EupMyeonDong",
  kind: "dong",
};

const placeInitialValue: PlaceType = {
  sido: sidoInitialValue,
  sgg: sggInitialValue,
  eupMyeonDong: eupMyeonDongInitialValue,
  detail: "",
};

export const PlacePage = () => {
  const [place, setPlace] = useState<PlaceType>(placeInitialValue);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const id = e.target.id;
    const code = e.target.value;

    console.log("id", id);

    // 시도 수정인 경우
    if (id === "sido") {
      const sido = sidos.filter((s) => s.code === code)![0];

      setPlace({
        sido,
        sgg: sggInitialValue,
        eupMyeonDong: eupMyeonDongInitialValue,
        detail: "",
      });
    }

    // 시군도 수정인 경우
    if (id === "sgg") {
      const sgg = sigungus.filter((s) => s.code === code)![0];

      setPlace((prev) => ({
        ...prev,
        sgg,
        eupMyeonDong: eupMyeonDongInitialValue,
        detail: "",
      }));
    }

    // 읍면동 수정인 경우
    if (id === "eupMyeonDong") {
      const eupMyeonDong = eupMyeonDongs.filter((s) => s.code === code)![0];

      setPlace((prev) => ({
        ...prev,
        eupMyeonDong,
        detail: "",
      }));
    }

    if (id === "detail") {
      setPlace((prev) => ({
        ...prev,
        [id]: code,
      }));
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-4">
        <p className="text-2xl font-bold">장소</p>
      </div>
      <hr />
      <PlaceSelectors place={place} onChange={handleChange} />
    </div>
  );
};
