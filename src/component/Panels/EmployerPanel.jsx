import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, NavLink } from "react-router-dom";
import "../../style/Panels/EmployerPanel.css";
const EmployerPanel = () => {
  const Location = useLocation();
  useEffect(() => {
    // console.log(Location.state);
  });
  return (
    <div className="EmployerPanel">
      <div className="LinksCol">
        <div className="LinksContainer">
          <NavLink to={"CompeleteRegister"}>ویرایش اطلاعات</NavLink>

          <NavLink
            to={"Companies"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            شرکت ها
          </NavLink>
          <NavLink to={"Company"} state={{ isStore: true }}>
            ثبت شرکت جدید
          </NavLink>
          <NavLink to={"JobAdCompany"}>آکهی ها</NavLink>
          <NavLink to={"ResumesEmployer"} className="Active">
            رزومه های ارسالی
          </NavLink>
          <NavLink to={"CreateJobAd"}>ایجاد آگهی جدید</NavLink>
          <NavLink to={"/AuthorPanel"}>ورود به پنل نویسنده</NavLink>
        </div>
      </div>
      <div className="ContentsCol">
        <Outlet />
      </div>
    </div>
  );
};
export default EmployerPanel;
