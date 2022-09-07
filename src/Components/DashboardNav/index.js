import React from "react";
import logo from "../../assets/images/logo.svg";
import "./styles.css"
export default function DashboardNav() {
  return (
    <div className="navbar-cont">
      <div className="logo-cont">
        <img src={logo} className="logo" />
      </div>
      <h3 className="title">My Events</h3>
    </div>
  );
}
