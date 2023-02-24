import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const AuthorPanel = () => {
  return (
    <div>
      <div>
        <Link to={"CreatePost"}>ایجاد پست جدید</Link>
        <Link to={"AuthorPosts"} state={"save"}>
          پست های ذخیره شده
        </Link>
        <Link to={"AuthorPosts"} state={"publish"}>
          پست های انتشار داده شده
        </Link>
        <Link to={"AuthorPosts"} state={"like"}>
          پست هاب لایک شده
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default AuthorPanel;
