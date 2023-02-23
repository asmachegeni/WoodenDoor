import React, { useState } from "react";
import "./../../style/Registers/Employee.css";
import { Link, useLocation } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
const Employer = () => {
  const [months, setmonth] = useState([
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ]);
  const [days, setDays] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ]);
  const [years, setYears] = useState([
    "1370",
    "1371",
    "1372",
    "1373",
    "1374",
    "1375",
    "1376",
    "1377",
    "1378",
    "1379",
    "1380",
    "1381",
    "1382",
    "1383",
    "1384",
    "1385",
  ]);
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [tel, settel] = useState("");
  const [nickname, setnickname] = useState("");
  const [sex, setsex] = useState(true);
  const [Married, setMarried] = useState("");
  const [Birthday, setbirthday] = useState("");
  const [usercity, setusercity] = useState("");
  const [minsalary, setminsalary] = useState("");
  const [address, setaddress] = useState("");
  const [bio, setbio] = useState("");
  const [MilitaryStatus, setMilitaryStatu] = useState("");
  const Loaction = useLocation();
  return (
    <div className="Employee">
      <h1>ثبت نام‌ کارفرما</h1>
      <span>نام </span>
      <input
        type="text"
        required
        onChange={(e) => {
          console.log(e.target.value);
          setname(e.target.value);
        }}
      />
      <span>نام خانوادگی</span>
      <input
        type="text"
        required
        onChange={(e) => {
          console.log(e.target.value);
          setlastname(e.target.value);
        }}
      />
      {/* <span>شماره تلفن</span>
      <input
        type="tel"
        onChange={(e) => {
          console.log(e.target.value);
          settel(e.target.value);
        }}
      /> */}
      {/* <span>نام مستعار</span>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setnickname(e.target.value);
        }}
      /> */}
      <span>جنسیت</span>
      <select
        name="sex"
        onChange={(e) => {
          console.log(e.target.value);
          setsex(e.target.value);
        }}
      >
        <option value={"true"}>مرد</option>
        <option value={"false"}>زن</option>
      </select>
      <span>وضعیت تاهل</span>
      <select
        name="Married"
        onChange={(e) => {
          console.log(e.target.value);
          setMarried(e.target.value);
        }}
      >
        <option value={0}>مجرد</option>
        <option value={1}>متاهل</option>
      </select>
      <span>ناریخ تولد</span>
      <div className="date">
        <select name="day">
          {days &&
            days.map((day) => (
              <option value={day} key={day}>
                {day}
              </option>
            ))}
        </select>
        <select name="month">
          {months &&
            months.map((month, index) => (
              <option value={index + 1} key={index}>
                {month}
              </option>
            ))}
        </select>
        <select name="year">
          {years &&
            years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
        </select>
      </div>
      <span>جند جمله درباره خودتان</span>
      <textarea
        className="Employee-about"
        onChange={(e) => {
          console.log(e.target.value);
          setbio(e.target.value);
        }}
      ></textarea>
      <Link
        className="EmpBtn"
        to={"/Company"}
        state={{
          name: name,
          lastname: lastname,
          sex: sex,
          type: false,
          email: Loaction.state.email,
          password: Loaction.state.password,
        }}
      >
        ادامه
      </Link>
    </div>
  );
};
export default Employer;
