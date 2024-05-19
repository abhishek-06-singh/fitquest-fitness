import React, { useEffect, useState } from "react";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import BodyParts from "./BodyParts";
const SearchBar = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-tr from-violet-100 to-red-100 px-6 py-24 shadow-xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
              Awesome Exercises You Should Know
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-700">
              Explore a curated list of essential exercises designed to boost
              your fitness journey. Achieve your health goals with these
              must-know workouts.
            </p>
            <div className="mx-auto mt-10 flex max-w-full gap-x-4 flex-col lg:flex-row md:flex-row gap-3">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="text"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className="w-full md:w-4/5 lg:w-4/5 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-800 shadow-sm  outline-none"
                placeholder="Search
              Exercise"
              />
              <button
                onClick={handleSearch}
                className="flex-none lg:w-1/5 md:w-1/5 w-2/5 mx-auto rounded-md bg-purple-600 text-white px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Search
              </button>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#FFF" />
                  <stop offset={1} stopOpacity={0} stopColor="#FFF" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <BodyParts
        data={bodyParts}
        bodyParts
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </>
  );
};

export default SearchBar;
