import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/LanguagesConstants";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);

  return (
    <div className="flex justify-center pt-[10%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black p-4 grid grid-cols-12"
      >
        <input
          className="p-4 border border-black col-span-9 mr-4"
          placeholder={language[langKey].searchPlaceholder}
        />
        <button className="p-4 bg-red-700 text-white rounded-md col-span-3">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
