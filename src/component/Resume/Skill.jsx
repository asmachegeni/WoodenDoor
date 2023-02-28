import React, { useState } from "react";
import "../../style/Resume/Skill.css";
const Skill = () => {
  const [skills, setSkills] = useState(["برنامه نویسی", "طراحی ui/ux"]);
  return (
    <div className="SkillComponent">
      <div className="SkillsContainer">
        {skills &&
          skills.map((item, index) => {
            return <span className="Skill">{item}</span>;
          })}
      </div>

      <div className="SearchContainer">
        <span>عنوان مهارت</span>
        <div className="Search">
          <input type="text"/>
          <button>ذخیره</button>
        </div>
      </div>
<div className="CancellBtn">
        <button>انصراف</button>
</div>

    </div>
  );
};
export default Skill;
