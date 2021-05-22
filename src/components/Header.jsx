import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../actions";
import "../assets/styles/components/Header.scss";
import Logo from "../assets/static/images/logo.png";

const Header = () => {
  const sectionActive = useSelector((state) => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(setSection));
  };

  return (
    <header className="header">
      <figure className="header__logo">
        <img
          className="header__logo-img"
          src={Logo}
          alt="RWS Tarot logo"
        />
        <h1>RWS Tarot App</h1>
      </figure>
      <nav className="header__nav">
        <ul className="header__nav__options">
          <li onClick={() => handleSetSection("Cards")}
            className=
            {`header__nav__options-item ${
              sectionActive === "Cards" ? "active" : ""
            }`}
            >
            <Link to="/">Cards</Link>
          </li>
          <li
            onClick={() => handleSetSection("Favorites")}
            className={`header__nav__options-item ${
              sectionActive === "Favorites" ? "active" : ""
            }`}
          >
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
