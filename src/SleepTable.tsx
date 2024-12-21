import "./App.css";
import {
  hoursOfDaylightLeft,
  HourType,
  is1HourBeforeSunrise,
  isDaylight,
  sleepTimes,
} from "./domain/sleep";
import css from "./SleepTable.module.css";
import { classnames, range } from "./utils";

const getHourClass = (hour: number) => {
  // if has more than 8 hours of sunlight -> good hours
  if (isDaylight(hour)) {
    const daylightLeft = hoursOfDaylightLeft(hour);
    if (daylightLeft >= 8) {
      return HourType.BEST;
    }
    if (daylightLeft >= 4) {
      return HourType.OK;
    }
    return HourType.BAD;
  }

  if (is1HourBeforeSunrise(hour)) {
    return HourType.OK;
  }

  return HourType.BAD;
};

const hourTypeToClass: Record<HourType, string> = {
  [HourType.BEST]: css.resultHourBest,
  [HourType.OK]: css.resultHourOk,
  [HourType.BAD]: css.resultHourBad,
};

interface ResultHourCellProps {
  hour: number;
  className?: string;
}

const ResultHourCell = ({ hour, className }: ResultHourCellProps) => (
  <td className={classnames(hourTypeToClass[getHourClass(hour)], className)}>
    {hour}
    {getHourClass(hour) !== HourType.BAD ? (
      <span>{` (${hoursOfDaylightLeft(hour)}h)`}</span>
    ) : null}
  </td>
);

const SleepTableRows = () => {
  return Array(24)
    .fill(0)
    .map((_, i) => i)
    .map((hour) => (
      <tr key={hour} className={css.row}>
        <ResultHourCell hour={hour} className={css.hour} />

        {range(1, 4).map((times) => (
          <ResultHourCell key={times} hour={sleepTimes(hour, times)} />
        ))}
      </tr>
    ));
};

const SleepTable = () => (
  <table>
    <thead>
      <tr>
        <th />
        <th colSpan={3}>Times to sleep</th>
      </tr>
      <tr className={css.row}>
        <th>Hour</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
      </tr>
    </thead>
    <tbody>
      <SleepTableRows />
    </tbody>
  </table>
);

export default SleepTable;
