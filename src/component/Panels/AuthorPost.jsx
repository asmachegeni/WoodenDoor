import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
const AuthorPost = ({ data,deletePost }) => {
  const navigate=useNavigate();
  return (
    <div>
      <img src={data.src} />
      <span>{data.title}</span>
      <FiEdit2
        className="EditIcon"
        onClick={() => {
          navigate("/AuthorPanel/CreatePost", {
            state: { data, isEdit: true },
          });
        }}
      />
      <FiTrash2
        className="DeleteIcon"
        onClick={() => {
          deletePost(data.id);
        }}
      />
      <Link to={"/AuthorPanel/CreatePost"} state={{ data, isEdit: true }}>
        مشاهده پست
      </Link>
    </div>
  );
};
export default AuthorPost;
