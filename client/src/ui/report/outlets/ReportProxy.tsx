import { proxyText } from "../../../data";
import { ReportLayout } from "../ReportLayout";

export const ReportProxy = () => {
  return (
    <ReportLayout>
      <div className="p-4 space-y-8">
        <p className="font-bold text-xl">{proxyText.title}</p>
        <p>{proxyText.desc}</p>
        <div className="">
          <textarea
            name=""
            id=""
            rows={5}
            className="w-full border border-gray-200 p-2 rounded-lg"
            placeholder="신고 내용을 입력해주세요. (최대 300자)"
          />
          <p className="text-right text-gray-400">{`${0}/300`}</p>
        </div>
      </div>
    </ReportLayout>
  );
};
