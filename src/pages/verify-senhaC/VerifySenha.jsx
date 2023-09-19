import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

const VerifySenha = (props) => {
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
        <h6 className="mb-0 txt-center me-auto fw-bold">
          CÓDIGO DE VERIFICAÇÃO CELULAR
        </h6>
      </div>
      <div className="verify p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-check-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">Verificação</h2>
            <p className="text-muted mb-0">
              Digite o código enviado para seu e-mail
            </p>
          </div>
        </div>
        <div className="d-flex gap-1 mb-2">
          <div className="col">
            <InputMask
              mask="9"
              maskChar={""}
              value={props.value}
              onChange={props.onChange}
              className="form-control form-control-lg text-center py-3"
              maxlength={1}
            />
          </div>
          <div className="col">
            <InputMask
              mask="9"
              maskChar={""}
              value={props.value}
              onChange={props.onChange}
              className="form-control form-control-lg text-center py-3"
              maxlength={1}
            />
          </div>
          <div className="col">
            <InputMask
              mask="9"
              maskChar={""}
              value={props.value}
              onChange={props.onChange}
              className="form-control form-control-lg text-center py-3"
              maxlength={1}
            />
          </div>
          <div className="col">
            <InputMask
              mask="9"
              maskChar={""}
              value={props.value}
              onChange={props.onChange}
              className="form-control form-control-lg text-center py-3"
              maxlength={1}
            />
          </div>
          <div className="col">
            <InputMask
              mask="9"
              maskChar={""}
              value={props.value}
              onChange={props.onChange}
              className="form-control form-control-lg text-center py-3"
              maxlength={1}
            />
          </div>
        </div>
        <p className="text-muted text-center mt-4">
          Não recebeu o código?{" "}
          <a onClick={() => navigate("")} className="ml-2 primario">
            Enviar novamente
          </a>
        </p>
      </div>
      <div className="footer fixed-bottom m-4">
        <a
          onClick={() => navigate("/nova-senha")}
          className="btn btn-info btn-lg w-100 rounded-4"
        >
          Confirma
        </a>
      </div>
    </>
  );
};

export default VerifySenha;
