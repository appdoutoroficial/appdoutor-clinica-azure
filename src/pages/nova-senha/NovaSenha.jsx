import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

const NovaSenha = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          onClick={() => navigate("/verifica-senha")}
          className="text-dark bg-white shadow rounded-circle icon"
        >
          <span className="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 className="mb-0 txt-center me-auto fw-bold">CADASTRE NOVA SENHA</h6>
      </div>
      <div className="sign-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-lock-open-variant-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold">Recuperação de senha</h2>
            <p className="text-muted mb-0">Digite sua nova senha</p>
          </div>
        </div>
        <form>
          <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              Nova senha
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-lock-outline mdi-18px text-muted"></span>
              </span>
              <InputMask
                type={"password"}
                value={props.value}
                onChange={props.onChange}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite uma senha "
                aria-label="Type your name"
                aria-describedby="name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              Confirme sua senha
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-lock-outline mdi-18px text-muted"></span>
              </span>
              <InputMask
                type={"password"}
                value={props.value}
                onChange={props.onChange}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Confirme sua nova senha "
                aria-label="Type your name"
                aria-describedby="name"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="footer fixed-bottom m-4">
        <a
          onClick={() => navigate("/entrar")}
          className="btn btn-info btn-lg w-100 rounded-4"
        >
          Salvar
        </a>
      </div>
    </>
  );
};

export default NovaSenha;
