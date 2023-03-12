
import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../../style/Panels/AuthorPost.css";
const AuthorPost = ({ data,deletePost }) => {
  const navigate=useNavigate();
  return (
   <div className="AuthorPost">
    {/* <div className="col1">
      <img src={data.src} />
</div> */}
<div className="col2">
  <div className="top">
    <span>{data.title}</span>
  </div>
        
      <div className="bottom">
        <div className="icons">
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
        </div>

      <Link to={"/AuthorPanel/CreatePost"} state={{ data, isEdit: true }}>
        مشاهده پست
      </Link>
      </div>
</div>


    </div>
  );
};
export default AuthorPost;