import { banReports } from "../../../data";
import { LinkButton, ModalTriggerButton } from "../../../ui";

export const ReportBans = () => {
  return (
    <div>
      {banReports.map((report) => {
        if (!report.path) {
          return (
            <ModalTriggerButton
              text={report.text}
              className="border-0 border-b"
              key={report.text}
              desc={report.desc}
            />
          );
        }
        return (
          <LinkButton
            text={report.text}
            to={report.path}
            className="border-0 border-b"
            key={report.path}
            desc={report.desc}
          />
        );
      })}
    </div>
  );
};
