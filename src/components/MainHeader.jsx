import React from 'react'
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png"
import Button from './button';
const MainHeader = () => {
  return (
    <div>
      <nav className="relative flex justify-between items-center p-5 border-b-[5px] border-purple-500" >
        <motion.img src={logo} alt="DecodeBlock"whileHover={{ scale: 1.1 }} ></motion.img>
        <Button text="Sign In" className="w-24 py-2 text-lg" />
      </nav>
     <div className="flex mt-[-1px] ">
     <span className="relative border-b-[3px] border-purple-500 after:content-[''] after:absolute after:left-0 after:bottom-[-3px] md:after:w-60 after:w-20 after:h-6  after:border-b-[3px] after:border-purple-500"></span>
      <span className="relative border-b-[3px] border-purple-500 after:content-[''] after:absolute md:after:left-90 after:left-30 after:bottom-[-3px] md:after:w-60 after:w-20 after:h-3  after:border-b-[3px] after:border-purple-500"></span>
     <span className="relative border-b-[3px] border-purple-500 after:content-[''] after:absolute md:after:left-200 after:left-60 after:bottom-[-3px] md:after:w-110 after:w-30 after:h-3  after:border-b-[3px] after:border-purple-500"></span> 
     </div>
    </div>
  )
}

export default MainHeader     




