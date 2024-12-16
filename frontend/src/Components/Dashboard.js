import "../styles/components_styles/dashboard.css";

//Chart component imports
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <h1>Dashboard</h1>
      </div>

      <MainPlotSection />
    </div>
  );
}

function MainPlotSection() {
  return (
    <div className="mainplotsection">
      <div className="dashboard-container">
        <TestGraph />

        <TestGraph />
      </div>
      <div className="dashboard-container">
        <TestGraph />
      </div>
    </div>
  );
}

//Fake data for experimenting purposes
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function TestGraph() {
  return (
    <div className="plot-container">
      <h2 className="plot-title">Plot Title</h2>
      <div className="plot-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" stroke="white" strokeOpacity={0.5} dy={5} />
            <YAxis stroke="white" strokeOpacity={0.5} />
            <Tooltip content={<CustomToolTip />} />
            <Legend verticalAlign="top" />

            <Line
              type="linear"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ stroke: "black", strokeWidth: 1, r: 5 }}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              activeDot={{ stroke: "black", strokeWidth: 1, r: 5 }}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CustomToolTip({ active, payload, label }) {
  //only execute for active data points
  if (active && payload && payload.length) {
    let values = [];
    // loop over the amount of stacked lines there are to create info for each
    for (let i = 0; i < payload.length; i++) {
      values.push(
        <p className="values" style={{ color: payload[i].stroke }}>
          {payload[i].name}: <span>{payload[i].value}</span>
        </p>
      );
    }

    return (
      <div className="custom-tooltip">
        <p className="label">{label}</p>
        {values}
      </div>
    );
  }
}
