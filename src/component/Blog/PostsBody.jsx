import { useState } from "react";
import "../../style/Blog/PostsBody.css";
import PostBox from "./PostBox";
const PostsBody = (props) => {
  const [Boxes, SetBoxes] = useState(props);
  return (
    <div className="PostsBody">
      {Boxes.map((item, index) => {
        return <PostBox data={item} key={index}></PostBox>;
      })}
    </div>
  );
};
export default PostsBody;
