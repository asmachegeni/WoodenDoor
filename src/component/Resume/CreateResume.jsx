import React from "react";
import { Link, Outlet } from "react-router-dom";
import BasicInformation from "./BasicInformation";
import EducationalRecords from "./EducationalRecords";
import WorkExperience from "./WorkExperience";
import "../../style/Resume/CreateResume.css";
const CreateResume = () => {
  return (
    <div className="CreateResume">
      <div className="LinksCol">
        <div className="LinksContainer">
                  <Link to={"BasicInformation"}>
          <span className="Title">اطلاعات اولیه</span>
          <span>شامل نام و نام خانوادگی، سن، شهر و ...</span>
        </Link>
        <Link to={"EducationalRecords"}>
          <span className="Title">سوابق تحصیلی</span>
          <span>تحصیلات، سال تحصیل و ...</span>
        </Link>
        <Link to={"WorkExperience"} className="Active">
          <span className="Title">سوابق شغلی</span>
          <span>نام شرکت ها، تاریخ اشتغال و ...</span>
        </Link>
        <Link to={"AdditionalSkills"} className="Active">
          <span className="Title">مهارت های تکمیلی </span>
          <span>   شامل زبان ها، نرم افزارها...</span>
        </Link>
        </div>

      </div>
      <div className="ContentsCol">
        <Outlet />
      </div>
    </div>
  );
};
export default CreateResume;
