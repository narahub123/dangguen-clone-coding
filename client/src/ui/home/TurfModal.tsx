import { useEffect, useState, type FC } from "react";
import { Modal } from "../common";
import { userExample } from "../../data";
import { Link } from "react-router-dom";
import type { TurfType } from "../../types";

interface TurfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TurfModal: FC<TurfModalProps> = ({ isOpen, onClose }) => {
  const [turfs, setTurfs] = useState<TurfType[]>([]);
  const { userId } = userExample;

  useEffect(() => {
    const { turfs } = userExample;

    setTurfs(turfs);
  }, []);

  const handleTurf = (value: string) => {
    setTurfs(
      turfs.map((turf) => ({
        ...turf,
        checked: turf.value === value,
      }))
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="rounded-xl">
      <div>
        {turfs.map((turf) => (
          <button
            key={turf.value}
            className={`w-full p-2 cursor-pointer ${
              turf.checked ? "font-bold" : ""
            }`}
            onClick={() => handleTurf(turf.value)}
          >
            {turf.name}
          </button>
        ))}
        <Link to={`/users/${userId}/turfs`}>
          <button className="w-full p-2 cursor-pointer">내 동네 설정</button>
        </Link>
      </div>
    </Modal>
  );
};
