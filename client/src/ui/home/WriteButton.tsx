import { Link } from "react-router-dom";
import { Icon } from "../common";

export const WriteButton = () => {
  return (
    <Link
      to="/write"
      className="fixed bottom-22 left-112 z-30 bg-orange-400 text-white rounded-full p-2 shadow-lg"
    >
      <Icon name="plus" className="text-2xl" />
    </Link>
  );
};
