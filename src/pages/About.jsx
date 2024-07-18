import React from "react";
import { skills, experiences } from "../constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="bg-purple-gradient text-transparent bg-clip-text font-semibold drop-shadow">
          Jeniffer
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>
        I'm an aspiring front-end developer skilled in React, React Native, and
        Vite, with foundational knowledge in backend technologies like Node.js,
        Django, and PHP. Experienced in developing for both web and mobile
        platforms, I am also exploring interactive 3D website design to enhance
        user engagement. I combine my understanding of databases such as MongoDB
        and MySQL with a commitment to continuous learning, aiming to stay ahead
        of industry trends. My goal is to fuse front-end creativity with backend
        functionality to deliver streamlined and effective applications.
      </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div
                className="btn-front rounded-xl flex justify-center
              items-center"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h/12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked in companies and as a freelancer Developing solutions in
            web and Mobile devices. leveling up my skills and teaming up with
            smart people. Here's the rundown:
          </p>
          <div className="mt-12 flex ">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement 
                key={experience.company_name}
                date={experience.date}
                icon={<div className="flex justify-center items-center
                w-full h-full">
                  <img 
                  src={experience.icon} 
                  alt={experience.company_name}
                  className="w-[60%] h-[60%] object-contain"/>
                </div>}
                  iconStyle={{background: experience.iconBg}}


                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
                  >
                  <div>
                    <h3
                      className="text-black text-xl font-poppins
                  font-semibold"
                    >
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map(( point, index) => (
                        <li 
                        key={`experience-point${index}`} 
                        className="teext-black-500/50 font-normal pl-1
                        text-sm">
                          {point}
                        </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>

      <hr className="border-slate-200"/>
      <CTA/>
    </section>
  );
};

export default About;
