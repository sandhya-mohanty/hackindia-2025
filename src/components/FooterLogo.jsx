// import React from "react";
// import img14 from "../assets/images/img14.png";
// import img15 from "../assets/images/img15.jpg";
// import img16 from "../assets/images/img16.jpg";
// import img17 from "../assets/images/img17.png"; // Fixed typo (ing4 to img4)
// import img12 from "../assets/images/img12.jpeg";
// import img7 from "../assets/images/img7.webp";


// const FooterLogo = () => {
//   return (
//     <div className="flex justify-betwee bg-white w-full">
//       <div className="flex  gap-17 w-full  px-15">
//         {[img14, img15, img16, img17, img12, img7].map(
//           (image, index) => (
//             <img key={index} src={image} alt="logo" className="w-48 h-24  " />
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default FooterLogo;







import React from "react";
import img14 from "../assets/images/img14.png";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";
import img17 from "../assets/images/img17.png";
import img12 from "../assets/images/img12.jpeg";
import img7 from "../assets/images/img7.webp";

const FooterLogo = () => {
  return (
    <div className="bg-white w-full py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center px-6 md:px-12 lg:px-16">
        {[img14, img15, img16, img17, img12, img7].map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`logo-${index}`} 
            className="w-28 h-16 md:w-36 md:h-20 object-contain" 
          />
        ))}
      </div>
    </div>
  );
};

export default FooterLogo;

