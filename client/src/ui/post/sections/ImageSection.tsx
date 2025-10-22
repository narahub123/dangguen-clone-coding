import { example1, example2, example3 } from "../../../asset";

export const ImageSection = () => {
  const images = [example1, example2, example3];
  return (
    <section>
      <div className="w-full aspect-square relative">
        <img src={example1} alt="" className="w-full aspect-square" />
        <span className="absolute bottom-2 right-2 px-2 bg-black/50 rounded-xl text-white">{`1/${images.length}`}</span>
      </div>
    </section>
  );
};
