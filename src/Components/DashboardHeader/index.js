import React from "react";
import create from "../../assets/images/create.png";
import down from "../../assets/images/Vector.png";
import {Button} from "react-bootstrap";
import "./styles.css"
export default function DashboardHeader() {
  return (
    <div className="header">
      <div className="left-side">
        <h2>👋 Welcome, Ashley!</h2>
        <Button className="bton left">
          <img src={create} />
        </Button>
      </div>
      <Button className="dropdown">
        All Events
        <img src={down} className="icon" />
      </Button>
    </div>
  );
}
