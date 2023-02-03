import React, { useState } from "react";
import Image from "next/image";

const ProductBigImage = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="product-big-image">
      <div
        className={`product-image-tab w-tab-pane ${
          activeTab === 0 ? "w--tab-active" : ""
        }`}
      >
        <Image
          width={500}
          height={500}
          src={product["Main-Variant-Image"]}
          alt=""
          className="full-width"
        />
      </div>
      <div
        className={`product-image-tab w-tab-pane ${
          activeTab === 1 ? "w--tab-active" : ""
        }`}
      >
        <Image width={100} src="/" alt="" className="full-width" height={100} />
      </div>
      <div
        className={`product-image-tab w-tab-pane ${
          activeTab === 2 ? "w--tab-active" : ""
        }`}
      >
        <Image width={100} src="/" alt="" className="full-width" height={100} />
      </div>
      <div
        className={`product-image-tab w-tab-pane ${
          activeTab === 3 ? "w--tab-active" : ""
        }`}
      >
        <Image width={100} src="/" alt="" className="full-width" height={100} />
      </div>
      <div
        className={`product-image-tab w-tab-pane ${
          activeTab === 4 ? "w--tab-active" : ""
        }`}
      >
        <Image width={100} src="/" alt="" className="full-width" height={100} />
      </div>
      <div
        className={`product-image-tab w-tab-pane ${
          activeTab === 5 ? "w--tab-active" : ""
        }`}
      >
        <Image width={100} src="/" alt="" className="full-width" height={100} />
      </div>
    </div>
  );
};

export default ProductBigImage;
