import { userReports } from "../../../data";
import { LinkButton } from "../../sell-item";

export const ReportUser = () => {
  return (
    <div>
      {userReports.map((report) => (
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
