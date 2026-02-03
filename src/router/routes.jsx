import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllMovies from "../pages/AllMovies";
import Profile from "../pages/Profile";
import AddMovie from "../pages/AddMovie";
import MovieDetails from "../pages/MovieDetails";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layout/AuthLayout";
import MyMovies from "../pages/MyMovies";
import UpdateMovie from "../pages/UpdateMovie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://movie-master-server-liart.vercel.app/latest-movies"),
      },
      {
        path: "/all-movies",
        element: <AllMovies />,
        loader: () =>
          fetch("https://movie-master-server-liart.vercel.app/movies"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie />
          </PrivateRoute>
        ),
      },
      {
        path: "/movie-details/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/my-movies",
        element: (
          <PrivateRoute>
            <MyMovies />
          </PrivateRoute>
        ),
      },

      //    {
      //     path: "/my-downloads",
      //     element: (
      //       <PrivateRoute>
      //         <MyDownloads />
      //       </PrivateRoute>
      //     ),
      //   },

      {
        path: "/update-movie/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-master-server-liart.vercel.app/movies/${params.id}`,
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
