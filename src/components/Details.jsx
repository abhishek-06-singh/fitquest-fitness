import React from "react";
import BodyPartImage from "../utils/icons/body-part.png";
import TargetImage from "../utils/icons/target.png";
import EquipmentImage from "../utils/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-4xl font-semibold leading-7 text-purple-600">
                Exercises keep you strong.{" "}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {name}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                bup is one of the best exercises to target your {target}. It
                will help you improve your mood and gain energy.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {extraDetail.map((item) => (
                  <div key={item.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 ">
                      <img
                        src={item.icon}
                        className="absolute left-1 top-1 h-14 w-14 text-purple-600"
                        aria-hidden="true"
                      />
                    </dt>{" "}
                    <p className="ml-10 mt-14 text-2xl font-bold">
                      {item.name}
                    </p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={gifUrl}
            className="w-[18rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[37rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
