import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { MovieCard } from "../components/MovieCard";

const AllMovies = () => {
  const data = useLoaderData();
  //   console.log(data)
  const [movies, setMovies] = useState(data);
  //   const [loading, setLoading] = useState(false);

  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     const search_text = e.target.search.value;
  //     console.log(search_text);
  //     setLoading(true);

  //     fetch(`https://3d-model-server.vercel.app/search?search=${search_text}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setModels(data);
  //         setLoading(false);
  //       });
  //   };

  return (
    <div>
      <p className=" text-center text-2xl font-semibold ">Movie Master Pro</p>

      <form
        // onSubmit={handleSearch}
        className=" mt-5 mb-10 flex gap-2 justify-center"
      >
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn btn-primary  rounded-full">
          {/* {loading ? "Searching...." : "Search"} */}
        </button>
      </form>

      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMovies;
