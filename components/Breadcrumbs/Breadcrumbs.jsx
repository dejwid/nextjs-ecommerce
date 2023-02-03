import React from "react";
import Link from "next/link";
import Image from "next/image";

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <Link href="/">
        <a className="link-dark">Home</a>
      </Link>
      <Image
        layout="fill"
        objectFit="contain"
        src="/images/right.svg"
        alt=""
        className="breadcrumbs-divider"
      />
      <div>Shop</div>
    </div>
  );
};

export default Breadcrumbs;
