import React from "react";
import HeaderIntro from "./../Hero/InnerHero";
import Breadcrumbs from "./../Breadcrumbs/Breadcrumbs";

const Wrapper = () => {
  return (
    <div className="wrapper page-header-wrapper">
      <HeaderIntro />
      <Breadcrumbs />
    </div>
  );
};

export default Wrapper;
