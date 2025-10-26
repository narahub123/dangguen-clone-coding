import type { ChangeEvent, FC } from "react";

interface AddressDetailInputProps {
  detail: string;
  eupMyeondong: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AddressDetailInput: FC<AddressDetailInputProps> = ({
  onChange,
  detail,
  eupMyeondong,
}) => {
  return (
    <input
      type="text"
      id="detail"
      placeholder="상세 주소 입력"
      onChange={onChange}
      value={detail}
      disabled={!eupMyeondong}
      className="border flex-1"
    />
  );
};
