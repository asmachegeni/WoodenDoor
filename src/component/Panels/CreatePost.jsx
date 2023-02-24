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
  const [Cat, setCat] = useState([
    "همه",
    " اتاق گفتگو",
    " اخبار استخدامی",
    " استخدام بانک",
    " استخدام شهرها",
    " انتخاب مسیر شغلی",
    " جاب‌ویژن",
    " حقوق و دستمزد",
    " رزومه",
    " زندگی شغلی بهتر",
    " فریلنسر",
    " قانون کار",
    " کارفرمایان",
    " گزارش‌های آماری",
    "  مصاحبه شغلی",
    " معرفی شرکت ",
    " معرفی متخصصان منابع انسانی",
    " معرفی مشاغل",
    " نمایشگاه کار",
  ]);
  const [value, setValue] = useState("");
  return (
    <div>
      <span>تصویر شاخص</span>
      <input type={"file"} />
      <span>عنوان مطلب </span>
      <input type={"text"} />
      <span>دسته بندی</span>
      <select name="category">
        {Cat &&
          Cat.map((c, index) => (
            <option value={c} key={index}>
              {c}
            </option>
          ))}
      </select>
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
