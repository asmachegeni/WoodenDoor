import React, { useState } from "react";
import Select from "react-select";
const BasicInformation = () => {
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
  const optionList = [
    { value: "آذرشهر", label: "آذرشهر" },
    ,
    { value: "اسکو", label: "اسکو" },
    { value: "اهر", label: "اهر" },
    { value: "بستان‌آباد", label: "بستان‌آباد" },
    { value: "بناب", label: "بناب" },
    { value: "تبریز", label: "تبریز" },
    { value: "جلفا", label: "جلفا" },
    { value: "چاراویماق", label: "چاراویماق" },
    { value: "سراب", label: "سراب" },
    { value: "شبستر", label: "شبستر" },
    { value: "مراغه", label: "مراغه" },
    { value: "ارومیه", label: "ارومیه" },
    { value: "اشنویه", label: "اشنویه" },
    { value: "بوکان", label: "بوکان" },
    { value: "پیرانشهر", label: "پیرانشهر" },
    { value: "تکاب", label: "تکاب" },
    { value: "چالدران", label: "چالدران" },
    { value: "خوی", label: "خوی" },
    { value: "سردشت", label: "سردشت" },
    { value: "سلماس", label: "سلماس" },
    { value: "شاهین‌دژ", label: "شاهین‌دژ" },
    { value: "ماکو", label: "ماکو" },
    { value: "مهاباد", label: "مهاباد" },
    { value: "میاندوآب", label: "میاندوآب" },
    { value: "نقده", label: "نقده" },
    { value: "اردبیل", label: "اردبیل" },
    { value: "بیله‌سوار", label: "بیله‌سوار" },
    { value: "پارس‌آباد", label: "پارس‌آباد" },
    { value: "خلخال", label: "خلخال" },
    { value: "کوثر", label: "کوثر" },
    { value: "گِرمی", label: "گِرمی" },
    { value: "مِشگین‌شهر", label: "مِشگین‌شهر" },
    { value: "نَمین", label: "نَمین" },
    { value: "نیر", label: "نیر" },
    { value: "آران و بیدگل", label: "آران و بیدگل" },
    { value: "اردستان", label: "اردستان" },
    { value: "اصفهان", label: "اصفهان" },
    { value: "برخوار و میمه", label: "برخوار و میمه" },
    { value: "تیران و کرون", label: "تیران و کرون" },
    { value: "چادگان", label: "چادگان" },
    { value: "خمینی‌شهر", label: "خمینی‌شهر" },
    { value: "خوانسار", label: "خوانسار" },
    { value: "سمیرم", label: "سمیرم" },
    { value: "شهرضا", label: "شهرضا" },
    { value: "سمیرم سفلی", label: "سمیرم سفلی" },
    { value: "فریدن", label: "فریدن" },
    { value: "فریدون‌شهر", label: "فریدون‌شهر" },
    { value: "فلاورجان", label: "فلاورجان" },
    { value: "کاشان", label: "کاشان" },
    { value: "گلپایگان", label: "گلپایگان" },
    { value: "لنجان", label: "لنجان" },
    { value: "مبارکه", label: "مبارکه" },
    { value: "نائین", label: "نائین" },
    { value: "نجف‌آباد", label: "نجف‌آباد" },
    { value: "نطنز", label: "نطنز" },
    { value: "آبدانان", label: "آبدانان" },
    { value: "ایلام", label: "ایلام" },
    { value: "ایوان", label: "ایوان" },
    { value: "دره‌شهر", label: "دره‌شهر" },
    { value: "دهلران", label: "دهلران" },
    { value: "شیروان و چرداول", label: "شیروان و چرداول" },
    { value: "مهران", label: "مهران" },
    { value: "بوشهر", label: "بوشهر" },
    { value: "تنگستان", label: "تنگستان" },
    { value: "جم", label: "جم" },
    { value: "دشتستان", label: "دشتستان" },
    { value: "دشتی", label: "دشتی" },
    { value: "دیر", label: "دیر" },
    { value: "دیلم", label: "دیلم" },
    { value: "کنگان", label: "کنگان" },
    { value: "گناوه", label: "گناوه" },
    { value: "اسلام‌شهر", label: "اسلام‌شهر" },
    { value: "پاکدشت", label: "پاکدشت" },
    { value: "تهران", label: "تهران" },
    { value: "دماوند", label: "دماوند" },
    { value: "رباط‌کریم", label: "رباط‌کریم" },
    { value: "ری", label: "ری" },
    { value: "ساوجبلاغ", label: "ساوجبلاغ" },
    { value: "شمیرانات", label: "شمیرانات" },
    { value: "شهریار", label: "شهریار" },
    { value: "فیروزکوه", label: "فیروزکوه" },
    { value: "ورامین", label: "ورامین" },
    { value: "اردل", label: "اردل" },
    { value: "بروجن", label: "بروجن" },
    { value: "شهرکرد", label: "شهرکرد" },
    { value: "فارسان", label: "فارسان" },
    { value: "کوهرنگ", label: "کوهرنگ" },
    { value: "لردگان", label: "لردگان" },
    { value: "بیرجند", label: "بیرجند" },
    { value: "درمیان", label: "درمیان" },
    { value: "سرایان", label: "سرایان" },
    { value: "سربیشه", label: "سربیشه" },
    { value: "فردوس", label: "فردوس" },
    { value: "قائنات", label: "قائنات" },
    { value: "نهبندان", label: "نهبندان" },
    { value: "بردسکن", label: "بردسکن" },
    { value: "تایباد", label: "تایباد" },
    { value: "تربت جام", label: "تربت جام" },
    { value: "تربت حیدریه", label: "تربت حیدریه" },
    { value: "چناران", label: "چناران" },
    { value: "خلیل‌آباد", label: "خلیل‌آباد" },
    { value: "خواف", label: "خواف" },
    { value: "درگز", label: "درگز" },
    { value: "رشتخوار", label: "رشتخوار" },
    { value: "سبزوار", label: "سبزوار" },
    { value: "سرخس", label: "سرخس" },
    { value: "فریمان", label: "فریمان" },
    { value: "قوچان", label: "قوچان" },
    { value: "کاشمر", label: "کاشمر" },
    { value: "کلات", label: "کلات" },
    { value: "گناباد", label: "گناباد" },
    { value: "مشهد", label: "مشهد" },
    { value: "مه ولات", label: "مه ولات" },
    { value: "نیشابور", label: "نیشابور" },
    { value: "اسفراین", label: "اسفراین" },
    { value: "بجنورد", label: "بجنورد" },
    { value: "جاجرم", label: "جاجرم" },
    { value: "شیروان", label: "شیروان" },
    { value: "فاروج", label: "فاروج" },
    { value: "مانه و سملقان", label: "مانه و سملقان" },
    { value: "آبادان", label: "آبادان" },
    { value: "امیدیه", label: "امیدیه" },
    { value: "اندیمشک", label: "اندیمشک" },
    { value: "اهواز", label: "اهواز" },
    { value: "ایذه", label: "ایذه" },
    { value: "باغ‌ملک", label: "باغ‌ملک" },
    { value: "بندر ماهشهر", label: "بندر ماهشهر" },
    { value: "بهبهان", label: "بهبهان" },
    { value: "خرمشهر", label: "خرمشهر" },
    { value: "دزفول", label: "دزفول" },
    { value: "دشت آزادگان", label: "دشت آزادگان" },
    { value: "رامشیر", label: "رامشیر" },
    { value: "رامهرمز", label: "رامهرمز" },
    { value: "شادگان", label: "شادگان" },
    { value: "شوش", label: "شوش" },
    { value: "شوشتر", label: "شوشتر" },
    { value: "ابهر", label: "ابهر" },
    { value: "ایجرود", label: "ایجرود" },
    { value: "خدابنده", label: "خدابنده" },
    { value: "خرمدره", label: "خرمدره" },
    { value: "زنجان", label: "زنجان" },
    { value: "طارم", label: "طارم" },
    { value: "ماه‌نشان", label: "ماه‌نشان" },
    { value: "دامغان", label: "دامغان" },
    { value: "سمنان", label: "سمنان" },
    { value: "شاهرود", label: "شاهرود" },
    { value: "گرمسار", label: "گرمسار" },
    { value: "مهدی‌شهر", label: "مهدی‌شهر" },
    { value: "ایرانشهر", label: "ایرانشهر" },
    { value: "چابهار", label: "چابهار" },
    { value: "خاش", label: "خاش" },
    { value: "دلگان", label: "دلگان" },
    { value: "زابل", label: "زابل" },
    { value: "زاهدان", label: "زاهدان" },
    { value: "زهک", label: "زهک" },
    { value: "سراوان", label: "سراوان" },
    { value: "سرباز", label: "سرباز" },
    { value: "کنارک", label: "کنارک" },
    { value: "نیک‌شهر", label: "نیک‌شهر" },
    { value: "آباده", label: "آباده" },
    { value: "ارسنجان", label: "ارسنجان" },
    { value: "استهبان", label: "استهبان" },
    { value: "اقلید", label: "اقلید" },
    { value: "بوانات", label: "بوانات" },
    { value: "پاسارگاد", label: "پاسارگاد" },
    { value: "جهرم", label: "جهرم" },
    { value: "خرم‌بید", label: "خرم‌بید" },
    { value: "خنج", label: "خنج" },
    { value: "داراب", label: "داراب" },
    { value: "زرین‌دشت", label: "زرین‌دشت" },
    { value: "سپیدان", label: "سپیدان" },
    { value: "شیراز", label: "شیراز" },
    { value: "فراشبند", label: "فراشبند" },
    { value: "فسا", label: "فسا" },
    { value: "فیروزآباد", label: "فیروزآباد" },
    { value: "قیر و کارزین", label: "قیر و کارزین" },
    { value: "کازرون", label: "کازرون" },
    { value: "لارستان", label: "لارستان" },
    { value: "لامِرد", label: "لامِرد" },
    { value: "مرودشت", label: "مرودشت" },
    { value: "ممسنی", label: "ممسنی" },
    { value: "مهر", label: "مهر" },
    { value: "نی‌ریز", label: "نی‌ریز" },
    { value: "آبیک", label: "آبیک" },
    { value: "البرز", label: "البرز" },
    { value: "بوئین‌زهرا", label: "بوئین‌زهرا" },
    { value: "تاکستان", label: "تاکستان" },
    { value: "قزوین", label: "قزوین" },
    { value: "قم", label: "قم" },
    { value: "بانه", label: "بانه" },
    { value: "بیجار", label: "بیجار" },
    { value: "دیواندره", label: "دیواندره" },
    { value: "سروآباد", label: "سروآباد" },
    { value: "سقز", label: "سقز" },
    { value: "سنندج", label: "سنندج" },
    { value: "قروه", label: "قروه" },
    { value: "کامیاران", label: "کامیاران" },
    { value: "مریوان", label: "مریوان" },
    { value: "بافت", label: "بافت" },
    { value: "بردسیر", label: "بردسیر" },
    { value: "بم", label: "بم" },
    { value: "جیرفت", label: "جیرفت" },
    { value: "راور", label: "راور" },
    { value: "رفسنجان", label: "رفسنجان" },
    { value: "رودبار جنوب", label: "رودبار جنوب" },
    { value: "زرند", label: "زرند" },
    { value: "سیرجان", label: "سیرجان" },
    { value: "شهر بابک", label: "شهر بابک" },
    { value: "عنبرآباد", label: "عنبرآباد" },
    { value: "قلعه گنج", label: "قلعه گنج" },
    { value: "کرمان", label: "کرمان" },
    { value: "کوهبنان", label: "کوهبنان" },
    { value: "کهنوج", label: "کهنوج" },
    { value: "منوجان", label: "منوجان" },
    { value: "اسلام‌آباد غرب", label: "اسلام‌آباد غرب" },
    { value: "پاوه", label: "پاوه" },
    { value: "ثلاث باباجانی", label: "ثلاث باباجانی" },
    { value: "جوانرود", label: "جوانرود" },
    { value: "دالاهو", label: "دالاهو" },
    { value: "روانسر", label: "روانسر" },
    { value: "سرپل ذهاب", label: "سرپل ذهاب" },
    { value: "سنقر", label: "سنقر" },
    { value: "صحنه", label: "صحنه" },
    { value: "قصر شیرین", label: "قصر شیرین" },
    { value: "کرمانشاه", label: "کرمانشاه" },
    { value: "کنگاور", label: "کنگاور" },
    { value: "گیلان غرب", label: "گیلان غرب" },
    { value: "هرسین", label: "هرسین" },
    { value: "بویراحمد", label: "بویراحمد" },
    { value: "بهمئی", label: "بهمئی" },
    { value: "دنا", label: "دنا" },
    { value: "کهگیلویه", label: "کهگیلویه" },
    { value: "گچساران", label: "گچساران" },
    { value: "آزادشهر", label: "آزادشهر" },
    { value: "آق‌قلا", label: "آق‌قلا" },
    { value: "بندر گز", label: "بندر گز" },
    { value: "ترکمن", label: "ترکمن" },
    { value: "رامیان", label: "رامیان" },
    { value: "علی‌آباد", label: "علی‌آباد" },
    { value: "کردکوی", label: "کردکوی" },
    { value: "کلاله", label: "کلاله" },
    { value: "گرگان", label: "گرگان" },
    { value: "گنبد کاووس", label: "گنبد کاووس" },
    { value: "مراوه‌تپه", label: "مراوه‌تپه" },
    { value: "مینودشت", label: "مینودشت" },
    { value: "آستارا", label: "آستارا" },
    { value: "آستانه اشرفیه", label: "آستانه اشرفیه" },
    { value: "اَملَش", label: "اَملَش" },
    { value: "بندر انزلی", label: "بندر انزلی" },
    { value: "رشت", label: "رشت" },
    { value: "رضوانشهر", label: "رضوانشهر" },
    { value: "رودبار", label: "رودبار" },
    { value: "رودسر", label: "رودسر" },
    { value: "سیاهکل", label: "سیاهکل" },
    { value: "شَفت", label: "شَفت" },
    { value: "صومعه‌سرا", label: "صومعه‌سرا" },
    { value: "طوالش", label: "طوالش" },
    { value: "فومَن", label: "فومَن" },
    { value: "لاهیجان", label: "لاهیجان" },
    { value: "لنگرود", label: "لنگرود" },
    { value: "ماسال", label: "ماسال" },
    { value: "ازنا", label: "ازنا" },
    { value: "الیگودرز", label: "الیگودرز" },
    { value: "بروجرد", label: "بروجرد" },
    { value: "پل‌دختر", label: "پل‌دختر" },
    { value: "خرم‌آباد", label: "خرم‌آباد" },
    { value: "دورود", label: "دورود" },
    { value: "دلفان", label: "دلفان" },
    { value: "سلسله ,کوهدشت", label: "سلسله ,کوهدشت" },
    { value: "آمل", label: "آمل" },
    { value: "بابل", label: "بابل" },
    { value: "بابلسر", label: "بابلسر" },
    { value: "بهشهر", label: "بهشهر" },
    { value: "تنکابن", label: "تنکابن" },
    { value: "جویبار", label: "جویبار" },
    { value: "چالوس", label: "چالوس" },
    { value: "رامسر", label: "رامسر" },
    { value: "ساری", label: "ساری" },
    { value: "سوادکوه", label: "سوادکوه" },
    { value: "قائم‌شهر", label: "قائم‌شهر" },
    { value: "گلوگاه", label: "گلوگاه" },
    { value: "محمودآباد", label: "محمودآباد" },
    { value: "نکا", label: "نکا" },
    { value: "نور", label: "نور" },
    { value: "نوشهر", label: "نوشهر" },
    { value: "آشتیان", label: "آشتیان" },
    { value: "اراک", label: "اراک" },
    { value: "تفرش", label: "تفرش" },
    { value: "خمین", label: "خمین" },
    { value: "دلیجان", label: "دلیجان" },
    { value: "زرندیه", label: "زرندیه" },
    { value: "ساوه", label: "ساوه" },
    { value: "شازند", label: "شازند" },
    { value: "کمیجان", label: "کمیجان" },
    { value: "محلات", label: "محلات" },
    { value: "ابوموسی", label: "ابوموسی" },
    { value: "بستک", label: "بستک" },
    { value: "بندر عباس", label: "بندر عباس" },
    { value: "بندر لنگه", label: "بندر لنگه" },
    { value: "جاسک", label: "جاسک" },
    { value: "حاجی‌آباد", label: "حاجی‌آباد" },
    { value: "شهرستان خمیر", label: "شهرستان خمیر" },
    { value: "رودان", label: "رودان" },
    { value: "قشم", label: "قشم" },
    { value: "گاوبندی", label: "گاوبندی" },
    { value: "میناب", label: "میناب" },
    { value: "اسدآباد", label: "اسدآباد" },
    { value: "بهار", label: "بهار" },
    { value: "تویسرکان", label: "تویسرکان" },
    { value: "رزن", label: "رزن" },
    { value: "کبودرآهنگ", label: "کبودرآهنگ" },
    { value: "ملایر", label: "ملایر" },
    { value: "نهاوند", label: "نهاوند" },
    { value: "همدان", label: "همدان" },
    { value: "ابرکوه", label: "ابرکوه" },
    { value: "اردکان", label: "اردکان" },
    { value: "بافق", label: "بافق" },
    { value: "تفت", label: "تفت" },
    { value: "خاتم", label: "خاتم" },
    { value: "صدوق", label: "صدوق" },
    { value: "طبس", label: "طبس" },
    { value: "مهریز", label: "مهریز" },
    { value: "مِیبُد", label: "مِیبُد" },
    { value: "یزد", label: "یزد" },
    { value: "کرج", label: "کرج" },
    { value: "نظرآباد", label: "نظرآباد" },
    { value: "فردیس", label: "فردیس" },
    { value: "اشتهارد", label: "اشتهارد" },
    { value: "هشتگرد", label: "هشتگرد" },
    { value: "طالقان", label: "طالقان" },
    { value: "آذرشهر", label: "آذرشهر" },
    { value: "اسکو", label: "اسکو" },
    { value: "اهر", label: "اهر" },
    { value: "بستان‌آباد", label: "بستان‌آباد" },
    { value: "بناب", label: "بناب" },
    { value: "تبریز", label: "تبریز" },
    { value: "جلفا", label: "جلفا" },
    { value: "چاراویماق", label: "چاراویماق" },
    { value: "سراب", label: "سراب" },
    { value: "شبستر", label: "شبستر" },
    { value: "مراغه", label: "مراغه" },
    { value: "ارومیه", label: "ارومیه" },
    { value: "اشنویه", label: "اشنویه" },
    { value: "بوکان", label: "بوکان" },
    { value: "پیرانشهر", label: "پیرانشهر" },
    { value: "تکاب", label: "تکاب" },
    { value: "چالدران", label: "چالدران" },
    { value: "خوی", label: "خوی" },
    { value: "سردشت", label: "سردشت" },
    { value: "سلماس", label: "سلماس" },
    { value: "شاهین‌دژ", label: "شاهین‌دژ" },
    { value: "ماکو", label: "ماکو" },
    { value: "مهاباد", label: "مهاباد" },
    { value: "میاندوآب", label: "میاندوآب" },
    { value: "نقده", label: "نقده" },
    { value: "اردبیل", label: "اردبیل" },
    { value: "بیله‌سوار", label: "بیله‌سوار" },
    { value: "پارس‌آباد", label: "پارس‌آباد" },
    { value: "خلخال", label: "خلخال" },
    { value: "کوثر", label: "کوثر" },
    { value: "گِرمی", label: "گِرمی" },
    { value: "مِشگین‌شهر", label: "مِشگین‌شهر" },
    { value: "نَمین", label: "نَمین" },
    { value: "نیر", label: "نیر" },
    { value: "آران و بیدگل", label: "آران و بیدگل" },
    { value: "اردستان", label: "اردستان" },
    { value: "اصفهان", label: "اصفهان" },
    { value: "برخوار و میمه", label: "برخوار و میمه" },
    { value: "تیران و کرون", label: "تیران و کرون" },
    { value: "چادگان", label: "چادگان" },
    { value: "خمینی‌شهر", label: "خمینی‌شهر" },
    { value: "خوانسار", label: "خوانسار" },
    { value: "سمیرم", label: "سمیرم" },
    { value: "شهرضا", label: "شهرضا" },
    { value: "سمیرم سفلی", label: "سمیرم سفلی" },
    { value: "فریدن", label: "فریدن" },
    { value: "فریدون‌شهر", label: "فریدون‌شهر" },
    { value: "فلاورجان", label: "فلاورجان" },
    { value: "کاشان", label: "کاشان" },
    { value: "گلپایگان", label: "گلپایگان" },
    { value: "لنجان", label: "لنجان" },
    { value: "مبارکه", label: "مبارکه" },
    { value: "نائین", label: "نائین" },
    { value: "نجف‌آباد", label: "نجف‌آباد" },
    { value: "نطنز", label: "نطنز" },
    { value: "آبدانان", label: "آبدانان" },
    { value: "ایلام", label: "ایلام" },
    { value: "ایوان", label: "ایوان" },
    { value: "دره‌شهر", label: "دره‌شهر" },
    { value: "دهلران", label: "دهلران" },
    { value: "شیروان و چرداول", label: "شیروان و چرداول" },
    { value: "مهران", label: "مهران" },
    { value: "بوشهر", label: "بوشهر" },
    { value: "تنگستان", label: "تنگستان" },
    { value: "جم", label: "جم" },
    { value: "دشتستان", label: "دشتستان" },
    { value: "دشتی", label: "دشتی" },
    { value: "دیر", label: "دیر" },
    { value: "دیلم", label: "دیلم" },
    { value: "کنگان", label: "کنگان" },
    { value: "گناوه", label: "گناوه" },
    { value: "اسلام‌شهر", label: "اسلام‌شهر" },
    { value: "پاکدشت", label: "پاکدشت" },
    { value: "تهران", label: "تهران" },
    { value: "دماوند", label: "دماوند" },
    { value: "رباط‌کریم", label: "رباط‌کریم" },
    { value: "ری", label: "ری" },
    { value: "ساوجبلاغ", label: "ساوجبلاغ" },
    { value: "شمیرانات", label: "شمیرانات" },
    { value: "شهریار", label: "شهریار" },
    { value: "فیروزکوه", label: "فیروزکوه" },
    { value: "ورامین", label: "ورامین" },
    { value: "اردل", label: "اردل" },
    { value: "بروجن", label: "بروجن" },
    { value: "شهرکرد", label: "شهرکرد" },
    { value: "فارسان", label: "فارسان" },
    { value: "کوهرنگ", label: "کوهرنگ" },
    { value: "لردگان", label: "لردگان" },
    { value: "بیرجند", label: "بیرجند" },
    { value: "درمیان", label: "درمیان" },
    { value: "سرایان", label: "سرایان" },
    { value: "سربیشه", label: "سربیشه" },
    { value: "فردوس", label: "فردوس" },
    { value: "قائنات", label: "قائنات" },
    { value: "نهبندان", label: "نهبندان" },
    { value: "بردسکن", label: "بردسکن" },
    { value: "تایباد", label: "تایباد" },
    { value: "تربت جام", label: "تربت جام" },
    { value: "تربت حیدریه", label: "تربت حیدریه" },
    { value: "چناران", label: "چناران" },
    { value: "خلیل‌آباد", label: "خلیل‌آباد" },
    { value: "خواف", label: "خواف" },
    { value: "درگز", label: "درگز" },
    { value: "رشتخوار", label: "رشتخوار" },
    { value: "سبزوار", label: "سبزوار" },
    { value: "سرخس", label: "سرخس" },
    { value: "فریمان", label: "فریمان" },
    { value: "قوچان", label: "قوچان" },
    { value: "کاشمر", label: "کاشمر" },
    { value: "کلات", label: "کلات" },
    { value: "گناباد", label: "گناباد" },
    { value: "مشهد", label: "مشهد" },
    { value: "مه ولات", label: "مه ولات" },
    { value: "نیشابور", label: "نیشابور" },
    { value: "اسفراین", label: "اسفراین" },
    { value: "بجنورد", label: "بجنورد" },
    { value: "جاجرم", label: "جاجرم" },
    { value: "شیروان", label: "شیروان" },
    { value: "فاروج", label: "فاروج" },
    { value: "مانه و سملقان", label: "مانه و سملقان" },
    { value: "آبادان", label: "آبادان" },
    { value: "امیدیه", label: "امیدیه" },
    { value: "اندیمشک", label: "اندیمشک" },
    { value: "اهواز", label: "اهواز" },
    { value: "ایذه", label: "ایذه" },
    { value: "باغ‌ملک", label: "باغ‌ملک" },
    { value: "بندر ماهشهر", label: "بندر ماهشهر" },
    { value: "بهبهان", label: "بهبهان" },
    { value: "خرمشهر", label: "خرمشهر" },
    { value: "دزفول", label: "دزفول" },
    { value: "دشت آزادگان", label: "دشت آزادگان" },
    { value: "رامشیر", label: "رامشیر" },
    { value: "رامهرمز", label: "رامهرمز" },
    { value: "شادگان", label: "شادگان" },
    { value: "شوش", label: "شوش" },
    { value: "شوشتر", label: "شوشتر" },
    { value: "ابهر", label: "ابهر" },
    { value: "ایجرود", label: "ایجرود" },
    { value: "خدابنده", label: "خدابنده" },
    { value: "خرمدره", label: "خرمدره" },
    { value: "زنجان", label: "زنجان" },
    { value: "طارم", label: "طارم" },
    { value: "ماه‌نشان", label: "ماه‌نشان" },
    { value: "دامغان", label: "دامغان" },
    { value: "سمنان", label: "سمنان" },
    { value: "شاهرود", label: "شاهرود" },
    { value: "گرمسار", label: "گرمسار" },
    { value: "مهدی‌شهر", label: "مهدی‌شهر" },
    { value: "ایرانشهر", label: "ایرانشهر" },
    { value: "چابهار", label: "چابهار" },
    { value: "خاش", label: "خاش" },
    { value: "دلگان", label: "دلگان" },
    { value: "زابل", label: "زابل" },
    { value: "زاهدان", label: "زاهدان" },
    { value: "زهک", label: "زهک" },
    { value: "سراوان", label: "سراوان" },
    { value: "سرباز", label: "سرباز" },
    { value: "کنارک", label: "کنارک" },
    { value: "نیک‌شهر", label: "نیک‌شهر" },
    { value: "آباده", label: "آباده" },
    { value: "ارسنجان", label: "ارسنجان" },
    { value: "استهبان", label: "استهبان" },
    { value: "اقلید", label: "اقلید" },
    { value: "بوانات", label: "بوانات" },
    { value: "پاسارگاد", label: "پاسارگاد" },
    { value: "جهرم", label: "جهرم" },
    { value: "خرم‌بید", label: "خرم‌بید" },
    { value: "خنج", label: "خنج" },
    { value: "داراب", label: "داراب" },
    { value: "زرین‌دشت", label: "زرین‌دشت" },
    { value: "سپیدان", label: "سپیدان" },
    { value: "شیراز", label: "شیراز" },
    { value: "فراشبند", label: "فراشبند" },
    { value: "فسا", label: "فسا" },
    { value: "فیروزآباد", label: "فیروزآباد" },
    { value: "قیر و کارزین", label: "قیر و کارزین" },
    { value: "کازرون", label: "کازرون" },
    { value: "لارستان", label: "لارستان" },
    { value: "لامِرد", label: "لامِرد" },
    { value: "مرودشت", label: "مرودشت" },
    { value: "ممسنی", label: "ممسنی" },
    { value: "مهر", label: "مهر" },
    { value: "نی‌ریز", label: "نی‌ریز" },
    { value: "آبیک", label: "آبیک" },
    { value: "البرز", label: "البرز" },
    { value: "بوئین‌زهرا", label: "بوئین‌زهرا" },
    { value: "تاکستان", label: "تاکستان" },
    { value: "قزوین", label: "قزوین" },
    { value: "قم", label: "قم" },
    { value: "بانه", label: "بانه" },
    { value: "بیجار", label: "بیجار" },
    { value: "دیواندره", label: "دیواندره" },
    { value: "سروآباد", label: "سروآباد" },
    { value: "سقز", label: "سقز" },
    { value: "سنندج", label: "سنندج" },
    { value: "قروه", label: "قروه" },
    { value: "کامیاران", label: "کامیاران" },
    { value: "مریوان", label: "مریوان" },
    { value: "بافت", label: "بافت" },
    { value: "بردسیر", label: "بردسیر" },
    { value: "بم", label: "بم" },
    { value: "جیرفت", label: "جیرفت" },
    { value: "راور", label: "راور" },
    { value: "رفسنجان", label: "رفسنجان" },
    { value: "رودبار جنوب", label: "رودبار جنوب" },
    { value: "زرند", label: "زرند" },
    { value: "سیرجان", label: "سیرجان" },
    { value: "شهر بابک", label: "شهر بابک" },
    { value: "عنبرآباد", label: "عنبرآباد" },
    { value: "قلعه گنج", label: "قلعه گنج" },
    { value: "کرمان", label: "کرمان" },
    { value: "کوهبنان", label: "کوهبنان" },
    { value: "کهنوج", label: "کهنوج" },
    { value: "منوجان", label: "منوجان" },
    { value: "اسلام‌آباد غرب", label: "اسلام‌آباد غرب" },
    { value: "پاوه", label: "پاوه" },
    { value: "ثلاث باباجانی", label: "ثلاث باباجانی" },
    { value: "جوانرود", label: "جوانرود" },
    { value: "دالاهو", label: "دالاهو" },
    { value: "روانسر", label: "روانسر" },
    { value: "سرپل ذهاب", label: "سرپل ذهاب" },
    { value: "سنقر", label: "سنقر" },
    { value: "صحنه", label: "صحنه" },
    { value: "قصر شیرین", label: "قصر شیرین" },
    { value: "کرمانشاه", label: "کرمانشاه" },
    { value: "کنگاور", label: "کنگاور" },
    { value: "گیلان غرب", label: "گیلان غرب" },
    { value: "هرسین", label: "هرسین" },
    { value: "بویراحمد", label: "بویراحمد" },
    { value: "بهمئی", label: "بهمئی" },
    { value: "دنا", label: "دنا" },
    { value: "کهگیلویه", label: "کهگیلویه" },
    { value: "گچساران", label: "گچساران" },
    { value: "آزادشهر", label: "آزادشهر" },
    { value: "آق‌قلا", label: "آق‌قلا" },
    { value: "بندر گز", label: "بندر گز" },
    { value: "ترکمن", label: "ترکمن" },
    { value: "رامیان", label: "رامیان" },
    { value: "علی‌آباد", label: "علی‌آباد" },
    { value: "کردکوی", label: "کردکوی" },
    { value: "کلاله", label: "کلاله" },
    { value: "گرگان", label: "گرگان" },
    { value: "گنبد کاووس", label: "گنبد کاووس" },
    { value: "مراوه‌تپه", label: "مراوه‌تپه" },
    { value: "مینودشت", label: "مینودشت" },
    { value: "آستارا", label: "آستارا" },
    { value: "آستانه اشرفیه", label: "آستانه اشرفیه" },
    { value: "اَملَش", label: "اَملَش" },
    { value: "بندر انزلی", label: "بندر انزلی" },
    { value: "رشت", label: "رشت" },
    { value: "رضوانشهر", label: "رضوانشهر" },
    { value: "رودبار", label: "رودبار" },
    { value: "رودسر", label: "رودسر" },
    { value: "سیاهکل", label: "سیاهکل" },
    { value: "شَفت", label: "شَفت" },
    { value: "صومعه‌سرا", label: "صومعه‌سرا" },
    { value: "طوالش", label: "طوالش" },
    { value: "فومَن", label: "فومَن" },
    { value: "لاهیجان", label: "لاهیجان" },
    { value: "لنگرود", label: "لنگرود" },
    { value: "ماسال", label: "ماسال" },
    { value: "ازنا", label: "ازنا" },
    { value: "الیگودرز", label: "الیگودرز" },
    { value: "بروجرد", label: "بروجرد" },
    { value: "پل‌دختر", label: "پل‌دختر" },
    { value: "خرم‌آباد", label: "خرم‌آباد" },
    { value: "دورود", label: "دورود" },
    { value: "دلفان", label: "دلفان" },
    { value: "سلسله ,کوهدشت", label: "سلسله ,کوهدشت" },
    { value: "آمل", label: "آمل" },
    { value: "بابل", label: "بابل" },
    { value: "بابلسر", label: "بابلسر" },
    { value: "بهشهر", label: "بهشهر" },
    { value: "تنکابن", label: "تنکابن" },
    { value: "جویبار", label: "جویبار" },
    { value: "چالوس", label: "چالوس" },
    { value: "رامسر", label: "رامسر" },
    { value: "ساری", label: "ساری" },
    { value: "سوادکوه", label: "سوادکوه" },
    { value: "قائم‌شهر", label: "قائم‌شهر" },
    { value: "گلوگاه", label: "گلوگاه" },
    { value: "محمودآباد", label: "محمودآباد" },
    { value: "نکا", label: "نکا" },
    { value: "نور", label: "نور" },
    { value: "نوشهر", label: "نوشهر" },
    { value: "آشتیان", label: "آشتیان" },
    { value: "اراک", label: "اراک" },
    { value: "تفرش", label: "تفرش" },
    { value: "خمین", label: "خمین" },
    { value: "دلیجان", label: "دلیجان" },
    { value: "زرندیه", label: "زرندیه" },
    { value: "ساوه", label: "ساوه" },
    { value: "شازند", label: "شازند" },
    { value: "کمیجان", label: "کمیجان" },
    { value: "محلات", label: "محلات" },
    { value: "ابوموسی", label: "ابوموسی" },
    { value: "بستک", label: "بستک" },
    { value: "بندر عباس", label: "بندر عباس" },
    { value: "بندر لنگه", label: "بندر لنگه" },
    { value: "جاسک", label: "جاسک" },
    { value: "حاجی‌آباد", label: "حاجی‌آباد" },
    { value: "شهرستان خمیر", label: "شهرستان خمیر" },
    { value: "رودان", label: "رودان" },
    { value: "قشم", label: "قشم" },
    { value: "گاوبندی", label: "گاوبندی" },
    { value: "میناب", label: "میناب" },
    { value: "اسدآباد", label: "اسدآباد" },
    { value: "بهار", label: "بهار" },
    { value: "تویسرکان", label: "تویسرکان" },
    { value: "رزن", label: "رزن" },
    { value: "کبودرآهنگ", label: "کبودرآهنگ" },
    { value: "ملایر", label: "ملایر" },
    { value: "نهاوند", label: "نهاوند" },
    { value: "همدان", label: "همدان" },
    { value: "ابرکوه", label: "ابرکوه" },
    { value: "اردکان", label: "اردکان" },
    { value: "بافق", label: "بافق" },
    { value: "تفت", label: "تفت" },
    { value: "خاتم", label: "خاتم" },
    { value: "صدوق", label: "صدوق" },
    { value: "طبس", label: "طبس" },
    { value: "مهریز", label: "مهریز" },
    { value: "مِیبُد", label: "مِیبُد" },
    { value: "یزد", label: "یزد" },
    { value: "کرج", label: "کرج" },
    { value: "نظرآباد", label: "نظرآباد" },
    { value: "فردیس", label: "فردیس" },
    { value: "اشتهارد", label: "اشتهارد" },
    { value: "هشتگرد", label: "هشتگرد" },
    { value: "طالقان", label: "طالقان" },
  ];

  return (
    <div className="BBasicInformation">
      <p>اطلاعات اولیه</p>
      <span>نام</span>
      <input type={"text"} />
      <span>نام خانوادگی</span>
      <input type={"text"} />
      <span>جنسیت</span>
      <div>
        <span>مرد</span>
        <span>زن</span>
      </div>
      <span>وضعیت تاهل</span>
      <div>
        <span>مجرد</span>
        <span>متاهل</span>
      </div>
      <span>وضعیت نظام وظیفه</span>
      <select>
        <option>انجام شده</option>
        <option>معاف دائم</option>
        <option>معافیت تحصیلی</option>
        <option>در حال انجام</option>
        <option>مشمول</option>
      </select>
      <span>شهر محل سکونت</span>
      <Select
        options={optionList}
        placeholder="جستجو کنید"
        // value={selectedOptions}
        // onChange={handleSelect}
        isSearchable={true}
      />
      <span>محله</span>
      <textarea></textarea>
      <span>تاریخ تولد</span>
      <div className="date">
        <select name="day" className="Employee-Birthday">
          {days &&
            days.map((day) => (
              <option value={day} key={day}>
                {day}
              </option>
            ))}
        </select>
        /
        <select name="month" className="Employee-Birthmonth">
          {months &&
            months.map((month, index) => (
              <option value={index + 1} key={index}>
                {month}
              </option>
            ))}
        </select>
        /
        <select name="year" className="Employee-Birthyear">
          {years &&
            years.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
        </select>
      </div>
      <span>َشماره تلفن </span>
      <input type={"tel"} />
      <span>حقوق ددرخواستی</span>
      <input type={"number"} />
      <span>علاقه مند به استخدام در کدام حوزه ها هستید؟ حداکثر 3 مورد</span>
      <Select
        options={optionList}
        placeholder="جستجو کنید"
        // value={selectedOptions}
        // onChange={handleSelect}
        isSearchable={true}
        isMulti
      />
    </div>
  );
};
export default BasicInformation;
