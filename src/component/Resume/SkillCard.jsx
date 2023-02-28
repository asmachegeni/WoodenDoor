import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../../style/Resume/SkillCard.css"
const SkillCard = () => {
  const [skills, setSkills] = useState([
    { title: "برنامه نویسی", level: "متوسط" },
    ,
    { title: "طراحی ui/ux", level: "متوسط" },
  ]);
  return (
    <div className="SkillCard">
      <span className="SkillCardTitle">مهارت های نرم افزاری</span>
      <div className="SkillsContainer">
        {skills &&
          skills.map((item, index) => {
            return (
              <div className="Skill">
                <span>{item.title}</span>
                <span>|</span>
                <span>{item.level}</span>
              </div>
            );
          })}
      </div>
      <div className="ButtonContainer">
        <AiOutlinePlusCircle className="AddIcon" />
        <button>افزودن</button>
      </div>
    </div>
  );
};
export default SkillCard;
