import React from "react";
import { FaFilm, FaStar, FaPlayCircle, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaFilm />,
    title: "Extensive Movie Library",
    description:
      "Explore thousands of movies across all genres, from classics to latest releases.",
  },
  {
    icon: <FaStar />,
    title: "Ratings & Reviews",
    description:
      "Check ratings, reviews, and watchlists to pick your next movie wisely.",
  },
  {
    icon: <FaPlayCircle />,
    title: "Trailers & Previews",
    description:
      "Watch trailers, teasers, and sneak peeks before deciding what to watch.",
  },
  {
    icon: <FaUsers />,
    title: "Community & Profiles",
    description:
      "Create your profile, follow friends, and see what others are watching.",
  },
];

const AboutPlatform = () => {
  return (
    <section className="py-10 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-3xl font-bold mb-2">
            About <span className="text-primary">Movie Master</span>
          </h2>
          <p className="opacity-80">
            Movie Master is your ultimate platform for discovering, rating, and
            enjoying movies worldwide.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="card bg-base-200 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-md p-6 rounded-xl flex flex-col items-center text-center opacity-0"
              style={{
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              <div
                className="text-5xl mb-4"
                style={{
                  animation: `float 3s ease-in-out infinite`,
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>
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

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
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

export default AboutPlatform;
