import React from "react";
import { Link } from "react-router-dom";
import '../views/Home.css'

const Home = () => {
  return (
    <div className="portal-container">
      <div className="portal"></div>

      <div className="portal-content text-center">
        <h1 className="display-4 fw-bold text-light">Rick & Morty Portal</h1>
        <p className="text-light fs-5 mb-4">
          Ingresa al multiverso y descubre todos los personajes.
        </p>

        <Link to="/blog" className="btn btn-success btn-lg px-4 fw-bold">
          Entrar al Portal
        </Link>
      </div>
    </div>
  );
};

export default Home;
