import React, { useState } from "react";
import SkillCard from "./SkillCard";
import Skill from "./Skill";
import Software from "./Software";
import Language from "./Language";
import "../../style/Resume/AdditionalSkills.css";
const AdditionalSkills = () => {
  return (
    <div className="AdditionalSkills">
      <span className="Title">مهارت‌های تکمیلی</span>
      <span className="Description">
        وارد آخرین مرحله شده‌اید. با تکمیل این مرحله، رزومه شما تکمیل می‌شود و
        می‌توانید برای فرصت‌های شغلی رزومه ارسال کنید.
      </span>
      <Language />
      <SkillCard />
    </div>
  );
};
export default AdditionalSkills;
