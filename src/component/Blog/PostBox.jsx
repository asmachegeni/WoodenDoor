import "../../style/Blog/PostBox.css";
import { FaRegComment } from "react-icons/fa";
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
            ادامه مطلب
          </a>
        </div>
        <span className="PostBox-Author">
          نوشته شده توسط
          <a href="#">{props.data.author}</a>
        </span>
        <div className="PostBox-Footer">
          <span className="PostBox-Date">{props.data.created_at}</span>
          <div className="PostBox-Comments">
            <FaRegComment className="PostBox-CommenttIcon"></FaRegComment>
            <span className="PostBox-CommentsCount">
              {props.data.comment_number == 0 ? "بدون دیدگاه" : props.data.comment_number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostBox;
