import "../../style/Blog/PostBox.css";
import { FaRegComment } from "react-icons/fa";
<<<<<<< HEAD
const PostBox = ({ data }) => {
  return (
    <div className="PostBox">
      <div className="Cover">
        <a href={data.uri}>
          <img src={data.cover_uri} />
        </a>
      </div>
      <div className="Content">
        <div className="Title">
          <a href={data.uri}>{data.title}</a>
        </div>

        <p className="Description">{data.description}</p>
        <div className="BtnContainer">
          <a href={data.uri} className="ReadMoreBtn">
=======
import { useState } from "react";
const PostBox = (props) => {
  return (
    <div className="PostBox">
      <div className="PostBox-Cover">
        <a href={props.data.uri}>
          <img src={props.data.coveruri} />
        </a>
      </div>
      <div className="PostBox-Content">
        <div className="PostBox-Title">
          <a href={props.data.uri}>{props.data.title}</a>
        </div>

        <p className="PostBox-Description">{props.data.description}</p>
        <div className="PostBox-BtnContainer">
          <a href={props.data.uri} className="PostBox-ReadMoreBtn">
>>>>>>> 16f49f7a200eea453ab2bed902c238b215eb2f2b
            ادامه مطلب
          </a>
        </div>
        <span className="PostBox-Author">
          نوشته شده توسط
<<<<<<< HEAD
          <a href="#">{data.author}</a>
        </span>
        <div className="Footer">
          <span className="Date">{data.created_at}</span>
          <div className="Comments">
            <FaRegComment className="CommenttIcon"></FaRegComment>
            <span className="CommentsCount">
              {data.comment_number == 0 ? "بدون دیدگاه" : data.comment_number}
=======
          <a href="#">{props.data.author}</a>
        </span>
        <div className="PostBox-Footer">
          <span className="PostBox-Date">{props.data.created_at}</span>
          <div className="PostBox-Comments">
            <FaRegComment className="PostBox-CommenttIcon"></FaRegComment>
            <span className="PostBox-CommentsCount">
              {props.data.comment_number == 0 ? "بدون دیدگاه" : props.data.comment_number}
>>>>>>> 16f49f7a200eea453ab2bed902c238b215eb2f2b
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostBox;
