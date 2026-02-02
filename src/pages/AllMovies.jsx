import React from "react";
import { useLoaderData } from "react-router";
import { MovieCard } from "../components/MovieCard";

const AllMovies = () => {
  const data = useLoaderData();

  return (
    <div>
      <p className=" text-center text-2xl mb-10 font-semibold ">Movie Master Pro</p>
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
