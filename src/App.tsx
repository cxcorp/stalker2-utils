import "./App.css";
import css from "./SleepTable.module.css";

const sleepTimes = (hour: number, times: number) => (hour + 7 * times) % 24;

const getHourClass = (hour: number) => {
  if (hour >= 5 && hour <= 10) {
    return css.resultHourBest;
  }
  if (hour >= 19 || hour < 5) {
    return css.resultHourBad;
  }
  return css.resultHourOk;
};

const ResultHourCell = ({ hour }: { hour: number }) => (
  <td className={getHourClass(hour)}>{hour}</td>
);

const range = (start: number, end: number) =>
  Array(end - start)
    .fill(0)
    .map((_, i) => i + start);

const SleepTable = () => {
  return Array(24)
    .fill(0)
    .map((_, i) => i)
    .map((hour) => (
      <tr key={hour} className={css.row}>
        <td className={css.hour}>{hour}</td>

        {range(1, 4).map((times) => (
          <ResultHourCell key={times} hour={sleepTimes(hour, times)} />
        ))}
      </tr>
    ));
};

function App() {
  return (
    <>
      <h1>S.T.A.L.K.E.R. 2 Utilities</h1>
      <div className="card">
        <table>
          <thead>
            <tr>
              <th />
              <th colSpan={3}>Times to sleep</th>
            </tr>
            <tr>
              <th>Hour</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </tr>
          </thead>
          <tbody>
            <SleepTable />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
