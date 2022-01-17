import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logoIcon/icon.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mb-5 navbar-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center"
          to="/"
        >
          <img className="logo-image" src={logo} alt="" />
          <span className="navbar-brand-text">LamaNews</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news/general">
                Top Headlines
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news/business">
                Business
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control form-input me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
