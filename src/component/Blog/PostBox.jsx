import "../../style/Blog/PostBox.css";
import { FaRegComment } from "react-icons/fa";
const PostBox = ({ data }) => {
  return (
    <div className="PostBox">
      <div className="Cover">
        <a href={data.uri}>
          <img src={data.coveruri} />
        </a>
      </div>
      <div className="Content">
        <div className="Title">
          <a href={data.uri}>{data.title}</a>
        </div>

        <p className="Description">{data.description}</p>
        <div className="BtnContainer">
          <a href={data.uri} className="ReadMoreBtn">
            ادامه مطلب
          </a>
        </div>
        <span className="PostBox-Author">
          نوشته شده توسط
          <a href="#">{data.author}</a>
        </span>
        <div className="Footer">
          <span className="Date">{data.created_at}</span>
          <div className="Comments">
            <FaRegComment className="CommenttIcon"></FaRegComment>
            <span className="CommentsCount">
              {data.comment_number == 0 ? "بدون دیدگاه" : data.comment_number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostBox;
