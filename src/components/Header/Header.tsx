import { useState } from "react";
import "./Header.scss";
import logo from "../../assets/Images/logo.svg";
import menuIcon from "../../assets/Images/ic_home.png";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Vegetarianos", link: "/Vegetarianos" },
  { name: "Platos Principales", link: "/Principales" },
  { name: "Tortas", link: "/Tortas" },
  { name: "Comida Rápida", link: "/Rápida" },
  { name: "Menú Niños", link: "/Niños" },
  { name: "Sopas", link: "/Sopas" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <img src={logo} alt="RecipeApp Logo" className="logo" />
      <nav>
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src={menuIcon} alt="Menu Icon" />
        </button>

        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
