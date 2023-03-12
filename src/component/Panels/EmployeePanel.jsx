import React from "react";
import {  NavLink, Outlet } from "react-router-dom";
import CompeleteRegister from "./CompleteRegister";
import Resumes from "./Resumes";
import CreatePost from "./CreatePost";
import "../../style/Panels/EmployeePanel.css"
const EmployeePanel = () => {
  return (
    <div className="EmployeePanel">
      <div className="LinksCol">
        <div className="LinksContainer">
        <NavLink
            to={"CompeleteRegister"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }
          >
          ویرایش اطلاعات
          </NavLink>
          <NavLink
            to={"Resumes"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }
          >
          رزومه های ارسال شده
          </NavLink><NavLink
            to={"CreatePost"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }
          >
          ایجاد پست
          </NavLink><NavLink
            to={"/CreateResume"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }
          >
    رزومه ساز
          </NavLink>
          {/* <NavLink
            to={"/CreateResume"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }
          >
          دریافت فایل رزومه
          </NavLink> */}
        
        
        </div>

      </div>
      <div className="ContentsCol">
        <Outlet />
      </div>
      
    </div>
  );
};
export default EmployeePanel;
