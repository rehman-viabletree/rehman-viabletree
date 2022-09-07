import React from "react";
import logo from "../../assets/images/login.png";
import google from "../../assets/images/googlelogin.png"
import "./styles.css";
import { Button } from "react-bootstrap";

export default function LoginView() {
  return (
    <div className="main-cont-login">
      <div className="left-login">
        <img src={logo} />
      </div>
      <div className="right">
        <div className="content">
          <p>Start to Free</p>
          <h2>Welcome to <span>Gatsby</span>
          </h2>

          <p>
            Start your new journey <span>with Gatsby</span>
          </p>
          <Button className="button"  ><img src = {google}/>Login with Google</Button>
        </div>
      </div>
    </div>
  );
}
