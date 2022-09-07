import React from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
} from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import dp from "../../assets/images/dp.png";
import down from "../../assets/images/Vector.png";
import create from "../../assets/images/create.png";

import detai from "../../assets/images/detail-dp.png";
import loc from "../../assets/images/Location.png";
import date from "../../assets/images/Date.svg";

import "./styles.css";
import DashboardNav from "../../Components/DashboardNav";
import DashboardSidenav from "../../Components/DashboardSidenav";
import DashboardHeader from "../../Components/DashboardHeader";
import Card from "../../Components/Cards";
import DetailsCard from "../../Components/DetailCard";
import ContentArea from "../../Components/ContentArea";
export default function Home() {
  
  return (
    <div className="main-cont">
      <DashboardNav />
      <div className="area">
        <DashboardSidenav />
        <div className="content-area">
          <DashboardHeader />
          <ContentArea />
          {/* <div className="second-sec">
            <div className="left-sec">
              {cardDetails.map((item) => (
                <Card props={item} />
              ))}
            </div>
            <div className="right-sec">
              <DetailsCard />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
