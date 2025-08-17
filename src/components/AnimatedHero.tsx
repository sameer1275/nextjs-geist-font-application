import React from "react";

export default function AnimatedHero() {
  const heroImage = "https://placehold.co/1920x1080?text=Striking+fashion+and+cutting-edge+electronics+landing+banner";
  
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Striking landing banner showcasing modern clothing and innovative electronics in an urban setting"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.style.display = "none";
        }}
        className="absolute w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-6 px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-slideUp">
          Discover the Ultimate Style
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto animate-slideUp" style={{animationDelay: '0.2s'}}>
          Explore latest trends in clothing and innovative electronics
        </p>
        <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-slideUp" style={{animationDelay: '0.4s'}}>
          Shop Now
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
