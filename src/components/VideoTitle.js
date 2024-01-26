import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[15%] px-12 bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl my-5 text-white">{title}</h1>
      <p className="w-1/4 my-5 text-white text-lg">{overview}</p>
      <div>
        <button className="bg-white px-8 py-2 text-black text-lg mr-4 rounded-md hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 px-8 py-2 text-white text-lg rounded-md bg-opacity-80 hover:bg-opacity-100">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
