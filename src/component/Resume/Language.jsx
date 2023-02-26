import React, { useState } from "react";
const Language = () => {
  return (
    <div>
      <span>زبان</span>
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
      <span>سطح مهارت</span>
      <select>
        <option>مقدماتی</option>
        <option>متوسط</option>
        <option>بالاتر از متوسط</option>
        <option>پیشرفته</option>
        <option>در حد زبان مادری</option>
      </select>
      <button>انصراف</button>
      <button>ذخیره</button>
    </div>
  );
};
export default Language;
