import React from "react";
import { Link, Outlet } from "react-router-dom";
import CompeleteRegister from "./CompeleteRegister";
import Resumes from "./Resumes";
import CreatePost from "./CreatePost";
const EmployeePanel = () => {
  return (
    <div>
      <div>
        <Link to={"CompeleteRegister"}>ویرایش اطلاعات</Link>
        <Link to={"Resumes"}>رزومه های ارسال شده</Link>
        <Link to={"CreatePost"}>ایجاد پست</Link>
        <Link to={"/CreateResume"}>رزومه ساز</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default EmployeePanel;
