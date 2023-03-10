import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../style/Panels/AuthorPanel.css"
const AuthorPanel = () => {
  return (
    <div className="AuthorPanel">
      <div className="LinksCol">
        <div className="LinksContainer">
          <Link to={"CreatePost"}>ایجاد پست جدید</Link>
          <Link to={"AuthorPosts"} state={"save"}>
            پست های ذخیره شده
          </Link>
          <Link to={"AuthorPosts"} state={"publish"} className="Active">
            پست های انتشار داده شده
          </Link>
          <Link to={"AuthorPosts"} state={"like"}>
            پست هاب لایک شده
          </Link>
        </div>
      </div>
      <div className="ContentsCol">
        <Outlet />
      </div>
    </div>
  );
};
export default AuthorPanel;
