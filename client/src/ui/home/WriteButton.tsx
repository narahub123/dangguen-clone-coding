import { LuPlus } from "react-icons/lu";
import { Link } from "react-router-dom";

export const WriteButton = () => {
  return (
    <Link
      to="/write"
      className="fixed bottom-22 left-112 z-30 bg-orange-400 text-white rounded-full p-2 shadow-lg"
    >
      <span className="text-2xl">
        <LuPlus />
      </span>
    </Link>
  );
};
