import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Banner from "../components/Banner";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar />
        <Banner></Banner>
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