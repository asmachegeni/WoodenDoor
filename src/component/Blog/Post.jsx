import "../../style/Blog/Post.css";
import { BsTag } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
const Post = (props) => {
  return (
    <div className="Post">
      <span className="Title">{props.title}</span>
      <div className="Author">
        <span>نوشته شده توسط</span>
        <a href="#">{props.author}</a>
      </div>
      <img src={props.coveruri} className="Cover" />
      <div className="Content">{props.description}</div>
      <div className="Footer">
        <div className="Categories">
          <BsTag className="Tag"></BsTag>
          <span>دسته بندی :</span>
          <a href={props.categorieuri}>{props.categorie}</a>
        </div>
        <div className="SharenComment">
          <a href={props.uri}>
            <div className="Share">
              <FiShare2 className="Icon"></FiShare2>
              <span>اشتراک گذاری</span>
            </div>
          </a>

          <div className="CommentCount">
            <FaRegComment className="Icon"></FaRegComment>
            <span>
              {props.comment_number == 0 ? "بدون دیدگاه" : props.comment_number}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
