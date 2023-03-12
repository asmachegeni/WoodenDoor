import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../style/Panels/CreatePost.css";
import AxiosUrl from "../BaseUrl";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const CreatePost = () => {
  const location = useLocation();
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
  const [content, setValue] = useState("");
  const [category, setCategory] = useState(0);
  const [titlePost, setTitlePost] = useState("");
  const [pic, setPic] = useState({});
  const [tempdata, setTemp] = useState({});
  useEffect(() => {
    if (location.state) {
      setValue(location.state.data.content);
      setTitlePost(location.state.data.title);
    }
  }, []);
  const StorePost = () => {
    console.log(titlePost, content);
    AxiosUrl.get("/sanctum/csrf-cookie", {
      headers: {
        credentials: "same-origin",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "X-Requested-With,Content-Type,X-Token-Auth,Authorization",
        "Access-Control-Allow-Methods": "*",
      },
    }).then(() => {
      AxiosUrl.post(
        "/api/post",
        { title: titlePost, content: content },
        {
          headers: {
            Accept: "application/json",
            "content-type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.status == 201) {
            alert("پست شما با موفقیت ذخیره شد");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  const updatePost = () => {
    console.log(location.state.data.id);
    AxiosUrl.get("/sanctum/csrf-cookie", {
      headers: {
        credentials: "same-origin",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "X-Requested-With,Content-Type,X-Token-Auth,Authorization",
        "Access-Control-Allow-Methods": "*",
      },
    }).then(() => {
      AxiosUrl.patch(
        `/api/post/${location.state.data.id}`,
        // { title: titlePost, content: content, category_id: category },
        tempdata,
        {
          headers: {
            Accept: "application/json",
            "content-type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <div className="CreatePost">
      <span>تصویر شاخص</span>
      <input
        type={"file"}
        onChange={(e) => {
          setPic(e.target.files[0]);
        }}
      />
      <span>عنوان مطلب </span>
      <input
        type={"text"}
        value={titlePost}
        onChange={(e) => {
          setTitlePost(e.target.value);
          let t = tempdata;
          t["title"] = e.target.value;
          setTemp(t);
          console.log(tempdata);
        }}
      />
      <span>دسته بندی</span>
      <select
        name="category"
        onChange={(e) => {
          setCategory(e.target.value);
          console.log(e.target.value);
          console.log(category);
        }}
      >
        {Cat &&
          Cat.map((c, index) => (
            <option value={index} key={index}>
              {c}
            </option>
          ))}
      </select>
      <div className="CreatePostContainer">
        <ReactQuill
          theme="snow"
          modules={m}
          formats={f}
          value={content}
          onChange={(a) => {
            setValue(a);
            console.log(content);
            let t = tempdata;
            t["content"] = a;
            setTemp(t);
            console.log(tempdata);
          }}
        ></ReactQuill>
        <button
          onClick={
            location.state && location.state.isEdit ? updatePost : StorePost
          }
          className={"btn123"}
        >
          ذخیره پست
        </button>
      </div>
    </div>
  );
};
export default CreatePost;
