import Image from "next/image";

const ProductThumbs = ({ product, images }) => {
  return (
    <div className="tabs-thumbs-menu w-tab-menu">
      {images?.map((img, index) => (
        <button
          key={index}
          data-w-tab={`Tab ${index + 1}`}
          className={`product-thumbs w-inline-block w-tab-link ${
            index === 0 ? "w--current" : ""
          }`}
        >
          <div className="product-thumb-wrapper">
            <Image
              width={100}
              height={100}
              src={img}
              alt=""
              className="product-thumb"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default ProductThumbs;
