
import React from "react";

const WatchService = () => {
  return (
    <section className="bg-gradient-to-r from-purple-950 to-black py-10 px-6 md:px-12 lg:px-24">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
        
        {/* Left Section - Stats */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div>
            <h3
              className="text-5xl md:text-6xl font-bold text-white"
              style={{ textShadow: "3px 3px 8px rgba(255, 255, 255, 1.0)" }}
            >
              150+
            </h3>
            <h4
              className="text-xl md:text-2xl text-white"
              style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 0.9)" }}
            >
              Universities Participating
            </h4>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-wrap justify-center md:justify-start mt-8 gap-6 md:gap-10">
            {[
              { value: "72+", label: "Judges" },
              { value: "21", label: "Hackathons" },
              { value: "36+", label: "Great Speakers" },
            ].map((stat, index) => (
              <div key={index} className="text-center w-32 md:w-40">
                <h3 className="text-4xl md:text-5xl font-bold text-white">{stat.value}</h3>
                <h4 className="text-lg md:text-xl text-gray-300">{stat.label}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Video */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/gi1kkMbfNAE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WatchService;
