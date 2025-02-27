
import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, isActive, onClick }) => {
  return (
    <div className="flex justify-center">
      <motion.button
        className={`relative inline-flex items-center justify-center h-12 md:h-14 px-5 md:px-6 min-w-max text-left whitespace-nowrap transition-all`}
        whileHover={{ scale: 1.1 }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 70"
          fill="none"
          className="absolute left-0 h-full w-full"
        >
          <path
            d="M75.2183 7.79534L75.3456 7.88201H75.4997H199.5V60.0939L185.271 67.7824H12.9377V0.5H65.4392L75.2183 7.79534Z"
            fill={isActive ? "#6E09B7" : "#D9D9D9"}
            fillOpacity={isActive ? "2" :"0.05"}
            stroke={isActive ? "#910FEF" : "#B026FF"}
            strokeWidth={isActive ? "4" : "1.5"} 
          ></path>
          <path
            d="M3.35937 63.8035H0.35V69.65H7.54843V0.349998H0.35V47.6037L3.61222 50.9673L3.70937 51.0688V51.2093V62.4535V63.8035H3.35937Z"
            fill={isActive ? "#6E09B7" : "#D9D9D9"}
            fillOpacity={isActive ? "2" :"0.05"}
            stroke={isActive ? "#910FEF" : "#B026FF"}
            strokeWidth={isActive ? "4" : "1.5"}>
            </path>
        </svg>
        <span className="relative text-sm sm:text-base md:text-lg px-3">{text}</span>
      </motion.button>
    </div>
  );
};

export default Button;


