const LanguageModal = ({ handle }) => {
  return (
    <div>
      <span>زبان</span>
      <input type={"text"} />
      <span>سطح مهارت</span>
      <select>
        <option value="0">مقدماتی</option>
        <option value="1">پایین تر از متوسط</option>
        <option value="2">متوسط</option>
        <option value="3">بالاتر از متوسط</option>
        <option value="4">پیشرفته</option>
        <option value="5">مادری</option>
      </select>
      <button
        onClick={() => {
          handle;
        }}
      >
        افزودن
      </button>
      <button>انصراف</button>
    </div>
  );
};
