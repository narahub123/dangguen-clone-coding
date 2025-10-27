import { Icon } from "../../common";

export const NotificationSection = () => {
  return (
    <section className="p-4">
      <div className="w-full flex justify-between">
        <p className="max-w-[300px]">{`이웃들이 ${"맥북에러 m1 실버"} 게시글을 올리면 바로 알려들일까요?`}</p>
        <button className="shrink-0 text-sm px-3 py-2 bg-gray-200 rounded-3xl flex items-center justify-center gap-1">
          <Icon name="bellFill" />
          알림 받기
        </button>
      </div>
    </section>
  );
};
