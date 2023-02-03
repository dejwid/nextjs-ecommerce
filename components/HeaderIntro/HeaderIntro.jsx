import React from "react";

const HeaderIntro = (props) => {
  return (
    <div className="header-intro">
      <div className="title">
        <span className="text-color">{props.subTitleHighlight || `Best`}</span>{" "}
        {props.subTitleMain || `Sellers`}
      </div>
      <h1 className="page-heading">{props.title || `Our Catalog`}</h1>
      <div className="divider color"></div>
    </div>
  );
};

export default HeaderIntro;
