import { use } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const AddMovie = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      genre: e.target.genre.value,
      plotSummary: e.target.plotSummary.value,
      posterUrl: e.target.posterUrl.value,
      created_at: new Date(),
      addedBy: user.email,
    };

    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title Field */}
          <div>
            <label className="label font-medium">Title</label>
            <input
              type="text"
              name="title"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Genre Dropdown */}
          <div>
            <label className="label font-medium">Genre</label>
            <select
              defaultValue={""}
              name="genre"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select genre
              </option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Action">Action</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Romance">Romance</option>
              <option value="Drama">Drama</option>
              <option value="Thriller">Thriller</option>
              <option value="Crime">Crime</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* plot summary Textarea */}
          <div>
            <label className="label font-medium">plotSummary</label>
            <textarea
              name="plotSummary"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-62.5"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Poster URL */}
          <div>
            <label className="label font-medium">Poster Url</label>
            <input
              type="url"
              name="posterUrl"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-teal-400 to-teal-600"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
