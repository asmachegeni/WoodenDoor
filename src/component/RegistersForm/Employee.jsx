import React, { useState } from "react";
import "../../style/RegistersForm/Employee.css";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosUrl from "../BaseUrl";
const Employee = () => {
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
  const [cities, setCities] = useState([
    [
      "آذرشهر",
      "اسکو",
      "اهر",
      "بستان‌آباد",
      "بناب",
      "تبریز",
      "جلفا",
      "چاراویماق",
      "سراب",
      "شبستر",
      "مراغه",
    ],
    [
      "ارومیه",
      "اشنویه",
      "بوکان",
      "پیرانشهر",
      "تکاب",
      "چالدران",
      "خوی",
      "سردشت",
      "سلماس",
      "شاهین‌دژ",
      "ماکو",
      "مهاباد",
      "میاندوآب",
      "نقده",
    ],
    [
      "اردبیل",
      "بیله‌سوار",
      "پارس‌آباد",
      "خلخال",
      "کوثر",
      "گِرمی",
      "مِشگین‌شهر",
      "نَمین",
      "نیر",
    ],
    [
      "آران و بیدگل",
      "اردستان",
      "اصفهان",
      "برخوار و میمه",
      "تیران و کرون",
      "چادگان",
      "خمینی‌شهر",
      "خوانسار",
      "سمیرم",
      "شهرضا",
      "سمیرم سفلی",
      "فریدن",
      "فریدون‌شهر",
      "فلاورجان",
      "کاشان",
      "گلپایگان",
      "لنجان",
      "مبارکه",
      "نائین",
      "نجف‌آباد",
      "نطنز",
    ],
    [
      "آبدانان",
      "ایلام",
      "ایوان",
      "دره‌شهر",
      "دهلران",
      "شیروان و چرداول",
      "مهران",
    ],
    [
      "بوشهر",
      "تنگستان",
      "جم",
      "دشتستان",
      "دشتی",
      "دیر",
      "دیلم",
      "کنگان",
      "گناوه",
    ],
    [
      "اسلام‌شهر",
      "پاکدشت",
      "تهران",
      "دماوند",
      "رباط‌کریم",
      "ری",
      "ساوجبلاغ",
      "شمیرانات",
      "شهریار",
      "فیروزکوه",
      "ورامین",
    ],
    ["اردل", "بروجن", "شهرکرد", "فارسان", "کوهرنگ", "لردگان"],
    ["بیرجند", "درمیان", "سرایان", "سربیشه", "فردوس", "قائنات", "نهبندان"],
    [
      "بردسکن",
      "تایباد",
      "تربت جام",
      "تربت حیدریه",
      "چناران",
      "خلیل‌آباد",
      "خواف",
      "درگز",
      "رشتخوار",
      "سبزوار",
      "سرخس",
      "فریمان",
      "قوچان",
      "کاشمر",
      "کلات",
      "گناباد",
      "مشهد",
      "مه ولات",
      "نیشابور",
    ],
    ["اسفراین", "بجنورد", "جاجرم", "شیروان", "فاروج", "مانه و سملقان"],
    [
      "آبادان",
      "امیدیه",
      "اندیمشک",
      "اهواز",
      "ایذه",
      "باغ‌ملک",
      "بندر ماهشهر",
      "بهبهان",
      "خرمشهر",
      "دزفول",
      "دشت آزادگان",
      "رامشیر",
      "رامهرمز",
      "شادگان",
      "شوش",
      "شوشتر",
    ],
    ["ابهر", "ایجرود", "خدابنده", "خرمدره", "زنجان", "طارم", "ماه‌نشان"],
    ["دامغان", "سمنان", "شاهرود", "گرمسار", "مهدی‌شهر"],
    [
      "ایرانشهر",
      "چابهار",
      "خاش",
      "دلگان",
      "زابل",
      "زاهدان",
      "زهک",
      "سراوان",
      "سرباز",
      "کنارک",
      "نیک‌شهر",
    ],
    [
      "آباده",
      "ارسنجان",
      "استهبان",
      "اقلید",
      "بوانات",
      "پاسارگاد",
      "جهرم",
      "خرم‌بید",
      "خنج",
      "داراب",
      "زرین‌دشت",
      "سپیدان",
      "شیراز",
      "فراشبند",
      "فسا",
      "فیروزآباد",
      "قیر و کارزین",
      "کازرون",
      "لارستان",
      "لامِرد",
      "مرودشت",
      "ممسنی",
      "مهر",
      "نی‌ریز",
    ],
    ["آبیک", "البرز", "بوئین‌زهرا", "تاکستان", "قزوین"],
    ["قم"],
    [
      "بانه",
      "بیجار",
      "دیواندره",
      "سروآباد",
      "سقز",
      "سنندج",
      "قروه",
      "کامیاران",
      "مریوان",
    ],
    [
      "بافت",
      "بردسیر",
      "بم",
      "جیرفت",
      "راور",
      "رفسنجان",
      "رودبار جنوب",
      "زرند",
      "سیرجان",
      "شهر بابک",
      "عنبرآباد",
      "قلعه گنج",
      "کرمان",
      "کوهبنان",
      "کهنوج",
      "منوجان",
    ],
    [
      "اسلام‌آباد غرب",
      "پاوه",
      "ثلاث باباجانی",
      "جوانرود",
      "دالاهو",
      "روانسر",
      "سرپل ذهاب",
      "سنقر",
      "صحنه",
      "قصر شیرین",
      "کرمانشاه",
      "کنگاور",
      "گیلان غرب",
      "هرسین",
    ],
    ["بویراحمد", "بهمئی", "دنا", "کهگیلویه", "گچساران"],
    [
      "آزادشهر",
      "آق‌قلا",
      "بندر گز",
      "ترکمن",
      "رامیان",
      "علی‌آباد",
      "کردکوی",
      "کلاله",
      "گرگان",
      "گنبد کاووس",
      "مراوه‌تپه",
      "مینودشت",
    ],
    [
      "آستارا",
      "آستانه اشرفیه",
      "اَملَش",
      "بندر انزلی",
      "رشت",
      "رضوانشهر",
      "رودبار",
      "رودسر",
      "سیاهکل",
      "شَفت",
      "صومعه‌سرا",
      "طوالش",
      "فومَن",
      "لاهیجان",
      "لنگرود",
      "ماسال",
    ],
    [
      "ازنا",
      "الیگودرز",
      "بروجرد",
      "پل‌دختر",
      "خرم‌آباد",
      "دورود",
      "دلفان",
      "سلسله ,کوهدشت",
    ],
    [
      "آمل",
      "بابل",
      "بابلسر",
      "بهشهر",
      "تنکابن",
      "جویبار",
      "چالوس",
      "رامسر",
      "ساری",
      "سوادکوه",
      "قائم‌شهر",
      "گلوگاه",
      "محمودآباد",
      "نکا",
      "نور",
      "نوشهر",
    ],
    [
      "آشتیان",
      "اراک",
      "تفرش",
      "خمین",
      "دلیجان",
      "زرندیه",
      "ساوه",
      "شازند",
      "کمیجان",
      "محلات",
    ],
    [
      "ابوموسی",
      "بستک",
      "بندر عباس",
      "بندر لنگه",
      "جاسک",
      "حاجی‌آباد",
      "شهرستان خمیر",
      "رودان",
      "قشم",
      "گاوبندی",
      "میناب",
    ],
    [
      "اسدآباد",
      "بهار",
      "تویسرکان",
      "رزن",
      "کبودرآهنگ",
      "ملایر",
      "نهاوند",
      "همدان",
    ],
    [
      "ابرکوه",
      "اردکان",
      "بافق",
      "تفت",
      "خاتم",
      "صدوق",
      "طبس",
      "مهریز",
      "مِیبُد",
      "یزد",
    ],
    ["کرج", "نظرآباد", "فردیس", "اشتهارد", "هشتگرد", "طالقان"],
  ]);
  const [provinces, setProvinces] = useState([
    "آذربایجان شرقی",
    "آذربایجان غربی",
    "اردبیل",
    "اصفهان",
    "ایلام",
    "بوشهر",
    "تهران",
    "چهار محال وبختیاری",
    "خراسان جنوبی",
    "خراسان رضوی",
    "خراسان شمالی",
    "خوزستان",
    "زنجان",
    "سمنان",
    "سیستان وبلوچستان",
    "فارس",
    "قزوین",
    "قم",
    "کردستان",
    "کرمان",
    "کرمانشاه",
    "کهگیلویه و بویر احمد",
    "گلستان",
    "گیلان",
    "لرستان",
    "مازندران",
    "مرکزی",
    "هرمزگان",
    "همدان",
    "یزد",
    "البرز",
  ]);
  const [nowCity, setNowCity] = useState(cities[0]);
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [sex, setsex] = useState("MALE");
  const [usercity, setusercity] = useState(cities[0][0]);
  const [minsalary, setminsalary] = useState("");
  const [address, setaddress] = useState("");
  const [bio, setbio] = useState("");
  const [MilitaryStatus, setMilitaryStatus] = useState(0);
  const Location = useLocation();
  const navigate = useNavigate();
  let usern = Location.state.username;
  let mail = Location.state.email;
  let pass = Location.state.password;
  let t = Location.state.type;
  const handleRegister = () => {
    console.log(
      usern,
      mail,
      pass,
      t,
      name,
      lastname,
      sex
      // usercity,
      // address,
      // minsalary,
      // MilitaryStatus
    );

    AxiosUrl.defaults.withCredentials = true;
    AxiosUrl.get("/sanctum/csrf-cookie", {
      headers: {
        credentials: "same-origin",
      },
    }).then((res) => {
      AxiosUrl.post(
        "/api/sign-up",
        {
          username: usern,
          email: mail,
          password: pass,
          type: t,
          first_name: name,
          last_name: lastname,
          sex: sex,
          province: usercity,
          address: address,
          min_salary: minsalary,
          military_status: MilitaryStatus,
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
            navigate("/EmployeePanel");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <div className="Employee">
      <div className="EmployeeContainer">
        <h1 className="Title">ثبت نام کارجو</h1>
        <span>نام </span>
        <input
          className="Employee-name"
          type="text"
          required
          onChange={(e) => {
            console.log(e.target.value);
            setname(e.target.value);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>نام خانوادگی</span>
        <input
          className="Employee-lastname"
          type="text"
          required
          onChange={(e) => {
            console.log(e.target.value);
            setlastname(e.target.value);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span className="Warning">اشتباه است</span>
        <span className="Warning">اشتباه است</span>
        <span>جنسیت</span>
        <select
          name="sex"
          className="Employee-sex"
          onChange={(e) => {
            console.log(e.target.value);
            setsex(e.target.value);
          }}
        >
          <option value={"MALE "}>مرد</option>
          <option value={"FEMALE"}>زن</option>
        </select>
        <span>وضعیت نظام وظیفه </span>
        <select
          name="Married"
          className="Employee-Married"
          onChange={(e) => {
            console.log(e.target.value);
            setMilitaryStatus(e.target.value);
          }}
        >
          <option value={0}>انجام شده</option>
          <option value={1}>معاف دائم</option>
          <option value={2}>معافیت تحصیلی</option>
          <option value={3}>در حال انجام</option>
          <option value={4}>مشمول</option>
        </select>
        <span className="Warning">اشتباه است</span>
        <span>استان</span>
        <select
          name="province"
          className="Employee-province"
          onChange={(value) => {
            setNowCity(cities[value.target.value]);
          }}
        >
          {provinces &&
            provinces.map((province, index) => (
              <option value={index} key={index}>
                {province}
              </option>
            ))}
        </select>
        <span className="Warning">اشتباه است</span>
        <span>شهر</span>
        <select
          name="city"
          className="Employee-city"
          onChange={(e) => {
            console.log(e.target.value);
            setusercity(e.target.value);
          }}
        >
          {nowCity &&
            nowCity.map((city, index) => (
              <option value={city} key={index}>
                {city}
              </option>
            ))}
        </select>
        <span className="Warning">اشتباه است</span>
        <span> حداقل حقوق درخواستی به تومان </span>
        <input
          className="Employee-nickname"
          type="number"
          onChange={(e) => {
            console.log(e.target.value);
            setminsalary(e.target.value);
          }}
          value={minsalary}
        />
        <span>آدرس محل سکونت</span>
        <textarea
          className="Employee-address"
          onChange={(e) => {
            console.log(e.target.value);
            setaddress(e.target.value);
          }}
        ></textarea>
        <span className="Warning">اشتباه است</span>
        <button className="EmpBtn" onClick={handleRegister}>
          ثبت نام
        </button>
      </div>
    </div>
  );
};
export default Employee;
