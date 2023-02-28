import React, { useState } from "react";
import "../../style/Resume/Language.css";
const Language = () => {
  return (
    <div className="Language">
      <span className="LanguageTitle">زبان</span>
      <div className="SelectContainer">
              <select>
        <option>انگلیسی</option>
        <option>عربی</option>
        <option>فرانسوی</option>
        <option>آلمانی</option>
        <option>اسپانیایی</option>
        <option>ایتالیایی</option>
        <option>روسی</option>
        <option>ترکی</option>
        <option>پرتغالی</option>
        <option>ایتالیایی</option>
        <option>ژاپنی</option>
        <option>کره‌ای</option>
        <option>چینی</option>
        <option>ارمنی</option>
        <option>آلمانی</option>
        <option>یونانی</option>
        <option>هندی</option>
        <option>کوردی</option>
      </select>
      <span className="LanguageTitle">سطح مهارت</span>
      <select>
        <option>مقدماتی</option>
        <option>متوسط</option>
        <option>بالاتر از متوسط</option>
        <option>پیشرفته</option>
        <option>در حد زبان مادری</option>
      </select>
      </div>
<div className="ButtonContainer">
        <button className="CancellBtn">انصراف</button>
       <button className="SaveBtn">ذخیره</button>
</div>

    </div>
  );
};
export default Language;
