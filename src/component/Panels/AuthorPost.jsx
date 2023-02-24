import React from "react";
import { Link } from "react-router-dom";
const AuthorPost = ({ data }) => {
  return (
    <div>
      <img src={data.src} />
      <span>{data.tilte}</span>
      <p>{data.decription}</p>
      <Link to={""}>مشاهده پست</Link>
    </div>
  );
};
export default AuthorPost;
