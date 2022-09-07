import { logRoles } from "@testing-library/react";
import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css"
export default function Card({ props }) {
  return (
    <div tabIndex={0} className="card-box">
      <div className="upper-sec">
        <h2 className="card-title">
          {props.title}
          <br />
          <p>{props.date}</p>
        </h2>
        <h2>{props.invites} invitees</h2>
      </div>
      <div className="lower-sec">
        <div className="user-info">
          <img src={props.img} />
          <p className="user-name">
            {props.role}
            <br />
            <h2>{props.username}</h2>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          {props.hosted && (
            <Button className="bton-1" disabled>
              Hosted by me
            </Button>
          )}
          {props.pending && (
            <Button className="bton-2" disabled>
              Pending
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
