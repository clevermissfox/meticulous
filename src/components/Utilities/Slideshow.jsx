import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const media = [
  "https://images.squarespace-cdn.com/content/v1/624c6c57c2a5aa0a7fda8af2/2ff1a79c-ff7e-4dc9-8a4e-7040960ec5a7/Ergo+Lift+with+Hand.jpg",
  "https://images.squarespace-cdn.com/content/v1/624c6c57c2a5aa0a7fda8af2/ff5a2300-7194-4f9f-bf55-282a2a4152a2/IMG-66.jpg",
  "https://images.squarespace-cdn.com/content/v1/624c6c57c2a5aa0a7fda8af2/68445e9c-4eb6-4de3-a103-88af285ccc96/100+subs-2.jpg",
  "https://academy.themeticulousmanicurist.com/wp-content/uploads/2022/08/Lori-Halloway-Pedicure-Room.jpeg",
  // "https://images.squarespace-cdn.com/content/v1/624c6c57c2a5aa0a7fda8af2/9cc01f6e-82e7-4e54-83e4-3a49fc13d4bd/client+selfies.gif",
];

export default function Slideshow() {
  const responsiveSettings = [
    {
      breakpoint: 1024, // Large screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Smaller screens (e.g., tablets)
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Mobile screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  return (
    <div className="slide-container">
      <Slide responsive={responsiveSettings}>
        {media.map((url, index) => (
          <div key={index} className="each-slide">
            <div
              style={{
                backgroundImage: `url(${url})`,
                aspectRatio: "2 /1",
                backgroundSize: "cover",
                backgroundPosition:
                  index === 1 || index === 3 ? "center 30%" : "center center",
              }}
            >
              {index === 0 && (
                <div className="caption">
                  <p>Ergo Lift</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
