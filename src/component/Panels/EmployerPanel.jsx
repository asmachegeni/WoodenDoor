import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../style/Panels/EmployerPanel.css";
const EmployerPanel = () => {
  return (
    <div className="EmployerPanel">
      <div className="LinksCol">
        <div className="LinksContainer">
          <Link to={"CompeleteRegister"}>ویرایش اطلاعات</Link>
          <Link to={"Companies"}>شرکت ها</Link>
          <Link to={"Company"}>ثبت شرکت جدید</Link>
          <Link to={"JobAdCompany"}>آکهی ها</Link>
          <Link to={"ResumesEmployer"} className="Active">رزومه های ارسالی</Link>
          <Link to={"CreateJobAd"}>ایجاد آگهی جدید</Link>
          <Link to={"/AuthorPanel"}>ورود به پنل نویسنده</Link>
        </div>
      </div>
      <div className="ContentsCol">
        <Outlet />
      </div>
    </div>
  );
};
export default EmployerPanel;
