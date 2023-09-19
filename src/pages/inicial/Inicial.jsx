import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../components/NavBar";
import { ReactSVG } from "react-svg";
import logo from "../../assets/img/logo-app.png";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Inicial = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="welcome d-flex align-items-center justify-content-center vh-100">
        <div className="text-center pb-5 mb-5">
          <div className="mb-5">
            <img src={logo} alt="" className="img-fluid logo-app mb-3" />
          </div>
        </div>
      </div>

      <div className="footer fixed-bottom d-grid gap-3 m-4">
        <a
          onClick={() => navigate("cadastrar")}
          className="btn btn-info btn-lg"
        >
          Inscreva-se
        </a>
        <a
          onClick={() => navigate("entrar")}
          className="btn btn-outline-info btn-lg"
        >
          Entrar com App doutor
        </a>
      </div>
    </>
  );
};

export default Inicial;
