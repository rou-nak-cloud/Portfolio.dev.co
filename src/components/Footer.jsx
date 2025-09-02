import React from "react";

const Footer = () => {
  return (
    <div className="footer w-full min-h-screen p-9 flex flex-col max-sm:mt-[270%]">
      {/* Top Section Split into Two Columns */}
      <div className="flex flex-col md:flex-row h-auto md:h-[80%] overflow-hidden">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 sm:px-10 md:px-20 py-10 md:py-50 md:mt-40 text-white text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 bg-clip-text text-transparent">
            Let’s Build Something <br className="hidden md:block" /> Amazing Together.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md mx-auto md:mx-0">
            Passionate about creating modern, scalable web applications.  
            Always exploring new technologies and turning ideas into reality.  
            Let’s collaborate and craft experiences that make an impact.
          </p>
          <button className="mt-6 max-sm:m-auto px-4 sm:px-5 py-2 bg-red-700 hover:bg-red-800 transition rounded-lg shadow-md text-sm sm:text-base cursor-none">
            Hire Me ? <span className="text-lg sm:text-xl pl-2">:)</span>
          </button>
        </div>

        {/* Right Blob Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden py-1 md:py-0">
          <div className="relative w-[250px] sm:w-[350px] md:w-[450px] h-[400px] sm:h-[600px] md:h-[850px] translate-y-45 translate-x-10 md:translate-y-100">
            <div className="absolute w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] bg-gradient-to-r from-purple-600 to-pink-500 mix-blend-multiply rounded-full opacity-70 blur-2xl animate-blob"></div>
            <div className="absolute w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] bg-gradient-to-r from-red-500 to-yellow-500 mix-blend-multiply rounded-full opacity-70 blur-2xl animate-blob animation-delay-2000"></div>
            <div className="absolute w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] bg-gradient-to-r from-blue-500 to-purple-500 mix-blend-multiply rounded-full opacity-70 blur-2xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="h-auto md:h-[20%] flex flex-col items-center justify-center gap-4 px-4 sm:px-6 md:px-10 py-6 md:py-0 text-xs sm:text-sm text-neutral-400">
        <div className="headingText text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl tracking-wide sm:tracking-widest bg-gradient-to-l from-purple-600 to-red-700 bg-clip-text text-transparent">
            Thanks for visiting my Portfolio. | &bakshi.
          </h1>
        </div>

        {/* Animated bar */}
        <div className="relative w-full flex justify-center">
          <div className="h-[3px] sm:h-[4px] w-32 sm:w-40 md:w-52 bg-red-500 animate-pulse rounded-full"></div>
        </div>

        {/* Divider line */}
        <div className="bg-gradient-to-r from-transparent via-neutral-600 to-transparent h-[1px] w-full" />

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm">
          <p className="cursor-pointer hover:text-red-400 transition">
            Terms & Conditions
          </p>
          <span className="hidden sm:block">|</span>
          <p className="cursor-pointer hover:text-red-400 transition">
            Privacy Policy
          </p>
        </div>

        {/* Bottom text */}
        <p className="text-[11px] sm:text-xs md:text-sm text-center">
          &copy; 2025 Rounak. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
