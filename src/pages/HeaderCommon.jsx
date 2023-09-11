import React from "react";
import HeaderCommonBG from "../assests/header-bg.png";
import calender from "../assests/78f5f7ff2e2e338d72cdaf158205ac8d.png";
import "../styles/HeaderCommon.css";

function HeaderCommon({ title }) {
  const currentDate = new Date();
  const dateTimeString = currentDate.toLocaleString();
  return (
    <div className="HeaderCommon">
      <div className="Header-container">
        <div
          className="HeaderBackground"
          style={{
            backgroundImage: `url(${HeaderCommonBG})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="header-content">
            <h2 className="heading">{title}</h2>
            <div className="date-time">
              <div className="date">
                <img className="time" src={calender} alt="calender" />
              </div>
              <p className="calendar">{dateTimeString}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCommon;
