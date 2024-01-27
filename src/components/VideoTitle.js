import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-6 md:pt-[15%] md:px-12 bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl md:text-6xl md:my-5 text-white">
        {title}
      </h1>
      <p className="hidden md:inline-block md:w-1/4 md:my-5 md: text-white md:text-lg">
        {overview}
      </p>
      <div>
        <button className="bg-white px-2 py-1 md:px-8 md:py-2 text-black md:text-lg mr-4 rounded-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 px-2 py-1 md:px-8 md:py-2 text-white md:text-lg rounded-md bg-opacity-80 hover:bg-opacity-100">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
