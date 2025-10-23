import { fraudReports } from "../../../data";
import { LinkButton } from "../../../ui";

export const ReportFraud = () => {
  return (
    <div>
      {fraudReports.map((report) => (
        <LinkButton
          text={report.text}
          to={report.path}
          className="border-0 border-b"
          key={report.path}
          desc={report.desc}
        />
      ))}
    </div>
  );
};
