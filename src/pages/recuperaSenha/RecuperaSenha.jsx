import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

const RecuperaSenha = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sign-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-lock-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold">Esqueceu sua senha?</h2>
            <p className="text-muted mb-0">
              Digite seu e-mail cadastrado para enviarmos um código de
              recuperação!
            </p>
          </div>
        </div>
        <form>
          <div className="mb-2">
            <label for="exampleFormControlName" className="form-label mb-1">
              E-mail
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-email-check-outline mdi-18px text-muted"></span>
              </span>
              <InputMask
                value={props.value}
                onChange={props.onChange}
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu e-mail "
                aria-label="Type your name"
                aria-describedby="name"
              />
            </div>
          </div>
        </form>
        <div className="footer fixed-bottom m-4">
          <a
            onClick={() => navigate("/verifica-senha")}
            className="btn btn-info btn-lg w-100 rounded-4"
          >
            Enviar
          </a>
        </div>
      </div>
    </>
  );
};

export default RecuperaSenha;
