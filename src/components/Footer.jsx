import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center border text-base-content p-10 mt-16">
      {/* Brand */}
      <aside>
        <h2 className="text-2xl font-bold">🎬 Movie Master</h2>
        <p className="max-w-md text-sm opacity-80">
          Discover movies, ratings, reviews, and trailers all in one place.
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Movie Master. All rights reserved.
        </p>
      </aside>

      {/* Quick Links */}
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover" href="/">Home</a>
        <a className="link link-hover" href="/all-movies">Movies</a>
        <a className="link link-hover" href="/about">About</a>
        <a className="link link-hover" href="/contact">Contact</a>
      </nav>

      {/* Social Media */}
      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="grid grid-flow-col gap-4 text-xl">
          <a className="hover:text-primary" href="#"><FaFacebook /></a>
          <a className="hover:text-primary" href="#"><FaXTwitter /></a>
          <a className="hover:text-primary" href="#"><FaInstagram /></a>
          <a className="hover:text-primary" href="#"><FaYoutube /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
