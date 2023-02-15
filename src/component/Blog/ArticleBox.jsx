import "../../style/Blog/ArticleBox.css";
import { FaRegComment } from "react-icons/fa";
const ArticleBox = (props) => {
  return (
    <div className="ArticleBox">
      <div className="Cover">
        <a href={props.uri}>
          <img src={props.cover_uri} />
        </a>
      </div>
      <div className="Content">
        <div className="Title">
          <a href={props.uri}>{props.title}</a>
        </div>

        <p className="Description">{props.description}</p>
        <div className="BtnContainer">
          <a href={props.uri} className="ReadMoreBtn">
            ادامه مطلب
          </a>
        </div>
        <span className="Author">
          نوشته شده توسط
          <a href="#">{props.author}</a>
        </span>
        <div className="Footer">
          <span className="Date">{props.created_at}</span>
          <div className="Comments">
            <FaRegComment className="CommenttIcon"></FaRegComment>
            <span className="CommentsCount">
              {props.comment_number == 0 ? "بدون دیدگاه" : props.comment_number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleBox;
