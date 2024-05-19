import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <span>wait....</span>;
  return (
    <>
      <div className="w-full flex">
        <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-4xl mx-auto px-5 lg:px-0">
          Watch <span className="text-purple-400"> {name} </span>
          exercise videos Unlock your potential fitness
        </h1>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 lg:px-24 px-5 mt-10 "
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <li key={index} className="relative">
            <a
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  className="pointer-events-none w-full group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View details for {item.video.title}
                  </span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {item.video.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">
                {item.video.channelName}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExerciseVideos;
