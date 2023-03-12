import React, { useState, useEffect } from "react";
import "../../style/RegistersForm/Company.css";
import AxiosUrl from "../BaseUrl";
import { useLocation, useNavigate } from "react-router";
const Company = () => {
  const [faname, setfaname] = useState("");
  const [enname, setenname] = useState("");
  const [tel, settel] = useState("");
  const [nickname, setnickname] = useState("");
  const [website, setwebsite] = useState("");
  const [number, setnumber] = useState(0);
  const [bio, setbio] = useState("");
  let [logo, setLogo] = useState("");
  const [logotemp, setLogotemp] = useState("");
  const Location = useLocation();
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [tempdata, setTemp] = useState({});
  useEffect(() => {
    console.log(Location.state);
    if (Location.state.info) {
      setfaname(Location.state.info.persian_name);
      setenname(Location.state.info.english_name);
      setbio(Location.state.info.about_company);
      setnickname(Location.state.info.nick_name);
      settel(Location.state.info.tel);
      setwebsite(Location.state.info.website);
      setnumber(Location.state.info.number_of_staff);
      setId(Location.state.info.id);
    }
    console.log("id ", id);
  }, []);
  const StoreCompany = () => {
    console.log(logo);
    console.log(faname, enname, website, tel, number, bio, nickname);

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
        "/api/company",
        {
          persian_name: faname,
          english_name: enname,
          file: logo,
          tel: tel,
          website: website,
          number_of_staff: number,
          about_company: bio,
          nick_name: nickname,
        },
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
  // --------------------------------------------------------------------------------------------------------

  const handleRgister = () => {
    let user = Location.state.username;
    let mail = Location.state.email;
    let pass = Location.state.password;
    let first = Location.state.name;
    let t = Location.state.type;
    let last = Location.state.lastname;
    let se = Location.state.sex;
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
            file: logo,
            tel: tel,
            website: website,
            number_of_staff: number,
            about_company: bio,
            nick_name: nickname,
          },

          {
            headers: {
              Accept: "application/json",
              "content-type": "multipart/form-data",
            },
          }
        )
          .then((res) => {
            if (res.status == 201) {
              console.log(res);
              navigate("/EmployerPanel");
              localStorage.setItem("token", `Bearer ${res.data.token}`);
              localStorage.setItem("id", res.data.user.id);
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
  const updateCompany = () => {
    let user = Location.state.username;
    let mail = Location.state.email;
    let pass = Location.state.password;
    let first = Location.state.name;
    let t = Location.state.type;
    let last = Location.state.lastname;
    let se = Location.state.sex;
    console.log(faname);
    console.log(Location.state.info.id);
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
        `/api/company/${Location.state.info.id}`,
        tempdata,
        {
          headers: {
            Accept: "application/json",
            "content-type": "application/x-www-form-urlencoded",
            Authorization: localStorage.getItem("token"),
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            alert("شرکت شما با موفقیت تغییر کرد");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <div className="Company">
      <div className="CompanyContainer">
        <h1 className="Title">اطلاعات شرکت</h1>
        <span>نام شرکت به فارسی </span>
        <input
          value={faname}
          type="text"
          required
          onChange={(e) => {
            console.log(e.target.value);
            setfaname(e.target.value);
            let t = tempdata;
            t["persian_name"] = e.target.value;
            setTemp(t);
            console.log(tempdata);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>نام شرکت به انگلیسی</span>
        <input
          value={enname}
          type="text"
          required
          onChange={(e) => {
            console.log(e.target.value);
            setenname(e.target.value);
            let t = tempdata;
            t["english_name"] = e.target.value;
            setTemp(t);
            console.log(tempdata);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>شماره تلفن</span>
        <input
        value={tel}
          type="tel"
          onChange={(e) => {
            console.log(e.target.value);
            settel(e.target.value);
            let t = tempdata;
            t["tel"] = e.target.value;
            setTemp(t);
            console.log(tempdata);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>نام مستعار شرکت</span>
        <input
        value={nickname}
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setnickname(e.target.value);
            let t = tempdata;
            t["nick_name"] = e.target.value;
            setTemp(t);
            console.log(tempdata);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>آدرس وبسایت شرکت</span>
        <input
        value={website}
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            setwebsite(e.target.value);
            let t = tempdata;
            t["website"] = e.target.value;
            setTemp(t);
            console.log(tempdata);
          }}
        />
        <span className="Warning">اشتباه است</span>
        <span>تعداد کارمندان </span>
        <select
          onChange={(e) => {
            setnumber(e.target.value);
            let t = tempdata;
            t["number_of_staff"] = e.target.value;
            setTemp(t);
            console.log(tempdata);
          }}
          value={number}
        >
          <option value={0}>زیر 10 نفر</option>
          <option value={1}>بین 10 تا 20 نفر</option>
          <option value={2}> بین 20 تا 50 نفر</option>
          <option value={3}> بین 50 تا 100 نفر</option>
          <option value={4}>بین 100 تا 500 نفر</option>
          <option value={5}> بیشتر از 500 نفر</option>
        </select>

        <span className="Warning">اشتباه است</span>
        <span>فایل لوگوی شرکت</span>
        <label>
          <input
            // enctype="multipart/form-data"
            type={"file"}
            onChange={(e) => {
              console.log(e.target.files);
              logo = e.target.files[0];
              setLogo(logo);
              let temp = e.target.value.split("\\");
              console.log(temp);
              console.log(logo);
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
        value={bio}
          className="Employee-about"
          onChange={(e) => {
            console.log(e.target.value);
            setbio(e.target.value);
            let t = tempdata;
            t["about_company"] = e.target.value;
            setTemp(t);
            console.log(tempdata);
          }}
        ></textarea>
        <span className="Warning">اشتباه است</span>
        <button
          className="EmpBtn"
          onClick={() => {
            if (Location.state.isStore) {
              StoreCompany();
            } else if (Location.state.isEdit) {
              updateCompany();
            } else {
              handleRgister();
            }
          }}
        >
          ثبت نام
        </button>
      </div>
    </div>
  );
};
export default Company;
