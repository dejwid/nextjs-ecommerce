import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// .instagram-hover-icon {
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   opacity: 0;
//   transition: opacity 0.3s;
// }

// .instagram-hover-icon.visible {
//   opacity: 1;
// }

function InstagramSection(props) {
  const [images, setImages] = useState([
    { src: "/images/27.png", alt: "" },
    { src: "/images/28.png", alt: "" },
    { src: "/images/23.png", alt: "" },
    { src: "/images/25.png", alt: "" },
  ]);

  return (
    <div className="section wf-section">
      <div className="wrapper">
        <div className="instagram">
          <div className="instagram-previews">
            {images.map((img, i) => (
              <Link
                key={i}
                href="https://www.instagram.com/3sistersboutiquepnw/"
                target="_blank"
                data-w-id={`bc3f6503-4361-3a4d-864e-8184f3edd7e${5 + i}`}
                className="instagram-photo-link w-inline-block max-w-xs"
              >
                <div className="relative overflow-hidden w-1/2 p-2 flex-initial">
                  <div
                    className={`instagram-hover-icon${
                      i === 0 ? " visible" : ""
                    }`}
                  ></div>
                  <Image
                    src={img.src}
                    width={300}
                    height={300}
                    alt={img.alt}
                    className="instagram-photo"
                  />
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="https://www.instagram.com/threesisters.pnw/"
            target="_blank"
            className="instagram-info w-inline-block"
          >
            <div className="relative z-10 flex flex-col p-6 justify-center items-center flex-1 bg-slate-200 text-black text-center no-underline">
              <Image
                width={144}
                height={144}
                src="/images/icons-2.svg"
                alt=""
                className="instagram-logo mb-10 inline-block"
              />
              <div className="title">
                <span className="text-color">Follow</span> Us on
              </div>
              <h2 className="instagram-heading">Instagram</h2>
            </div>
          </Link>
          <div className="instagram-previews">
            {images.map((img, i) => (
              <Link
                key={i}
                href="https://www.instagram.com/3sistersboutiquepnw/"
                target="_blank"
                data-w-id={`bc3f6503-4361-3a4d-864e-8184f3edd7e${5 + i}`}
                className="instagram-photo-link w-inline-block max-w-xs"
              >
                <div className="relative overflow-hidden w-1/2 p-2 flex-initial">
                  <div
                    className={`instagram-hover-icon${
                      i === 0 ? " visible" : ""
                    }`}
                  ></div>
                  <Image
                    src={img.src}
                    width={300}
                    height={300}
                    alt={img.alt}
                    className="instagram-photo"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramSection;
