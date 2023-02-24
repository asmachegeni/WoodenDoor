import React, { useState } from "react";
import AuthorPost from "./AuthorPost";
import { useLocation } from "react-router";
const AuthorPosts = () => {
  const Location = useLocation();
  const [posts, setPosts] = useState([
    { tilte: "برنامه نویسی", decription: "این یک پست آزمایشی است" },
  ]);
  return <div>{posts && posts.map((post) => <AuthorPost data={post} />)}</div>;
};
export default AuthorPosts;
