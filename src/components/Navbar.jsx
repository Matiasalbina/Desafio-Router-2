import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import pokemon_logo from "../assets/img/pokemon_logo.svg";
import '../App.css';

const Navigation = () => {
  return (
    <Navbar className="navbar-dark-custom" variant="dark">
      <Container className="justify-content-between">
        <Navbar.Brand>
          <NavLink to="/" className="ms-3 text-decoration-none">
            <img src={pokemon_logo} alt="Pokemon logo" className="w-100" />
          </NavLink>
        </Navbar.Brand>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "ms-3 text-decoration-none text-shadow active" : "ms-3 text-decoration-none text-shadow")}
          >
            Home
          </NavLink>
          <NavLink
            to="/pokemones"
            className={({ isActive }) => (isActive ? "ms-3 text-decoration-none text-shadow active" : "ms-3 text-decoration-none text-shadow")}
          >
            Pokemones
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
