import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Banner from "../components/Banner";
import Genres from "../components/Genres";
import AboutPlatform from "../components/AboutPlatform";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar />
        <Banner></Banner>
        <Genres></Genres>
        <AboutPlatform></AboutPlatform>
        <div className="mt-4">
          <Outlet />
        </div>
        <Footer/>
      </div>

      <Toaster/>
    </div>
  );
};

export default MainLayout;