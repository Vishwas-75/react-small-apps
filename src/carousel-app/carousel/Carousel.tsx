import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const item = [
  {
    id: 1,
    imgUrl:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    name: "Mascara",
  },
  {
    id: 2,
    imgUrl:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    name: "Mirror",
  },
  {
    id: 3,
    imgUrl:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    name: "Canister",
  },
];

function Carousel() {
  const [active, setActive] = useState(0);
  const timeIntervalRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    timeIntervalRef.current = setInterval(() => {
      setActive((prev) => (prev >= item.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => {
      if (timeIntervalRef.current) clearInterval(timeIntervalRef.current);
    };
  }, []);

  const next = () => {
    setActive((prev) => (prev === item.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev === 0 ? item.length - 1 : prev - 1));
  };
  return (
    <div className="carousel-wrapper">
      <div className="btn_wrapper">
        <span>
          <button onClick={prev} disabled={active === 0} className="btn">
            &lt;
          </button>
        </span>
      </div>
      <div>
        <img src={item[active].imgUrl} className="image_wrapper" />
      </div>
      <div className="btn_wrapper">
        <span>
          <button onClick={next} disabled={item.length - 1 === active} className="btn">
            &gt;
          </button>
        </span>
      </div>
    </div>
  );
}

export default Carousel;
