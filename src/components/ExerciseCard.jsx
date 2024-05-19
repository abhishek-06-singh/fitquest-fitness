import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => (
  <div className="">
    <div className="relative">
      <div className="relative h-72 w-full overflow-hidden rounded-lg">
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative mt-4">
        <h3 className="text-sm font-medium text-gray-900">
          {exercise.bodyPart}
        </h3>
        <p className="mt-1 text-sm text-gray-500"> {exercise.target}</p>
      </div>
      <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
        />
        <p className="relative text-lg font-semibold text-white">
          {exercise.name}
        </p>
      </div>
    </div>
    <div className="mt-6">
      <Link
        to={`/exercise/${exercise.id}`}
        className="relative flex items-center justify-center rounded-md border border-transparent bg-purple-500 px-8 py-2 text-sm font-medium  hover:bg-purple-600 text-white"
      >
        View Details<span className="sr-only"></span>
      </Link>
    </div>
  </div>
);

export default ExerciseCard;
