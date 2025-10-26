import type { ChangeEvent, FC } from "react";
import {
  AddressDetailInput,
  EupMyeonDongSelect,
  SidoSelect,
  SiGunGuSelect,
} from "../../ui";
import type { PlaceType } from "../../types";

interface PlaceSelectorsProps {
  place: PlaceType;
  onChange: (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

export const PlaceSelectors: FC<PlaceSelectorsProps> = ({
  place,
  onChange,
}) => {
  return (
    <div className="flex gap-4 p-4">
      <SidoSelect onChange={onChange} sido={place.sido.code} />
      <SiGunGuSelect
        sido={place.sido.code}
        onChange={onChange}
        sigungu={place.sgg.code}
      />
      <EupMyeonDongSelect
        sigungu={place.sgg.code}
        onChange={onChange}
        eupMyeonDong={place.eupMyeonDong.code}
      />
      <AddressDetailInput
        onChange={onChange}
        eupMyeondong={place.eupMyeonDong.code}
        detail={place.detail}
      />
    </div>
  );
};
