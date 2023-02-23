import React, { useState, useEffect } from "react";
import "../../style/Blog/Categories.css";
import { Cats } from "../../assets/ExampleData.js";

const Categories = () => {
  const [Container, SetContainer] = useState("Categories");
  const [BtnValue, SetBtnValue] = useState("بیشتر +");
  const [Links, SetLink] = useState([]);
  useEffect(() => {
    const array = [];
    Cats.map((item, index) => {
      array.push(
        <a key={index} href={item.url} className="Categories-Categorie">
          {item.name}
        </a>
      );
      SetLink(array);
    });
  }, []);

  function ContainerActivator() {
    if (Container == "Categories") {
      SetContainer("Categories Active");
      SetBtnValue("کمتر -");
    } else {
      SetContainer("Categories");
      SetBtnValue("بیشتر +");
    }
  }
  return (
    <div className={Container}>
      <span className="Categories-Title">دسته ها:</span>
      {Links}
      <div className="Categories-More">
        <span className="Categories-MoreBtn" onClick={ContainerActivator}>
          {BtnValue}
        </span>
      </div>
    </div>
  );
};
export default Categories;
