import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../style/Panels/AuthorPanel.css";
const AuthorPanel = () => {
  return (
    <div className="AuthorPanel">
      <div className="LinksCol">
        <div className="LinksContainer">
          <NavLink
            to={"CreatePost"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }
          >
            ایجاد پست جدید
          </NavLink>
          {/* <NavLink
            to={"AuthorPosts"}
            state={"save"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }
          >
            پست های ذخیره شده
          </NavLink> */}
          <NavLink
            to={"AuthorPosts"}
            state={"publish"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }
          >
            پست های انتشار داده شده
          </NavLink>
          {/* <NavLink
            to={"AuthorPosts"}
            state={"like"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "Active" : ""
            }
          >
            پست های لایک شده
          </NavLink> */}
        </div>
      </div>
      <div className="ContentsCol">
        <Outlet />
      </div>
    </div>
  );
};
export default AuthorPanel;
