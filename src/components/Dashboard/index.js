import React from "react";
import "./style.css";
import Dash from "../../Images/Group 382.png";
const Dashboard = () => {
  return (
    <div className="dashboard-section">
      <div className="dash-img">
        <img src={Dash} alt="Dash" style={{ width: "100%" }} />
      </div>
      <div className="dashbord-text-section">
        <div className="dashbord-heading">Intuitive Dashboards</div>
        <p className="dashbord-paragraph">
          Allows employers to easily track employee option pool, vesting
          schedules, options outstanding, exercises etc and take action
          accordingly.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
