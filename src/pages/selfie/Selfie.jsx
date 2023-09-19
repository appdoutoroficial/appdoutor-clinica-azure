import React, { useState, useEffect } from "react";
import selfie from "../../assets/img/favorite/selfie.png";
import { useNavigate } from "react-router-dom";

const Selfie = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          onClick={() => navigate("/responsavel")}
          className="text-dark bg-white shadow rounded-circle icon"
        >
          <span className="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 className="mb-0 txt-center me-auto fw-bold">INSIRA SEU LOGO</h6>
      </div>
      <div className=" p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-camera-plus-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">Hora do logo!</h2>
            <p className="text-muted mb-0">Escolha o logo para continuar</p>
          </div>
        </div>
        <div className="landing-slider-item">
          <div className="card bg-transparent border-0 pt-5 mt-5">
            <img
              src={selfie}
              alt=""
              className="img-fluid rounded-circle selfie-img"
            />
          </div>
        </div>
      </div>
      <div className="footer fixed-bottom d-grid gap-3 m-3">
        <a
          onClick={() => navigate("")}
          class="btn btn-info btn-lg w-100 rounded-4"
        >
          Buscar na galeria
        </a>
        <a
          onClick={() => navigate("/finalizar")}
          class="btn btn-outline-info btn-lg w-100"
        >
          Continuar
        </a>
      </div>
    </>
  );
};

export default Selfie;
