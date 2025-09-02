import React from "react";

const Footer = () => {
  return (
    <div className="footer w-full h-screen flex flex-col">
      {/* Top Section Split into Two Columns */}
      <div className="flex h-[80%] overflow-hidden">
        {/* Left Text Section */}
        <div className="w-1/2 flex flex-col items-start justify-center px-10 sm:px-20 text-white">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 leading-none bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 bg-clip-text text-transparent">
            Let’s Build Something <br /> Amazing Together.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md">
            Passionate about creating modern, scalable web applications.  
            Always exploring new technologies and turning ideas into reality.  
            Let’s collaborate and craft experiences that make an impact.
          </p>
          <button className="mt-6 px-5 py-2 bg-red-700 hover:bg-red-800 transition rounded-lg shadow-md text-sm sm:text-base cur-none">
            Hire Me <span className="text-xl pl-2">:)</span>
          </button>
        </div>

        {/* Right Blob Section */}
        <div className="w-1/2 flex items-center justify-center relative overflow-hidden">
          <div className="relative w-[450px] h-[850px] translate-y-90">
            <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-purple-600 to-pink-500 mix-blend-multiply rounded-full opacity-70 blur-2xl animate-blob"></div>
            <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-red-500 to-yellow-500 mix-blend-multiply rounded-full opacity-70 blur-2xl animate-blob animation-delay-2000"></div>
            <div className="absolute w-[200px] h-[200px] bg-gradient-to-r from-blue-500 to-purple-500 mix-blend-multiply rounded-full opacity-70 blur-2xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="h-[20%] flex flex-col items-center justify-center gap-4 px-5 sm:px-10 text-sm text-neutral-400">
        <div className="headingText">
            <h1 className="text-2xl tracking-widest bg-gradient-to-l from bg-purple-600 to-red-700 bg-clip-text text-transparent">Thanks for visiting my Portfolio.</h1>
        </div>
        {/* Animated bar */}
        <div className="relative w-full flex justify-center">
          <div className="h-[4px] w-52 bg-red-500 animate-pulse rounded-full"></div>
        </div>

        {/* Divider line */}
        <div className="bg-gradient-to-r from-transparent via-neutral-600 to-transparent h-[1px] w-full" />

        {/* Links */}
        <div className="flex gap-3 text-xs sm:text-sm">
          <p className="cursor-pointer hover:text-red-400 transition">
            Terms & Conditions
          </p>
          <span>|</span>
          <p className="cursor-pointer hover:text-red-400 transition">
            Privacy Policy
          </p>
        </div>

        {/* Bottom text */}
        <p className="text-xs sm:text-sm">
          &copy; 2025 Rounak. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
