import React from "react";
import Card from "../Cards";
import DetailsCard from "../DetailCard";
import kathy from "../../assets/images/kathy.png";
import jenny from "../../assets/images/jenny.png";
import esther from "../../assets/images/esther.png";
import guy from "../../assets/images/guy.png";
import brook from "../../assets/images/brook.png";
import "./styles.css"
export default function ContentArea() {
    const cardDetails = [
        {
          title: "Launch Party",
          date: "2022 | 01 September | 01:00pm",
          invites: "20",
          img: kathy,
          role: "Host",
          username: "Kathryn Murphy",
        },
        {
          title: "Movie Night",
          date: "Yet to decide",
          invites: "20",
          img: esther,
          role: "Host",
          username: "Esther Howard",
          pending: true,
        },
        {
          title: "Farmer Workshop",
          date: "Yet to decide",
          invites: "20",
          img: guy,
          role: "Host",
          username: "Guy Hawkins",
          pending: true,
          hosted: true,
        },
        {
          title: "Hackathon",
          date: "2022 | 01 September | 01:00pm",
          invites: "20",
          img: jenny,
          role: "Host",
          username: "Jenny Wilson",
          hosted: true,
        },
        {
          title: "Sustainable Dev",
          date: "2022 | 01 September | 01:00pm",
          invites: "20",
          img: brook,
          role: "Host",
          username: "Brooklyn Simmons",
        },
        {
          title: "Hackathon",
          date: "2022 | 01 September | 01:00pm",
          invites: "20",
          img: kathy,
          role: "Host",
          username: "Jenny Wilson",
        },
      ];
  return (
    <div className="second-sec">
      <div className="left-sec">
        {cardDetails.map((item) => (
          <Card props={item} />
        ))}
      </div>
      <div className="right-sec">
        <DetailsCard />
      </div>
    </div>
  );
}
