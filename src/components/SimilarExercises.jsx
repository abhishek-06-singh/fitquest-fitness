import React from "react";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <>
      <div className="bg-white mb-44">
        <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Similar <span className="text-purple-400">Equipment</span>{" "}
              exercises
            </h2>
          </div>

          <div className="mt-4 flow-root ">
            <div className="-my-2">
              <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                  {equipmentExercises.map((category) => (
                    <div
                      key={category.bodyPart}
                      className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          src={category.gifUrl}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                      />
                      <span className="relative mt-auto text-center text-xl font-bold text-white">
                        {category.target}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <div className="bg-white pb-10 lg:pb-44">
          <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Similar <span className="text-purple-400">Target Muscle</span>{" "}
                exercises
              </h2>
            </div>

            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                  <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                    {targetMuscleExercises.map((category) => (
                      <div
                        key={category.bodyPart}
                        className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                      >
                        <span aria-hidden="true" className="absolute inset-0">
                          <img
                            src={category.gifUrl}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                        />
                        <span className="relative mt-auto text-center text-xl font-bold text-white">
                          {category.target}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarExercises;
