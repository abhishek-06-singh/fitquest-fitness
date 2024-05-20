export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "dc09146675mshe2e9a492b64049ep1913cdjsn752f1bbf48c8",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "dc09146675mshe2e9a492b64049ep1913cdjsn752f1bbf48c8",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
