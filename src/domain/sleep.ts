import { mod24 } from "../utils";

export const sleepTimes = (hour: number, times: number) =>
  mod24(hour + 7 * times);

const SUNRISE = 5;
const SUNSET = 21;

const hoursDifference = (start: number, end: number) => mod24(end - start);

export const isDaylight = (hour: number) => hour >= SUNRISE && hour < SUNSET;

export const hoursOfDaylightLeft = (hour: number) => {
  const hoursSinceSunrise = hoursDifference(SUNRISE, hour);
  const totalDaylight = hoursDifference(SUNRISE, SUNSET);
  return mod24(totalDaylight - hoursSinceSunrise);
};

export const is1HourBeforeSunrise = (hour: number) =>
  hoursDifference(hour, SUNRISE) === 1;

export enum HourType {
  BEST,
  OK,
  BAD,
}
