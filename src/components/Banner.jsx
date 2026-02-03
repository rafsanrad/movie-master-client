import { useEffect, useState } from "react";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 🔁 Replace with your real API endpoint
    fetch("https://movie-master-server-liart.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="carousel w-full h-[80vh]">
      {movies.map((movie, index) => (
        <div
          key={movie._id}
          id={`slide${index}`}
          className="carousel-item relative w-full"
        >
          {/* Background Image */}
          <div
            className="w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${movie.posterUrl})`,
            }}
          >
            {/* Overlay */}
            <div className="w-full h-[80vh] bg-black/70 flex items-center">
              <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center text-white">
                {/* Text Content */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {movie.title}
                  </h1>

                  <div className="flex gap-4 mb-4 text-sm">
                    <span className="badge badge-primary">{movie.genre}</span>
                    <span className="badge badge-outline">
                      ⭐ {movie.rating}
                    </span>
                    <span className="badge badge-outline">
                      {movie.releaseYear}
                    </span>
                  </div>

                  <p className="opacity-80 mb-6 line-clamp-3">
                    {movie.plotSummary}
                  </p>

                  <div className="flex gap-4">
                    <button className="btn btn-primary">Watch Trailer</button>
                    <button className="btn btn-outline text-white hover:text-black">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Poster Image */}
                <div className="hidden md:flex justify-center">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="max-h-105 rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? movies.length - 1 : index - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index === movies.length - 1 ? 0 : index + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
