import axios from "axios";

const GetMovies = async (value = "all") => {  
  const url = process.env.REACT_APP_ENDPOINTMOVIES.concat(value);
  let dataMovies = {};
  try {
    dataMovies = await axios(url);
  } catch (err) {
    console.log(err);
  }
  return dataMovies;
};

const GetMoviesId = async (value) => {
  const url = process.env.REACT_APP_ENDPOINTID.concat(value);
  let dataMovies = {};
  try {
    dataMovies = await axios(url);
  } catch (err) {
    console.log(err);
  }
  return dataMovies;
};

export { GetMovies, GetMoviesId };
