import "../style/search.css";
import { FiSearch, FiBriefcase } from "react-icons/fi";
import { RiMapPin2Fill, RiMapPin2Line } from "react-icons/ri";
import Provinces from "../assets/Provinces.json";
import Cities from "../assets/Cities.json";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Ref , useRef } from "react";
const Search = () => {
  const [City, setCity] = useState("");
  const [isContainerActive, setIsContainerActive] = useState(false);
  const myRef = useRef(null);


  function citiesfounder(pid) {
    const cityelements = [];
    const city = Cities.filter((i) => i.province_id == pid).forEach(function (item) {
      cityelements.push(
        <div className="city-container">
          <RiMapPin2Line className="city-icon"></RiMapPin2Line>
          <span className="city-name">{item.name}</span>
        </div>
      );
    });
    console.log(myRef.current)
  }


  window.addEventListener("click", (e) => {
    if (e.target.id === "city-search") {
      setIsContainerActive(true);
    } else if (
      e.target.className == "provinces-container active" ||
      e.target.className == "province-container"
    ) {
    } else {
      setIsContainerActive(false);
    }
  });
  const provincesElements = Provinces.map((item) => {
    return (
      <>
        <div className="province-container" onClick={citiesfounder(item.id)} ref={myRef}>
          <span className="province-name">{item.name}</span>
          <MdKeyboardArrowDown className="arrow-down"></MdKeyboardArrowDown>
        </div>

        <div className="citis-container" data={item.id}>
          {/* {citiesfounder(item.id)} */}
        </div>
      </>
    );
  });


  return (
    <div className="search-bg">
      <div className="search-container">
        <div className="search-wrapper">
          <div className="search-box-container">
            <span className="search-title">چه شغلی؟</span>
            <div className="search-box">
              <div className="search-text">
                <FiSearch className="search-icon"></FiSearch>
                <input type="text" placeholder="عنوان شغلی یا شرکت ..." />
              </div>
              <div className="seperator"></div>
              <div className="select-box">
                <FiBriefcase className="case-icon"></FiBriefcase>

                <select>
                  <option value="0">گروه شغلی</option>
                  <option value="1">برنامه نویس</option>
                  <option value="2">جوشکار</option>
                </select>
              </div>
            </div>
          </div>
          <div className="search-box-container">
            <span className="search-title">کجا؟</span>
            <div className="search-box">
              <RiMapPin2Fill className="search-icon"></RiMapPin2Fill>
              <input type="text" id="city-search" placeholder="شهر" />
            </div>
          </div>
        </div>
        <button className="search-button">
          <FiSearch className="search-icon"></FiSearch>
          جستجو در مشاغل
        </button>
      </div>
      {/* <div className={`provinces-container ${isContainerActive ? ".active":""}`} ref={ref}> */}
      <div
        className={`provinces-container ${isContainerActive ? "active" : ""}`}
      >
        {provincesElements}
      </div>
    </div>
  );
};

export default Search;
