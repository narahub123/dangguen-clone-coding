import { landingReports } from "../../../data";
import { LinkButton } from "../../sell-item";

export const ReportLanding = () => {
  return (
    <div>
      {landingReports.map((report) => (
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
