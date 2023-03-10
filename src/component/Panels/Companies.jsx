import React, { useState, useEffect } from "react";
import CompanyView from "./CompnayView";
import "../../style/Panels/Companies.css";
import AxiosUrl from "../BaseUrl";
const Companies = () => {
  let [d, setD] = useState([]);
  const [isDel, setDel] = useState(0);
  useEffect(() => {
    // console.log(localStorage.getItem("token"));
    // console.log(localStorage.getItem("id"));
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
      AxiosUrl.get("/api/company", {
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          // console.log(res.data.data);
          // console.log(localStorage.getItem("id"));
          d = res.data.data.filter((item) => {
            // console.log("item ", item.employer_id);
            let tempId = localStorage.getItem("id");
            return item.employer_id == tempId;
          });

          setD(d);
          console.log(d);           
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [isDel]);
  const deleteCompany = (id) => {
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
      AxiosUrl.delete(`/api/company/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          if (res.status == 204) {
            setDel(isDel + 1);
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <div className="Companies">
      {d &&
        d.map((item, index) => {
          return (
            <CompanyView
              key={index}
              info={item}
              deleteCompany={deleteCompany}
            />
          );
        })}
    </div>
  );
};
export default Companies;
