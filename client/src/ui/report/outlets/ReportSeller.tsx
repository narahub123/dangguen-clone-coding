import { sellerText } from "../../../data";
import { ReportLayout } from "../ReportLayout";

export const ReportSeller = () => {
  return (
    <ReportLayout>
      <div className="p-4">
        <p>{sellerText.title}</p>
        <p>{sellerText.desc}</p>
      </div>
    </ReportLayout>
  );
};
