import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BasicInformation from "./BasicInformation";
import EducationalRecords from "./EducationalRecords";
import WorkExperience from "./WorkExperience";
import "../../style/Resume/CreateResume.css";
const CreateResume = () => {
  return (
    <div className="CreateResume">
      <div className="LinksCol">
        <div className="LinksContainer">
          <NavLink to={"BasicInformation"} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }>
            <span className="Title">اطلاعات اولیه</span>
            <span>شامل نام و نام خانوادگی، سن، شهر و ...</span>
          </NavLink>
          <NavLink to={"EducationalRecords"} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }>
            <span className="Title">سوابق تحصیلی</span>
            <span>تحصیلات، سال تحصیل و ...</span>
          </NavLink>
          <NavLink to={"WorkExperience"} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }>
            <span className="Title">سوابق شغلی</span>
            <span>نام شرکت ها، تاریخ اشتغال و ...</span>
          </NavLink>
          <NavLink to={"AdditionalSkills"} className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }>
            <span className="Title">مهارت های تکمیلی </span>
            <span> شامل زبان ها، نرم افزارها...</span>
          </NavLink>
        </div>
      </div>
      <div className="ContentsCol">
        <Outlet />
      </div>
    </div>
  );
};
export default CreateResume;
