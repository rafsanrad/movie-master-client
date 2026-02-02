import React from "react";
import Banner from "../components/Banner";
import Genres from "../components/Genres";
import AboutPlatform from "../components/AboutPlatform";
import { useLoaderData } from "react-router";
import { MovieCard } from "../components/MovieCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="-mt-2.5">
      <Banner></Banner>

      <div className="text-center text-3xl font-bold mt-10">
        Latest <span className="text-primary">Movie</span>
      </div>

      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {data.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
      <Genres></Genres>
      <AboutPlatform></AboutPlatform>
    </div>
  );
};

export default Home;
