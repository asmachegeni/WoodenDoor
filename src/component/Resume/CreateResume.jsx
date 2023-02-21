import React from "react";
import { Link, Outlet } from "react-router-dom";
import BasicInformation from "./BasicInformation";
import EducationalRecords from "./EducationalRecords";
import WorkExperience from "./WorkExperience";
const CreateResume = () => {
  return (
    <div>
      <div>
        <Link to={"BasicInformation"}>اطلاعات اولیه</Link>
        <Link to={"EducationalRecords"}>سوابق تحصیلی</Link>
        <Link to={"WorkExperience"}>سوابق شغلی</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default CreateResume;
