import React, { useState, useEffect } from "react";
import "../../style/RegistersForm/Company.css";
import AxiosUrl from "../BaseUrl";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
const Company = () => {
  const [faname, setfaname] = useState("");
  const [enname, setenname] = useState("");
  const [tel, settel] = useState("");
  const [nickname, setnickname] = useState("");
  const [website, setwebsite] = useState(true);
  const [number, setnumber] = useState(0);
  const [bio, setbio] = useState("");
  const [logo, setLogo] = useState("");
  const [logotemp, setLogotemp] = useState("");
  const Location = useLocation();
  const navigate = useNavigate();
  let user = Location.state.username;
  let mail = Location.state.email;
  let pass = Location.state.password;
  let first = Location.state.name;
  let t = Location.state.type;
  let last = Location.state.lastname;
  let se = Location.state.sex;

  useEffect(() => {
    console.log(Location.state.sex);
    console.log(typeof Location.state.email);
    console.log(Location.state);
  });
  const handleRgister = () => {
    console.log(
      faname,
      "----",
      enname,
      "----",
      logo,
      "----",
      tel,
      "----",
      website,
      "----",
      number,
      "----",
      bio,
      "----",
      nickname,
      "----",
      user,
      "----",
      pass,
      "----",
      mail,
      "----",
      first,
      "----",
      last,
      "----",
      se,
      "----------",
      t
    );
    let data = {};
    data["username"] = "asch";
    data["email"] = "a7193445@gmail.com";
    data["password"] = "123458847";
    data["first_name"] = "asma";
    data["last_name"] = "chegeni";
    data["sex"] = false;
    data["type"] = false;
    data["persian_name"] = "َزببب";
    data["english_name"] = "sfcfd";
    data["nick_name"] = "dd";
    console.log(data);
    AxiosUrl.get("/sanctum/csrf-cookie", {
      headers: {
        credentials: "same-origin",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":
          "X-Requested-With,Content-Type,X-Token-Auth,Authorization",
        "Access-Control-Allow-Methods": "*",
      },
    })
      .then(() => {
        AxiosUrl.post(
          "/api/sign-up",
          {
            username: user,
            email: mail,
            password: pass,
            first_name: first,
            type: t,
            last_name: last,
            sex: se,
            persian_name: faname,
            english_name: enname,
            // file: logo,
            tel: tel,
            website: website,
            number_of_staff: number,
            about_company: bio,
            nick_name: nickname,
          },

          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        )
          .then((res) => {
            if (res.status == 201) {
              console.log(res);
              navigate("/EmployerPanel");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Company">
      <div className="CompanyContainer">
        <h1 className="Title">اطلاعات شرکت</h1>
        <span>نام شرکت به فارسی </span>
        <input
          type="text"
          required
          onChange={(e) => {
            console.log(e.target.value);
            setfaname(e.target.value);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>نام شرکت به انگلیسی</span>
        <input
          type="text"
          required
          onChange={(e) => {
            console.log(e.target.value);
            setenname(e.target.value);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>شماره تلفن</span>
        <input
          type="tel"
          onChange={(e) => {
            console.log(e.target.value);
            settel(e.target.value);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>نام مستعار شرکت</span>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setnickname(e.target.value);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>آدرس وبسایت شرکت</span>
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setwebsite(e.target.value);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>تعداد کارمندان </span>
        <select
          onChange={(e) => {
            setnumber(e.target.value);
          }}
        >
          <option value={0}>زیر 10 نفر</option>
          <option value={1}>بین 10 تا 20 نفر</option>
          <option value={2}> بین 20 تا 50 نفر</option>
          <option value={3}> بین 50 تا 100 نفر</option>
          <option value={4}>بین 100 تا 500 نفر</option>
          <option value={5}> بیشتر از 500 نفر</option>
        </select>
        {/* <input
          type="number"
          onChange={(e) => {
            console.log(e.target.value);
            setnumber(String(e.target.value));
            console.log(typeof number);
          }}
        /> */}
        <span className="Warning">اشتباه است</span>
        <span>فایل لوگوی شرکت</span>
        <label>
          <input
            type={"file"}
            onChange={(e) => {
              console.log(e);
              setLogo(e.target.files);
              let temp = e.target.value.split("\\");
              console.log(temp);
              setLogotemp(temp[temp.length - 1]);
            }}
            className="UploadFile"
            name="file"
          />
          {logo ? logotemp : "فایلی را انتخاب کنید"}
        </label>
        <span className="Warning">اشتباه است</span>
        <span>جند جمله درباره شرکت</span>
        <textarea
          className="Employee-about"
          onChange={(e) => {
            console.log(e.target.value);
            setbio(e.target.value);
          }}
        ></textarea>
        <span className="Warning">اشتباه است</span>
        <button className="EmpBtn" onClick={handleRgister}>
          ثبت نام
        </button>
      </div>
    </div>
  );
};
export default Company;
