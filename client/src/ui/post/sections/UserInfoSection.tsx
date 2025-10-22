import { Link } from "react-router-dom";
import { profileImage } from "../../../asset";

export const UserInfoSection = () => {
  return (
    <section className="p-4">
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2">
          {/* 사용자 사진 */}
          <figure className="w-16 h-16 rounded-full border">
            <img className="w-16 h-16 rounded-full " src={profileImage} />
          </figure>
          <div>
            <p>사용자 이름</p>
            <p>지역 이름</p>
          </div>
        </div>
        <div>
          <div>32.7😪</div>
          <div>
            <Link to="/" className="text-sm">
              매너온도
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
