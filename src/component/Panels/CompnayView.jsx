import React, { useState, useEffect } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../../style/Panels/CompanyView.css";
import { Link, useNavigate } from "react-router-dom";
import AxiosUrl from "../BaseUrl";
const CompanyView = ({ info, deleteCompany }) => {
  const [data, setData] = useState(info);
  const navigate = useNavigate();
  // --------------------------------------------------------------------------------------------------------
  const showCompnay = () => {
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
      AxiosUrl.get(`/api/company/${data.id}`, {
        headers: {
          Accept: "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          console.log(res);
          let info = res.data;
          navigate("/Company", { state: { info, isEdit: true } });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  // --------------------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------------------
  return (
    <div className="CompanyView">
      <div className="Col1">
        <img
          src={`http://37.32.4.134/${data.logo_path}`}
          alt="logo"
          onClick={showCompnay}
        />
      </div>
      <div className="Col2">
        <span className="Title">{data.persian_name}</span>
        <span>{data.nick_name}</span>
        <div className="ButtonContainer">
          <FiEdit2
            className="EditIcon"
            onClick={() => {
              navigate("/Company", { state: { info, isEdit: true } });
            }}
          />
          <FiTrash2
            className="DeleteIcon"
            onClick={() => {
              deleteCompany(data.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default CompanyView;
