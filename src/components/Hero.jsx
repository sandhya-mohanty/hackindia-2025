
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Header from "./Header";
import singularityLogo from "../assets/images/singularityLogo.png"
const Hero = () => {

  // Generate random bubble positions
  const bubbles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 20) + 20,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative flex flex-col items-center text-center py-12 px-4 overflow-hidden">
      {/* Background Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-purple-500 opacity-10 pointer-events-none"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            top: bubble.top,
          }}
          initial={{ scale: 0 }}
          animate={{
            y: [0, -100, 0],
            scale: [0, 1, 0.8],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="mb-4">
        <Header />
      </div>
      <div className="flex justify-evenly py-6">
        <div>
          <img
            src={singularityLogo}
            alt="img"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          ></img>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <h3 className="text-4xl">SingularityNET</h3>
        </div>{" "}
      </div>

      {/* Animated Title */}
      <motion.h2
        className="text-5xl md:text-8xl font-extrabold text-white leading-tight relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="bg-orange-500 px-2">Ha</span>ckIndia2025
      </motion.h2>

      {/* Subtitle */}
      <p className="text-xl md:text-4xl mt-4 text-gray-300 font-[Roboto] relative z-10">
        India's Biggest Web3 & AI Hackathon
      </p>

      {/* Event Date Button */}
      <motion.button
        className="mt-6 bg-gradient-to-r from-purple-600 to-purple-950 px-6 md:px-10 py-3 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-purple-500 transition relative z-10"
        whileHover={{ scale: 1.1 }}
      >
        <h2 className="text-2xl"> February 28 - September 28</h2>
      </motion.button>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-8 relative z-10">
        {[
          { value: "150+", label: "Prize Pool", sym: "|" },
          { value: "72+", label: "Universities", sym: "|" },
          { value: "21+", label: "Students" },
        ].map((stat, index) => (
          <div key={index} className="flex items-center w-auto">
            <h3 className="text-sm md:text-2xl font-bold text-orange-400 md:mx-2">
              {stat.value}
            </h3>
            <h4 className="text-sm md:text-xl text-gray-300">{stat.label}</h4>
            {stat.sym && (
              <span className="text-white ml-4 md:ml-13 text-center md:text-xl text-lg">
                {stat.sym}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Register Button */}
      <Button text="Register Now" className="relative z-10" />
    </div>
  );
};

export default Hero;
