import React from "react";
import PostsBody from "./PostsBody";
import Categories from "./Categories";
import "../../style/Blog/Posts.css"
import {PostsData} from "../../assets/ExampleData"
const Posts = () => {
  return (
    <div className="Posts">
      <div className="Posts-Container">
        <PostsBody />
              <Categories />
      
      </div>
<div className="Posts-Pagination">
  <button className="Posts-PageBtn">
    1
  </button>
  <button className="Posts-PageBtn">
    2
  </button>
  <button className="Posts-PageBtn">
    3
  </button>
  <button className="Posts-PageBtn Current">
    4
  </button>
  <button className="Posts-PageBtn">
    5
  </button>
</div>
    </div>
  );
};
export default Posts;
