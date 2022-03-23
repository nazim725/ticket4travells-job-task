import React from "react";
import img1 from "../../images/Group 52.png";
import img2 from "../../images/Group 51.png";
import "./Home.css";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div className="home d-flex">
      <div
        className="home-1st-part"
        style={{ backgroundColor: "black", width: "60%", height: "650px" }}
      >
        <img className="img1" src={img2} alt="" />
        <img className="img2" src={img1} alt="" />
      </div>
      <div
        style={{ backgroundColor: "#FFFFFF", width: "40%", height: "650px" }}
      ></div>
      <div className="login-part">
        <Login></Login>
      </div>
    </div>
  );
};

export default Home;
