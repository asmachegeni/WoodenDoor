import "../../style/Blog/Post.css";
import { BsTag } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
const Post = (props) => {
  return (
    <div className="Post">
      <span className="Post-Title">{props.title}</span>
      <div className="Post-Author">
        <span>نوشته شده توسط</span>
        <a href="#">{props.author}</a>
      </div>
      <img src={props.coveruri} className="Post-Cover" />
      <div className="Post-Content">{props.description}</div>
      <div className="Post-Footer">
        <div className="Post-Categories">
          <BsTag className="Post-Tag"></BsTag>
          <span>دسته بندی :</span>
          <a href={props.categorieuri}>{props.categorie}</a>
        </div>
        <div className="Post-SharenComment">
          <a href={props.uri}>
            <div className="Post-Share">
              <FiShare2 className="Icon"></FiShare2>
              <span>اشتراک گذاری</span>
            </div>
          </a>

          <div className="Post-CommentCount">
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
