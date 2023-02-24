import React from "react";
import { Link, Outlet } from "react-router-dom";
import CompeleteRegister from "./CompleteRegister";
import Resumes from "./Resumes";
import CreatePost from "./CreatePost";
import "../../style/Panels/EmployeePanel.css"
const EmployeePanel = () => {
  return (
    <div className="EmployeePanel">
      <div className="LinksCol">
        <div className="LinksContainer">
        <Link to={"CompeleteRegister"}>ویرایش اطلاعات</Link>
        <Link to={"Resumes"} className="Active">رزومه های ارسال شده</Link>
        <Link to={"CreatePost"}>ایجاد پست</Link>
        <Link to={"/CreateResume"}>رزومه ساز</Link>
        <Link to={""}>دریافت فایل رزومه</Link>
        </div>

      </div>
      <div className="ContentsCol">
        <Outlet />
      </div>
      
    </div>
  );
};
export default EmployeePanel;
