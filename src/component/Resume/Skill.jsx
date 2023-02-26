import React, { useState } from "react";
const Skill = () => {
  const [skills, setSkills] = useState(["ّبرنامه نویسی", "طراحی ui/ux"]);
  return (
    <div>
      <div>
        {skills &&
          skills.map((item, index) => {
            return <span>{item}</span>;
          })}
      </div>
      <span>عنوان مهارت</span>
      <input type={"textّ"} />
      <button>انصراف</button>
      <button>ذخیره</button>
    </div>
  );
};
export default Skill;
