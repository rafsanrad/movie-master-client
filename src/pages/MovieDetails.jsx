import { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const [refetch, setRefecth] = useState(false);

  useEffect(() => {
    fetch(`https://movie-master-server-liart.vercel.app/movies/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.result);
        console.log(" Api called!");
        console.log(data);
        setLoading(false);
      });
  }, [user, id, refetch]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://movie-master-server-liart.vercel.app/movies/${movie._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/all-movies");

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={movie.posterUrl}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {movie.title}
            </h1>

            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline text-primary border-primary font-medium">
                {movie.genre}
              </div>

              {/* <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                Downloaded: {model.downloads}
              </div> */}
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {movie.plotSummary}
            </p>

            <div className="flex gap-3 mt-6">
              <Link
                to={`/update-movie/${movie._id}`}
                className="btn btn-primary rounded-full bg-linear-to-r from-teal-400 to-teal-600"
              >
                Update Movie
              </Link>
              <button
                onClick={handleDelete}
                className="btn btn-primary rounded-full bg-linear-to-r from-teal-400 to-teal-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
