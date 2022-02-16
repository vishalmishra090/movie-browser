import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Home = React.lazy(() => {
  return import("./views/components/Home");
});

const MovieDetails = React.lazy(() => {
  return import("./views/components/MovieDetails");
});

const Search = React.lazy(() => {
  return import("./views/components/Search");
});

const routes = (props) => (
  <Routes>
    <Route path="/" element={<Home />}>
      {["upcoming", "popular", "top_rated", "now_playing"].map((value, i) => (
        <Route path={value} element={<Home />} key={i}>
          <Route path=":page" element={<Home />} />
        </Route>
      ))}
    </Route>
    <Route path="/movie">
      <Route index element={<Navigate to="/" />} />
      <Route path=":movieId" element={<MovieDetails />} />
    </Route>
    <Route path="/search">
      <Route index element={<Navigate to="/" />} />
      <Route path=":query" element={<Search />} />
      <Route path=":query/:page" element={<Search />} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default routes;
