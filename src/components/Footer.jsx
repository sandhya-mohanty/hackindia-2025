          
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-6 px-6 md:px-16">
      {/* Footer Container */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Copyright */}
        <div className="flex text-lg md:text-2xl gap-2 md:gap-4">
          <h3>Copyright</h3>
          <h3>© 2024 Decodeblock</h3>
        </div>

        {/* Right Section - Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-12 mt-4 md:mt-0">
          {[
            { label: "Help Center", sym: "|" },
            { label: "Terms & Conditions", sym: "|" },
            { label: "Privacy Policy", sym: "" },
          ].map((stat, index) => (
            <div key={index} className="flex md:items-center w-auto">
              <h4 className="text-sm md:text-lg text-gray-300">{stat.label}</h4>
              {stat.sym && (
                <span className="text-white ml-2 md:ml-8 md:text-lg text-sm">{stat.sym}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
