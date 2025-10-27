import { NavLink } from "react-router-dom";
import { Icon, PageFooter } from "../common";
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
          <Icon name="homeFill" className="text-3xl" />
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
          <Icon name="marker" className="text-3xl" />
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
          <Icon name="chat" className="text-3xl" />
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
          <Icon name="user" className="text-3xl" />
          <p className="text-sm">내 오이</p>
        </NavLink>
      </div>
    </PageFooter>
  );
};
