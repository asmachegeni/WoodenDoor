import React, { useState } from "react";
import "../../style/RegistersForm/Company.css";
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
      <span>نلم مستعار شرکت</span>
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
      <input
        type="number"
        onChange={(e) => {
          console.log(e.target.value);
          setnumber(e.target.value);
        }}
      />
      <span className="Warning">اشتباه است</span>
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
          className="UploadFile"
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
      <button className="EmpBtn">ثبت نام</button>
      </div>

    </div>
  );
};
export default Company;
