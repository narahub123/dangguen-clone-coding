import { NavLink } from "react-router-dom";
import { PageFooter } from "../common";
import { GoHomeFill } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { userExample } from "../../data";

export const HomeFooter = () => {
  const { userId } = userExample;
  return (
    <PageFooter>
      <div className="flex justify-around">
        <NavLink
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-black" : "text-gray-400"
            }`
          }
          to="/"
        >
          <div className="text-3xl">
            <GoHomeFill />
          </div>
          <p className="text-sm">홈</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-black" : "text-gray-400"
            }`
          }
          to="/map"
        >
          <div className="text-3xl">
            <FaMapMarkerAlt />
          </div>
          <p className="text-sm">동네지도</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-black" : "text-gray-400"
            }`
          }
          to={`/chats`}
        >
          <div className="text-3xl">
            <AiFillMessage />
          </div>
          <p className="text-sm">채팅</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-black" : "text-gray-400"
            }`
          }
          to={`/users/${userId}`}
        >
          <div className="text-3xl">
            <IoPerson />
          </div>
          <p className="text-sm">내 오이</p>
        </NavLink>
      </div>
    </PageFooter>
  );
};
