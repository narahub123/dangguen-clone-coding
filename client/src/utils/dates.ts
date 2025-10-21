export const calcDates = (date: Date) => {
  const target = new Date(date);

  console.log("현재 날짜", target);
  const year = target.getFullYear();
  const month = target.getMonth();

  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);
  console.log("시작일", start);
  console.log("종료일", end);
  const curMonth = Array.from({ length: end.getDate() }).map(
    (_, idx) => new Date(year, month, idx + 1)
  );
  const prevMonth = Array.from({ length: start.getDay() })
    .map((_, idx) => new Date(year, month, -idx))
    .sort();

  console.log(prevMonth);
  return [...prevMonth, ...curMonth];
};

export const calcYears = () => {
  return Array.from({ length: 21 }).map((_, idx) => 2020 + idx);
};
