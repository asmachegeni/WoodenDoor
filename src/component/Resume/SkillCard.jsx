import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
const SkillCard = () => {
  const [skills, setSkills] = useState([
    { title: "ّبرنامه نویسی", level: "متوسط" },
    ,
    { title: "طراحی ui/ux", level: "متوسط" },
  ]);
  return (
    <div>
      <span>مهارت های نرم افزاری</span>
      <div>
        {skills &&
          skills.map((item, index) => {
            return (
              <div>
                <span>{item.title}</span>
                <span>|</span>
                <span>{item.level}</span>
              </div>
            );
          })}
      </div>
      <div>
        <AiOutlinePlusCircle className="AddIcon" />
        <button>افزودن</button>
      </div>
    </div>
  );
};
export default SkillCard;
