import "../../style/Blog/SearchBox.css";
import { IoMdSearch } from "react-icons/io";
const SearchBox = () => {
  return (
    <div className="SeachBox">
      <span>همه مطالب</span>
      <form action="/" role="search" method="GET" className="Form">
        <input type="text" name="s" placeholder="جستجو..." />
        <button type="submit">
          <IoMdSearch></IoMdSearch>
        </button>
      </form>
    </div>
  );
};
export default SearchBox;
