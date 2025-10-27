import { Icon, icons } from "../ui";

export const IconPage = () => {
  return (
    <div className="w-full flex flex-wrap">
      {(Object.keys(icons) as (keyof typeof icons)[]).map((key) => (
        <Icon name={key} key={key} className="text-2xl p-2" />
      ))}
    </div>
  );
};
