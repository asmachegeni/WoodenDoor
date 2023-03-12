import React, { useEffect, useState } from "react";
import AuthorPost from "./AuthorPost";
import { useLocation } from "react-router";
import AxiosUrl from "../BaseUrl";
import "../../style/Panels/AuthorPosts.css";
const AuthorPosts = () => {
  let [posts, setPosts] = useState([]);
  const [isDel, setDel] = useState(0);
  useEffect(() => {
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
      AxiosUrl.get("/api/post", {
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          console.log(res.data.data);
          // console.log(localStorage.getItem("id"));
          posts = res.data.data.filter((item) => {
            // console.log("item ", item.employer_id);
            let tempId = localStorage.getItem("id");
            return item.author_id == tempId;
          });

          setPosts(posts);
          console.log(posts);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [isDel]);
  const deletePost = (id) => {
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
      AxiosUrl.delete(`/api/post/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.status == 204) {
            setDel(isDel + 1);
            alert("پست شما با موفقیت حذف شد");
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <div className="AuthorPosts">
      {posts &&
        posts.map((post, index) => (
          <AuthorPost data={post} key={index} deletePost={deletePost} />
        ))}
    </div>
  );
};
export default AuthorPosts;
