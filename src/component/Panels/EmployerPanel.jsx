import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const EmployerPanel = () => {
  return (
    <div>
      <div>
        <Link to={"CompeleteRegister"}>ویرایش اطلاعات</Link>
        <Link to={"Companies"}>شرکت ها</Link>
        <Link to={"Company"}>ثبت شرکت جدید</Link>
        <Link to={"JobAdCompany"}>آکهی ها</Link>
        <Link to={"ResumesEmployer"}>رزومه های ارسالی</Link>
        <Link to={"CreateJobAd"}>ایجاد آگهی جدید</Link>
        <Link to={"/AuthorPanel"}>ورود به پنل نویسنده</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default EmployerPanel;
