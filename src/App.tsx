import "./App.css";
import Clock from "./Clock";
import SleepTable from "./SleepTable";

function App() {
  return (
    <div>
      <h1>S.T.A.L.K.E.R. 2 Utilities</h1>

      <div className="main">
        <div className="card">
          <SleepTable />
        </div>

        <Clock />
      </div>
    </div>
  );
}

export default App;
