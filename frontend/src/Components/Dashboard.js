import "../styles/components_styles/dashboard.css";

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

        {/* Border to show plot region, remove when added */}
      <div className="plot-border">
        <h2>Plot section</h2>
      </div>

    </div>
  );
}
