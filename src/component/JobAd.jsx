import React, { useState } from "react";
import {BsFillStarFill} from "react-icons/bs"
import "./../style/JobAd.css";
import logo from "./../assets/img/temp.jpg"
const JobAd = ({
  JobAd = {
    titleJob: "کارشناس آی تی",
    name: "ودن در",
    location: "همدان",
    type: "دور کاری",
    date: "امروز",
    salay: "بین 12 تا16 میلیون",
    score:"4.1"
  },
}) => {
  return (
    <div className="JobAd">
      <div className="JobAdHeader">
        <div className="JobAdContainer0">
          <img alt="Company Logo" src={logo} className="JobAdLogo" />
          <div className="JobAdContainer1">
            <BsFillStarFill className="Staricon"/>
            <span className="JobAdScore">{JobAd.score}</span>
          </div>
        </div>
        <div className="DetailContiner">
          <span className="JobAdTiltle">{JobAd.titleJob}</span>
          <span className="JobAdName">{JobAd.name}</span>
          <div className="JobAdContainer">
            <span className="JobAdLocation">{JobAd.location}</span>
            <span className="pipe">|</span>
            <span className="JobAdSalary">{JobAd.salay}</span>
          </div>
          <span className="JobAdType">{JobAd.type}</span>
        </div>
      </div>
      <div className="JobAdFooter">
        <span className="JobAdDate">{JobAd.date}</span>
        <div className="JobAdBtnContainer">
          <button className="JobAdBtn" onClick={()=>{console.log("click")}}>ارسال رزومه</button>
        </div>
      </div>
    </div>
  );
};
export default JobAd;
