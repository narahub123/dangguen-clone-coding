import { useState, type FC } from "react";
import { defaultProfileImage } from "../../../asset";
import { Link } from "react-router-dom";
import { MannerSheet } from "../../../ui";

interface UserInfoSectionProps {
  username: string;
  location: string;
  temp: string;
  profileImage?: string;
  userId: string;
}

export const UserInfoSection: FC<UserInfoSectionProps> = ({
  username,
  location,
  temp,
  profileImage,
  userId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <section className="p-4 border-b border-gray-200">
      <MannerSheet isOpen={isOpen} onClose={onClose} />
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* 사용자 사진 */}
          <Link to={`/users/${userId}/profile`}>
            <figure className="w-16 h-16 rounded-full border">
              <img
                className="w-16 h-16 rounded-full "
                src={profileImage ?? defaultProfileImage}
              />
            </figure>
          </Link>
          <div>
            <Link to={`/users/${userId}/profile`}>
              <p>{username}</p>
            </Link>
            <Link to={`/search/${location}`}>
              <p>{location}</p>
            </Link>
          </div>
        </div>
        <div>
          {/* TODO: 온도에 따른 이모지 변경 */}
          <div>{temp}😪</div>
          <div>
            <button
              className="text-sm text-gray-400 underline cursor-pointer"
              onClick={onOpen}
            >
              매너온도
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
