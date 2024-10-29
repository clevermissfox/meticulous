import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Slide>
        {media.map((url, index) => (
          <div key={index} className="each-slide">
            <div
              style={{
                backgroundImage: `url(${url})`,
                height: "400px",
                backgroundSize: "cover",
              }}
            >
              {/* You can add captions or other content here */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
