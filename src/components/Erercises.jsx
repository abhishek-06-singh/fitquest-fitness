import React, { useEffect, useState } from "react";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Erercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  //   Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) return <div>loading....</div>;

  return (
    <div id="exercises" className="mt-12 p-5">
      <div className="w-full flex">
        <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl mx-auto mb-4">
          Result <span className="text-purple-400">Exercises</span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {currentExercises.map((exercise, idx) => (
          <>
            <ExerciseCard key={idx} exercise={exercise} />
          </>
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        {/* {exercises.length > 9 && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(exercises.length / exercisesPerPage)}
            onPageChange={paginate}
          />
        )} */}
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    onPageChange(null, newPage);
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`px-4 py-2 rounded-full ${
            currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Erercises;
