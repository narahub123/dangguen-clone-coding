type ToggleProps = {
  id: string;
  isOn: boolean;
  onClick: (id: string) => void;
  size?: number;
  className?: string;
};

export const ToggleButton = ({
  id,
  isOn,
  onClick,
  size = 24,
  className = "",
}: ToggleProps) => {
  // 치수 계산 (노브: size)
  const knob = size; // 노브 지름
  const trackW = knob * 2; // 트랙 너비
  const trackH = knob; // 트랙 높이
  const containerW = knob * 2.2; // 바깥 컨테이너(배경) 너비
  const containerH = knob * 1.2; // 바깥 컨테이너(배경) 높이
  const translateX = knob; // 켜짐 시 이동 거리

  return (
    <div
      className={`rounded-3xl flex justify-center items-center cursor-pointer
                  ${isOn ? "bg-orange-400" : "bg-gray-200"}
                  transition-colors duration-300 ease-in-out ${className}`}
      style={{ width: containerW, height: containerH }}
      onClick={() => onClick(id)}
      role="switch"
      aria-checked={isOn}
    >
      <div
        className="rounded-3xl relative transition-colors duration-300 ease-in-out"
        style={{ width: trackW, height: trackH }}
      >
        <div
          className="rounded-full bg-white absolute top-0 left-0 shadow-sm will-change-transform
                     transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: knob,
            height: knob,
            transform: `translateX(${isOn ? translateX : 0}px)`,
          }}
        />
      </div>
    </div>
  );
};
