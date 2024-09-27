import { useCurrentDate } from "./useCurrentDate.js";
import { MyClock } from "./styled.js";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const Clock = () => {
  const date = useCurrentDate();

  return <MyClock>Dzisiaj jest {formatDate(date)}</MyClock>;
};

export default Clock;
