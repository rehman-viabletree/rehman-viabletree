import React from "react";
import "./styles.css";
import detai from "../../assets/images/detail-dp.png";
import loc from "../../assets/images/Location.png";
import date from "../../assets/images/Date.svg";
import { Button } from "react-bootstrap";

export default function DetailsCard() {
  return (
    <div className="detail-card">
      <div className="top-sec">
        <div className="up">
          <h3>Mardi Gras Event</h3>
          <h2>20 invitees</h2>
        </div>
        <div className="lower-sec">
          <div className="user-info">
            <img src={detai} />
            <p className="det-user-name">
              Host
              <br />
              <h2>Jacqueline</h2>
            </p>
          </div>
          <Button className="bton-1" disabled>
            Hosted by me
          </Button>
        </div>
      </div>
      <div className="mid-sec">
        <div className="det">
          <img src={loc} />
          <h2 className="det-title">
            Location
            <br />
            <p>36 Guild Street London, UK </p>
          </h2>
        </div>
        <div className="det">
          <img src={date} />
          <h2 className="det-title">
            Event Start
            <br />
            <p>2022 | 01 September | 01:00pm</p>
          </h2>
        </div>
      </div>
      <div className="bot-sec">
        <h3 className="heading">About Event</h3>
        <p className="about">
          Enjoy your favorite dishe and a lovely your friends and family and
          have a great time. Food from local food trucks will be available for
          purchase.Enjoy your favorite dishe and a lovely your friends and
          family and have a great time. Food from local food trucks will be
          available for purchase.Enjoy your favorite dishe and a lovely your
          friends and family and have a great time. Food from local food trucks
          will be available for purchase.Enjoy your favorite dishe and a lovely
          your friends and family and have a great time. Food from local food
          trucks will be available for purchase.Enjoy your favorite dishe and a
          lovely your friends and family and have a great time. Food from local
          food trucks Enjoy your favorite dishe and a lovely your friends and
          family and have a great time. Food from local food trucks will be
          available for purchase.Enjoy your favorite dishe and a lovely your
          friends and family and have a great time. Food from local food
          trucksEnjoy your favorite dishe and a lovely your friends and family
          and have a great time.Enjoy your favorite dishe and a lovely your
          friends and family and have a great time. Food from local food trucks
          will be available for purchase.Enjoy your favorite dishe and a lovely
          your friends and family and have a great time. Food from local food
          trucks Enjoy your favorite dishe and a lovely your friends and family
          and have a great time. Food from local food trucks will be available
          for purchase.Enjoy your favorite dishe and a lovely your friends and
          family and have a great time. Food from local food trucksEnjoy your
          favorite dishe and a lovely your friends and family and have a great
          time.
        </p>
      </div>
    </div>
  );
}
