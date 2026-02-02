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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/latest-movies"),
      },
      {
        path: "/all-movies",
        element: <AllMovies />,
        loader: () => fetch("http://localhost:3000/movies"),
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

      //     {
      //     path: "/update-model/:id",
      //     element: (
      //       <PrivateRoute>
      //         <UpdateModel />
      //       </PrivateRoute>
      //     ),
      //       loader: ({params}) => fetch(`https://3d-model-server.vercel.app/models/${params.id}`)
      //   },
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
