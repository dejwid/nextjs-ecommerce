import Link from "next/link";
import Image from "next/image";

const bios = [
  {
    name: "Melissa Campbell",
    username: "melissacampbell10",
    bio: "Hello, my name is Melissa! I'm the oldest sister. I am in",
    imageSrc: "/images/IMG_7999.jpg",
    imageWidth: 380,
    imageHeight: 580,
  },
  {
    name: "Krista James",
    username: "krista_wildcat_james",
    bio: "Hello, my name is Krista! I am the middle sister in our three sister trio. I am a mother of two children. I am an earthy lady that loves adventure, waterfalls, crystals, rituals, gardening, and swimming. I am passionate about empowering women to follow their intuition and live authentically. I am a skilled Tarot Reader, Reiki Healer, and Intuition Coach.",
    imageSrc: "/images/IMG_8493.jpg",
    imageWidth: 380,
  },
  {
    name: "Rachelle",
    username: "",
    bio: "",
    imageSrc: "/images/Rachelle.JPG",
    imageWidth: 380,
  },
];

function BioSection() {
  return (
    <div className="section big-image-section bio-section wf-section">
      <div className="wrapper">
        <div className="top-personal-bio">
          <h2>Who We Are</h2>
          <div className="divider"></div>
        </div>
        {bios.map((bio, i) => (
          <div
            className={`side-blocks mobile-reverse ${
              i % 2 === 0 ? "white-bg" : "bg-light"
            } pt-60`}
            key={bio.name}
          >
            <div className="side-block small-padding-side about-block">
              <Image
                src={bio.imageSrc}
                width={500}
                height={700}
                alt=""
                className="about-photo"
              />
            </div>
            <div className="side-block no-padding-left">
              <div className="side-info">
                <h2 className="name">{bio.name}</h2>
                {bio.username && (
                  <div className="title handle">
                    <Link
                      href={`https://www.instagram.com/${bio.username}/`}
                      target="_blank"
                      className="username-link"
                    >
                      <>@{bio.username}</>
                    </Link>
                  </div>
                )}
                <div className="divider"></div>
                {bio.bio && <p className="text-grey">{bio.bio}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BioSection;
