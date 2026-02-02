import React from "react";

const genres = [
  { name: "Action", icon: "🔥" },
  { name: "Drama", icon: "🎭" },
  { name: "Comedy", icon: "😂" },
  { name: "Sci-Fi", icon: "🚀" },
  { name: "Horror", icon: "👻" },
  { name: "Romance", icon: "❤️" },
  { name: "Thriller", icon: "🕵️" },
  { name: "Fantasy", icon: "🐉" },
];

const Genres = () => {
  return (
    <section className="py-16 w-11/12 mx-auto bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
          <h2 className="text-3xl font-bold">
            Browse by <span className="text-primary">Genre</span>
          </h2>
          <p className="opacity-70 mt-2">
            Explore movies by your favorite genres
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {genres.map((genre, idx) => (
            <div
              key={genre.name}
              className="card bg-base-200 hover:bg-primary hover:text-white transition transform hover:scale-105 duration-300 ease-in-out opacity-0"
              style={{
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="card-body items-center text-center">
                <span
                  className="text-4xl mb-2"
                  style={{
                    animation: `float 3s ease-in-out infinite`,
                  }}
                >
                  {genre.icon}
                </span>
                <h3 className="font-semibold text-lg">{genre.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles for animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
};

export default Genres;
