import React from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <Link className="navbar-brand" to="/">
            Ming‘s Shop
          </Link>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/cart">
                  购物车
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  登录
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
