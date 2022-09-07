import React from "react";
import dp from "../../assets/images/dp.png";
import create from "../../assets/images/create.png";
import {Button} from "react-bootstrap";
import "./styles.css";
export default function DashboardSidenav() {
  return (
    <div className="side-nav">
      <div className="top">
        <div className="user">
          <img src={dp} className="dp" />
          <p>John Smith</p>
        </div>
        <Button className="bton-side spec">
          Create an Event <img src={create} />
        </Button>
      </div>
      <Button className="bton-side logout">Logout</Button>
    </div>
  );
}
