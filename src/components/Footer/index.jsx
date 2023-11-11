import { Link } from "react-router-dom";
import touristaLogo from "../../assets/icons/touristaLogo.png";
import "./style.css";
function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-link_container">
          <Link to="/">
            <img src={touristaLogo} alt="#" className="tourista-logo" />
          </Link>
          <p>
            Discover the worlds wonders and let us be <br /> your trusted guide
            to extraordinary destinations.
          </p>
          <p>© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>
        </div>
        <div className="footer-link_container">
          <h1>Menu</h1>
          <Link to="/destinations">Destinations</Link>
          <Link>Private trips</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/aboutUs">About us</Link>
        </div>
        <div className="footer-link_container">
          <h1>Support</h1>
          <Link to="/contactUs">Contact us</Link>
          <Link to="/faq">FAQ</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms of Use</Link>
        </div>
        <div className="footer-link_container">
          <h1>Follow us</h1>
          <Link>Instagram</Link>
          <Link>Facebook</Link>
          <Link>Linkedin</Link>
          <Link>Tiktok</Link>
        </div>
      </div>
      <div className="responsive-footer__wrapper">
        <div className="footer-link_container">
          <Link to="/">
            <img src={touristaLogo} alt="#" className="tourista-logo" />
          </Link>
          <p>
            Discover the worlds wonders and let us be your trusted guide
            to extraordinary destinations.
          </p>
        </div>
        <div className="footer-link_container">
          <h1>Menu</h1>
          <Link to="/destinations">Destinations</Link>
          <Link>Private trips</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/aboutUs">About us</Link>
        </div>
        <div className="footer-link_container">
          <h1>Support</h1>
          <Link to="/contactUs">Contact us</Link>
          <Link to="/faq">FAQ</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms of Use</Link>
        </div>
        <div className="footer-link_container">
          <h1>Follow us</h1>
          <Link>Instagram</Link>
          <Link>Facebook</Link>
          <Link>Linkedin</Link>
          <Link>Tiktok</Link>
        </div>
        <p>© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
