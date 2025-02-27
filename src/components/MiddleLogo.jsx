
import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.webp";
import img8 from "../assets/images/img8.jpeg";
import img9 from "../assets/images/img9.png";
import img10 from "../assets/images/img10.jpeg";
import img11 from "../assets/images/img11.png";
import img12 from "../assets/images/img12.jpeg";
import img13 from "../assets/images/img13.jpeg";

const MiddleLogo = () => {
  return (
    <div className="bg-white py-4">
      <div className=" mx-auto ">
        <div className="grid grid-cols-3  md:grid-cols-13 gap-4 md:gap-10 place-items-center">
          {[
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
          ].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`logo-${index + 1}`}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleLogo;

