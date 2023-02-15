import React, { useState, useEffect } from "react";
import "../../style/Blog/Categories.css";
import { Cats } from "../../assets/ExampleData.js";

const Categories = () => {
  const [Container, SetContainer] = useState("Container");
  const [BtnValue, SetBtnValue] = useState("بیشتر +");

  function ContainerActivator() {
    if (Container == "Container") {
      SetContainer("Container Active");
      SetBtnValue("کمتر -");
    } else {
      SetContainer("Container");
      SetBtnValue("بیشتر +");
    }
  }
  return (
    <div className={Container}>
      <span className="Title">دسته ها:</span>
      {Cats.map((item, index) => {
        return (
          <a key={index} href={item.url} className="Categorie">
            {item.name}
          </a>
        );
      })}
      <div className="More">
        <span className="MoreBtn" onClick={ContainerActivator}>
          {BtnValue}
        </span>
      </div>
    </div>
  );
};
export default Categories;
