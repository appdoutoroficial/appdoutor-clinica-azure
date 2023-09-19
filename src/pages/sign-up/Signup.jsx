import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="sign-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-plus-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">Vamos começar?</h2>
            <p className="text-muted mb-0">Crie uma conta para continuar!</p>
          </div>
        </div>
        <form>
          <div className="mb-3">
            <label for="exampleFormControlEmail" className="form-label mb-1">
              E-mail
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlEmail"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="mail"
              >
                <span className="mdi mdi-email-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="email"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o E-mail da sua clínica"
                aria-label="Type your email or phone"
                aria-describedby="mail"
                value=""
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              Nome
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-account-circle-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o nome da sua clínica "
                aria-label="Type your name"
                aria-describedby="name"
                value=""
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              Contato
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi  mdi-phone mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                data-mask="(00) 0-0000-0000"
                placeholder="Digite seu telefone "
                aria-label="Type your name"
                aria-describedby="name"
                value=""
                autocomplete="off"
                maxlength="16"
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlPassword" className="form-label mb-1">
              Senha
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlPassword"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="password"
              >
                <span className="mdi mdi-lock-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="password"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite sua senha"
                aria-label="Type your password"
                aria-describedby="password"
                value=""
              />
            </div>
          </div>
          <div>
            <a
              onClick={() => navigate("/verifica")}
              className="btn btn-info btn-lg w-100 rounded-4 mb-3"
            >
              Criar Conta
            </a>
            <p className="text-muted text-center small">
              Já tem cadastro?{" "}
              <a className="text-primary" onClick={() => navigate("/entrar")}>
                Entrar
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
