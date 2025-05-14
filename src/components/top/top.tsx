import React from "react";

const TopSection: React.FC = () => {
  return (
    <div className="relative w-full h-[750px] overflow-hidden ">
      {/* Background Image Layer */}
      <div
        className="absolute inset-10 bg-cover bg-center z-0 -mt-10 -mb-10 -mr-25"
        style={{ backgroundImage: "url('/images/top/image.png')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E3F4FD]/70 to-[#D0EDFF]/70 z-10" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center pl-15 pr-2 py-35 w-full h-full">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl font-bold text-[#2B7A6F] mb-4">
            Transform with Every Step
          </h1>
          <p className="text-[#005B8F] mb-8">
            Watch your progress — from your first walk to your fittest self.
          </p>
          <button className="bg-[#005B8F] hover:bg-[#34c28b] transition-colors text-white px-6 py-3 rounded-lg">
            Start Tracking
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
          <img
            src="/images/top/fit.png"
            alt="Fitness transformation GIF"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
