import React from "react";
import Header from "./components/Header";
import MiddleLogo from "./components/MiddleLogo";
import FooterLogo from "./components/FooterLogo";
import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";
import Hero from "./components/Hero";
import WatchService from "./components/WatchService";
const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <MainHeader />
      <Hero />
      <MiddleLogo />
      <WatchService />
      <FooterLogo />
      <Footer />
    </div>
  );
};

export default App;
