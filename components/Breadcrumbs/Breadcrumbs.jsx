import React from "react";
import Link from "next/link";
import Image from "next/image";

const Breadcrumbs = (props) => {
  return (
    <div className="breadcrumbs">
      <Link href="/">
        <div className="link-dark cursor-pointer">Home</div>
      </Link>
      <Image
        width={18}
        height={18}
        src="/images/right.svg"
        alt=""
        className="breadcrumbs-divider"
      />

      <div>{props.page}</div>
    </div>
  );
};

export default Breadcrumbs;
