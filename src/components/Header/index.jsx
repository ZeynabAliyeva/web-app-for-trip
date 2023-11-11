import { Link, NavLink } from "react-router-dom";
import touristaLogo from "../../assets/icons/touristaLogo.png";
import hamburger from "../../assets/icons/hamburger.png";
import "./style.css";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header-wrapper">
      <div className="header-top">
        <nav className="nav-container">
          <NavLink
            className="navlink"
            to="/aboutUs"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "#141d24",
            })}
          >
            About Us
          </NavLink>
          <NavLink
            className="navlink"
            to="/faq"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "#141d24",
            })}
          >
            FAQ
          </NavLink>
          <NavLink
            className="navlink"
            to="/blog"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "#141d24",
            })}
          >
            Blog
          </NavLink>
          <NavLink
            className="navlink"
            to="/contactUs"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "#141d24",
            })}
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="custom-select">
          <select className="valuta-select">
            <option value="US$">US $</option>
            <option value="AZN ₼">AZN ₼</option>
            <option value="Euro €">Euro €</option>
            <option value="Ruble ₽">Ruble ₽</option>
          </select>
        </div>
      </div>
      <div className="header-bootom">
        <div className="header-bootom_left">
          <NavLink
            className="link-to__page"
            to="/destinations"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "#141d24",
            })}
          >
            Destinations
          </NavLink>
          <NavLink
            className="link-to__page "
            style={({ isActive }) => ({
              color: isActive ? "#141d24" : "#141d24",
            })}
          >
            Private trips
          </NavLink>
          <div className={`header ${isMenuOpen ? "menu-open" : ""}`}>
            <div className="hamburger-menu__container">
              <img
                src={hamburger}
                alt="#"
                className="menu-hamburger"
                onClick={toggleMenu}
              />
              <div className="burger-menu" onClick={() => setMenuOpen(false)}>
                <div className={`${isMenuOpen ? "blur" : ""}`} />
                <nav
                  className={`nav-list ${isMenuOpen ? "open" : ""}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <NavLink
                    to="/destinations"
                    activeClassName="active"
                    className="link-to__responsive"
                  >
                    Destinations
                  </NavLink>
                  <NavLink
                    to="/privateTrips"
                    activeClassName="active"
                    className="link-to__responsive"
                  >
                    Private trips
                  </NavLink>
                  <NavLink className="link-to__responsive" to="/aboutUs">
                    About Us
                  </NavLink>
                  <NavLink className="link-to__responsive" to="/faq">
                    FAQ
                  </NavLink>
                  <NavLink className="link-to__responsive" to="/blog">
                    Blog
                  </NavLink>
                  <NavLink className="link-to__responsive" to="/contactUs">
                    Contact Us
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <img src={touristaLogo} alt="#" />
        </Link>
        <div className="header-bootom_right">
          <button className="header-bootom_btn left-btn">
            Im Feeling Lucky
          </button>
          <button className="header-bootom_btn">
            <Link className="login-router" to="/signIn">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
