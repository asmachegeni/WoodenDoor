import React, { useState } from "react";
import SlideBox from "./SlideBox";
import Header from "../Header";
import Footer from "../Footer";
import SearchBox from "./SearchBox";
import Posts from "./Posts";
import ResumeLink from "./ResumeLink";
import TopCategories from "./TopCategories";
import PostPage from "./PostPage";
import "./../../style/Blog/Blog.css";
const Blog = ({ setType, userType }) => {
  return (
    <div className="BlogContainer">
      <Header setType={setType} userType={userType} />
      <SlideBox />
      <SearchBox />
      <Posts />
      <TopCategories />
      <ResumeLink />
      <Footer />
      {/* <PostPage /> */}
    </div>
  );
};
export default Blog;
