import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <Link className="navbar-brand" to="/">
            Ming‘s Shop
          </Link>
          <div className="collapse navbar-collapse" id="navbarColor01">
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/cart">
                购物车
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id={userInfo.name}>
                <LinkContainer to="/profile">
                  <NavDropdown.Item> 个人详情</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  退出登录
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  登录
                </Link>
              </li>
            )}
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
