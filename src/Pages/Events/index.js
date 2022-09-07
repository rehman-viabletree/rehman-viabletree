import React from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.svg";
import dp from "../../assets/images/dp.png";
import down from "../../assets/images/Vector.png";
import create from "../../assets/images/create.png";
import kathy from "../../assets/images/kathy.png";
import jenny from "../../assets/images/jenny.png";
import esther from "../../assets/images/esther.png";
import guy from "../../assets/images/guy.png";
import brook from "../../assets/images/brook.png";
import detai from "../../assets/images/detail-dp.png";
import loc from "../../assets/images/Location.png";
import date from "../../assets/images/Date.svg";

import "./styles.css";
export default function Home() {
  return (
    <div className="main-cont">
      <div className="navbar-cont">
        <div className="logo-cont">
          <img src={logo} className="logo" />
        </div>
        <h3 className="title">My Events</h3>
      </div>
      <div className="area">
        <div className="side-nav">
          <div className="top">
            <div className="user">
              <img src={dp} className="dp" />
              <p>John Smith</p>
            </div>
            <Button className="bton spec">
              Create an Event <img src={create} />
            </Button>
          </div>
          <Button className="bton logout">Logout</Button>
        </div>
        <div className="content-area">
          <div className="first-sec">
            <div className="left-side">
              <h2>👋 Welcome, Ashley!</h2>
              <Button className="bton left">
                <img src={create} />
              </Button>
            </div>
            <Button className="bton dropdown">
              All Events
              <img src={down} className="icon" />
            </Button>
          </div>
          <div className="second-sec">
            <div className="left-sec">
              <div tabIndex={0} className="card-box">
                <div className="upper-sec">
                  <h2 className="card-title">
                    Launch Party
                    <br />
                    <p>2022 | 01 September | 01:00pm</p>
                  </h2>
                  <h2>20 invitees</h2>
                </div>
                <div className="lower-sec">
                  <div className="user-info">
                    <img src={kathy} />
                    <p className="user-name">
                      Host
                      <br />
                      <h2>Kathryn Murphy</h2>
                    </p>
                  </div>
                </div>
              </div>

              <div tabIndex={0} className="card-box">
                <div className="upper-sec">
                  <h2 className="card-title">
                    Movie Night
                    <br />
                    <p>Yet to decide</p>
                  </h2>
                  <h2>20 invitees</h2>
                </div>
                <div className="lower-sec">
                  <div className="user-info">
                    <img src={esther} />
                    <p className="user-name">
                      Host
                      <br />
                      <h2>Esther Howard</h2>
                    </p>
                  </div>
                  <Button className="bton-2" disabled>
                    Pending
                  </Button>
                </div>
              </div>
              <div tabIndex={0} className="card-box">
                <div className="upper-sec">
                  <h2 className="card-title">
                    Farmer Workshop
                    <br />
                    <p>Yet to decide</p>
                  </h2>
                  <h2>20 invitees</h2>
                </div>
                <div className="lower-sec">
                  <div className="user-info">
                    <img src={guy} />
                    <p className="user-name">
                      Host
                      <br />
                      <h2>Guy Hawkins</h2>
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                    }}
                  >
                    <Button className="bton-1" disabled>
                      Hosted by me
                    </Button>
                    <Button className="bton-2" disabled>
                      Pending
                    </Button>
                  </div>
                </div>
              </div>
              <div tabIndex={0} className="card-box">
                <div className="upper-sec">
                  <h2 className="card-title">
                    Hackathon
                    <br />
                    <p>2022 | 01 September | 01:00pm</p>
                  </h2>
                  <h2>20 invitees</h2>
                </div>
                <div className="lower-sec">
                  <div className="user-info">
                    <img src={jenny} />
                    <p className="user-name">
                      Host
                      <br />
                      <h2>Jenny Wilson</h2>
                    </p>
                  </div>
                  <Button className="bton-1" disabled>
                    Hosted by me
                  </Button>
                </div>
              </div>
              <div tabIndex={0} className="card-box">
                <div className="upper-sec">
                  <h2 className="card-title">
                    Sustainable Dev
                    <br />
                    <p>2022 | 01 September | 01:00pm</p>
                  </h2>
                  <h2>20 invitees</h2>
                </div>
                <div className="lower-sec">
                  <div className="user-info">
                    <img src={brook} />
                    <p className="user-name">
                      Host
                      <br />
                      <h2>Brooklyn Simmons</h2>
                    </p>
                  </div>
                </div>
              </div>
              <div tabIndex={0} className="card-box">
                <div className="upper-sec">
                  <h2 className="card-title">
                    Hackathon
                    <br />
                    <p>2022 | 01 September | 01:00pm</p>
                  </h2>
                  <h2>20 invitees</h2>
                </div>
                <div className="lower-sec">
                  <div className="user-info">
                    <img src={kathy} />
                    <p className="user-name">
                      Host
                      <br />
                      <h2>Jenny Wilson</h2>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-sec">
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
                    Enjoy your favorite dishe and a lovely your friends and
                    family and have a great time. Food from local food trucks
                    will be available for purchase.Enjoy your favorite dishe and
                    a lovely your friends and family and have a great time. Food
                    from local food trucks will be available for purchase.Enjoy
                    your favorite dishe and a lovely your friends and family and
                    have a great time. Food from local food trucks will be
                    available for purchase.Enjoy your favorite dishe and a
                    lovely your friends and family and have a great time. Food
                    from local food trucks will be available for purchase.Enjoy
                    your favorite dishe and a lovely your friends and family and
                    have a great time. Food from local food trucks Enjoy your
                    favorite dishe and a lovely your friends and family and have
                    a great time. Food from local food trucks will be available
                    for purchase.Enjoy your favorite dishe and a lovely your
                    friends and family and have a great time. Food from local
                    food trucksEnjoy your favorite dishe and a lovely your
                    friends and family and have a great time.Enjoy your favorite
                    dishe and a lovely your friends and family and have a great
                    time. Food from local food trucks will be available for
                    purchase.Enjoy your favorite dishe and a lovely your friends
                    and family and have a great time. Food from local food
                    trucks Enjoy your favorite dishe and a lovely your friends
                    and family and have a great time. Food from local food
                    trucks will be available for purchase.Enjoy your favorite
                    dishe and a lovely your friends and family and have a great
                    time. Food from local food trucksEnjoy your favorite dishe
                    and a lovely your friends and family and have a great time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
