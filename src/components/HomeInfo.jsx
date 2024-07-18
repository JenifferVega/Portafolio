import React from "react";
import { Link } from "react-router-dom";
import {arrow} from "../assets/icons"
 
const InfoBox = ({ text, link, bntText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {bntText}
            <img src={arrow} className="2-4 h-4 object-contain"/>
        </Link>
    </div>
)
const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Hello my name is <span className="font-semibold">Jeniffer</span> 👋
      <br/>
      I'm a Software engineer from Honduras
    </h1>
  ),
  2: (
        <InfoBox
        text={"Worked with companies and as a freelancer pickes up many skills"}
        link="/about"
        bntText="Learn more"/>
        
  ),
  3: (
    <InfoBox
    text={"Led multiple projects to success over the years."}
    link="/project"
    bntText="Visit my portfolio"/>
  ),
  4: (
    <InfoBox
        text={"Need a project done or looking for a dev?"}
        link="/contact"
        bntText="Lets talk" />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
