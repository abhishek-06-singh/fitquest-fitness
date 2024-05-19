export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "d1aa7a6816msh0c046b80befa76ep1e9f5bjsn6717eb0009d6",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "d1aa7a6816msh0c046b80befa76ep1e9f5bjsn6717eb0009d6",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
