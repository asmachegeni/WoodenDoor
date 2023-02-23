import "../../style/Blog/Comments.css";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import { CommentsTemp } from "../../assets/ExampleData.js";
const Comments = (props) => {
  const [CommentsData, SetCommentsData] = useState("");
  const array = [];
  useEffect(() => {
    CommentsTemp.map((item, index) => {
      CommentHandler(item, 1);
    });
    function CommentHandler(item, depth) {
      console.log(item);
      array.push(
        <div
          className={
            depth == 1 ? "Comments-Comment" : "Comments-Comment Replay" + depth
          }
        >
          <div className="Comments-CommentContainer">
            <div className="Comments-Col-1">
              <img src={item.avatar} className="Comments-Avatar" />
            </div>
            <div className="Comments-Col-2">
              <div className="Comments-CommentHead">
                <span className="Comments-UserNick">{item.nickname}</span>
                <span className="Comments-Date">{item.date}</span>
              </div>
              <p className="Comments-CommentText">{item.content}</p>
            </div>
          </div>
          <div className="Comments-CommentFoot">
            <div className="Comments-LikesContainer">
              <div className="Comments-LikesCount">
                <AiOutlineLike className="Comments-LikeIcon"></AiOutlineLike>
                <span>{item.likes}</span>
              </div>
              <div className="Comments-DisLikesCount">
                <span>{item.dislikes}</span>
                <AiOutlineDislike className="Comments-DisLikeIcon"></AiOutlineDislike>
              </div>
            </div>
            <button className="Comments-ReplayBtn">پاسخ</button>
          </div>
          {item.replays != ""
            ? item.replays.map((item, index) => {
                CommentHandler(item, depth + 1);
              })
            : ""}
        </div>
      );
    }
    SetCommentsData(array);
  }, []);
  return (
    <div className="Comments">
      <div className="Comments-Header">
        <span className="Comments-Title">دیدگاه ها</span>
        <span className="Comments-CommentsCount">12 دیدگاه</span>
      </div>

      {/* <div className="Comments-Comment">
        <div className="Comments-CommentContainer">
          <div className="Comments-Col-1">
            <img src="https://picsum.photos/100" className="Comments-Avatar" />
          </div>
          <div className="Comments-Col-2">
            <div className="Comments-CommentHead">
              <span className="Comments-UserNick">حامد وثوقی</span>
              <span className="Comments-Date">12:32 1400.9.12</span>
            </div>
            <p className="Comments-CommentText">سلام من عاشق این پست شما شدم واقعا.</p>
          </div>
        </div>
        <div className="Comments-CommentFoot">
          <div className="Comments-LikesContainer">
            <div className="Comments-LikesCount">
              <AiOutlineLike className="Comments-LikeIcon"></AiOutlineLike>
              <span>12</span>
            </div>
            <div className="Comments-DisLikesCount">
              <span>12</span>
              <AiOutlineDislike className="Comments-DisLikeIcon"></AiOutlineDislike>
            </div>
          </div>
          <button className="Comments-ReplayBtn">پاسخ</button>
        </div>
      </div> */}
      {CommentsData}
    </div>
  );
};
export default Comments;
