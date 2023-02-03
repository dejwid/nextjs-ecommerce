import React from "react";
import Image from "next/image";

const Pagination = () => {
  return (
    <div
      role="navigation"
      aria-label="List"
      className="w-pagination-wrapper pagination"
    >
      <div className="pagination-left">
        <a
          data-w-id="b0203fec-81be-377d-d9e6-38cd0e377376"
          href="#"
          aria-label="Previous Page"
          className="w-pagination-previous button ghost"
        >
          <div
            data-w-id="f9c3e698-97f0-a37f-efdd-36cd46e58457"
            className="button-icon-wrapper"
          >
            <Image
              layout="fill"
              objectFit="contain"
              src="images/arrow-left-white.svg"
              alt=""
              className="button-icon left"
            />
          </div>
          <div className="w-inline-block">Previous</div>
        </a>
      </div>
      <div
        aria-label="Page 1 of 1"
        role="heading"
        className="w-page-count page-count"
      ></div>
      <div className="pagination-right">
        <a
          data-w-id="b0203fec-81be-377d-d9e6-38cd0e37737a"
          href="#"
          aria-label="Next Page"
          className="w-pagination-next button ghost border"
        >
          <div className="w-inline-block">Next</div>
          <div
            data-w-id="3d763877-d923-aa07-51aa-835965d8ccbd"
            className="button-icon-wrapper w-clearfix"
          >
            <Image
              layout="fill"
              objectFit="contain"
              src="images/arrow-right-white.svg"
              alt=""
              className="button-icon right"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Pagination;
