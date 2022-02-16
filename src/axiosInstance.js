import axios from "axios";
import config from "./config";

export const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: config.MOVIE_DB_API_KEY,
    language: "en-US"
  }
});