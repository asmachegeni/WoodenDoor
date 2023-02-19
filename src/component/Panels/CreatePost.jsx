import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [f, setf] = useState([
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ]);
  const [m, setm] = useState({
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  });
  const [value, setValue] = useState("");
  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={m}
        formats={f}
        value={value}
        onChange={(a) => {
          setValue(a);
          console.log(a);
        }}
      ></ReactQuill>
    </div>
  );
};
export default CreatePost;
