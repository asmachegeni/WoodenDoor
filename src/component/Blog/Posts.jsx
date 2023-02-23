import "../../style/Blog/Posts.css";
import { PostsData } from "../../assets/ExampleData.js";
import PostsBody from "./PostsBody";
import TopCategories from "./TopCategories";
import Categories from "./Categories";
import { useState, useEffect } from "react";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";

const Posts = (props) => {
  const [PageCount, SetPageCount] = useState(10);
  const [Pages, SetPages] = useState([]);
  useEffect(() => {
    const array = [];
    for (let i = 1; i <= PageCount; i++) {
      array.push(
        <a href={`/Page/${i}`} className="Posts-PageBtn">
          {i}
        </a>
      );
    }
    SetPages(array);
  }, []);

  return (
    <>
      <div className="Posts">
        <div className="Posts-Container">
          <PostsBody data={PostsData}></PostsBody>
          <Categories></Categories>
        </div>
        <div className="Posts-Pagination">{Pages}</div>
      </div>
    </>
  );
};
export default Posts;
