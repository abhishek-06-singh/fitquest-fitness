import React, { useEffect } from "react";
import BIRDS from "vanta/src/vanta.birds";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const VentaBirds = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const navigate = useNavigate();

  useEffect(() => {
    BIRDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xffffff,
      color1: 0x252ec8,
      color2: 0x7800ff,
      backgroundAlpha: 0.69,
    });
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full h-screen z-40" id="vanta"></div>
      <IoMdArrowRoundBack
        onClick={() => navigate("/")}
        className="text-3xl absolute top-32 left-10 z-50 cursor-pointer"
      />
      <motion.div
        className="z-50 text-black text-6xl top-60 left-20 absolute font-bold tracking-tighter w-auto lg:block md:block hidden"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {bodyPart} Exercise videos and previews are ready.
      </motion.div>
      <motion.div
        className="z-50 text-black text-xl top-80 left-24 absolute font-bold tracking-tighter w-[36rem] lg:block md:block hidden"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Introducing our new collection of exercise videos and previews, designed
        to help you achieve your fitness goals with ease and convenience.
        Whether you're a beginner looking to start your fitness journey or an
        experienced athlete aiming to enhance your routine, our videos offer
        something for everyone.
      </motion.div>
      <motion.div
        className="z-50 text-black text-5xl top-40 left-10 absolute font-bold tracking-tighter w-auto lg:hidden md:hidden block"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {bodyPart} Exercise videos and previews are ready.
      </motion.div>
      <motion.div
        className="z-50 text-black text-sm top-96 left-10 absolute font-bold tracking-tighter w-auto lg:hidden md:hidden block"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Introducing our new collection of exercise videos and previews, designed
        to help you achieve your fitness goals with ease and convenience.
        Whether you're a beginner looking to start your fitness journey or an
        experienced athlete aiming to enhance your routine, our videos offer
        something for everyone.
      </motion.div>
    </div>
  );
};

export default VentaBirds;
