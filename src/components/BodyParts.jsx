import React from "react";
import backimg from "../utils/back.jpg";
import cardioimg from "../utils/cardio.jpg";
import chest from "../utils/chest.jpg";
import lowerarms from "../utils/lowerarms.jpg";
import lowerlegs from "../utils/lowerlegs.jpg";
import neck from "../utils/neck.jpg";
import shoulder from "../utils/shoulder.jpg";
import upperarms from "../utils/upperarms.jpg";
import upperleg from "../utils/upperleg.jpg";
import waist from "../utils/waist.jpg";
import all from "../utils/all.jpg";

const BodyParts = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  // Mapping body part names to images
  const images = {
    all: all,
    back: backimg,
    cardio: cardioimg,
    chest: chest,
    "lower arms": lowerarms,
    "lower legs": lowerlegs,
    neck: neck,
    shoulders: shoulder,
    "upper arms": upperarms,
    "upper legs": upperleg,
    waist: waist,
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((item) => (
            <div
              key={item}
              className="group"
              onClick={() => {
                setBodyPart(item);
               
              }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={images[item]} // Use the image mapping here
                  alt={item}
                  className="h-44 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>

              <p className="mt-1 text-lg font-medium text-gray-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyParts;
