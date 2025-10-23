import { inappropriateReports } from "../../../data";
import { LinkButton, ModalTriggerButton } from "../../../ui";

export const ReportInappropriate = () => {
  return (
    <div>
      {inappropriateReports.map((report) => {
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
