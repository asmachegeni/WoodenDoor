import React, { useState } from "react";
import "./../../style/Registers/Employee.css";
const Company = () => {
  const [faname, setfaname] = useState("");
  const [enname, setenname] = useState("");
  const [tel, settel] = useState("");
  const [nickname, setnickname] = useState("");
  const [website, setwebsite] = useState(true);
  const [number, setnumber] = useState("");
  const [bio, setbio] = useState("");
  const [logo, setLogo] = useState("");
  const [logotemp, setLogotemp] = useState("");

  return (
    <div className="Employee">
      <h1>اطلاعات شرکت</h1>
      <span>نام شرکت به فارسی </span>
      <input
        type="text"
        required
        onChange={(e) => {
          console.log(e.target.value);
          setfaname(e.target.value);
        }}
      />
      <span>نام شرکت به انگلیسی</span>
      <input
        type="text"
        required
        onChange={(e) => {
          console.log(e.target.value);
          setenname(e.target.value);
        }}
      />
      <span>شماره تلفن</span>
      <input
        type="tel"
        onChange={(e) => {
          console.log(e.target.value);
          settel(e.target.value);
        }}
      />
      <span>نلم مستعار شرکت</span>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setnickname(e.target.value);
        }}
      />
      <span>آدرس وبسایت شرکت</span>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setwebsite(e.target.value);
        }}
      />
      <span>تعداد کارمندان </span>
      <input
        type="number"
        onChange={(e) => {
          console.log(e.target.value);
          setnumber(e.target.value);
        }}
      />
      <span>فایل لوگوی شرکت</span>
      <label>
        <input
          type={"file"}
          onChange={(e) => {
            console.log(e);
            setLogo(e.target.value);
            let temp = e.target.value.split("\\");
            console.log(temp);
            setLogotemp(temp[temp.length - 1]);
          }}
          className="uploadfile"
        />
        {logo ? logotemp : "فایلی را انتخاب کنید"}
      </label>

      <span>جند جمله درباره شرکت</span>
      <textarea
        className="Employee-about"
        onChange={(e) => {
          console.log(e.target.value);
          setbio(e.target.value);
        }}
      ></textarea>
      <button className="EmpBtn">ثبت نام</button>
    </div>
  );
};
export default Company;
