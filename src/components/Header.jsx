
import React, { useState } from "react";
import Button from "./button";

const Header = () => {
  const [activeButton, setActiveButton] = useState("Overview");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 p-4">
      {/* Logo Section */}
      <h3 className="text-2xl text-white text-center">
        <span className="bg-orange-500 px-1 mx-3 font-bold text-3xl rounded-md shadow-[4px_4px_0px_0px_green]">
          H
        </span>
        ACKINDIA
      </h3>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center items-center border border-purple-500 bg-purple-950 rounded-lg p-2 md:py-3 md:px-4 gap-2">
        {["Overview", "Create Team", "Prize & Sponsors", "FAQs", "Judging & Rules", "Resources"].map((btnText) => (
          <Button
            key={btnText}
            text={btnText}
            isActive={activeButton === btnText}
            onClick={() => setActiveButton(btnText)}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;

