import { useState } from "react";
import "../../style/Blog/PostsBody.css";
import PostBox from "./PostBox";
const PostsBody = (props) => {
<<<<<<< HEAD
  const [Boxes, SetBoxes] = useState([
    {
      title: "ّرنامه نویسی",
      description: "این یک مقاله برنامه نویسی است",
      author: "نویسنده اش",
      comment_number: "2",
      created_at: "2023/2/4",
    },
  ]);
=======
  const [Boxes, SetBoxes] = useState(props.data);
>>>>>>> 16f49f7a200eea453ab2bed902c238b215eb2f2b
  return (
    <div className="PostsBody">
      {Boxes.map((item, index) => {
        return <PostBox data={item} key={index}></PostBox>;
      })}
    </div>
  );
};
export default PostsBody;
