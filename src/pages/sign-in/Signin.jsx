import React, { useState, useEffect, useContext } from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import axiosConfig from "../../axiosConfig";
import Swal from "sweetalert2";

const Signin = (props) => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  const sendSubmit = () => {
    axiosConfig
      .post(
        "/Pessoa/ValidaCPF?CPF=" +
          value.state.onboardingP.cpf
      )
      .then((response) => {
        console.log(response.data.mensagem);
        if (response.data.statusCode === 200 && response.data.sucesso && response.data.mensagem != 'CPF já cadastrado.') {
          Swal.fire({
            icon: "success",
            title: response.data.mensagem,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            sendEmail();
          });
        }else{
          Swal.fire({
            icon: "success",
            title: response.data.mensagem,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {});
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Erro por favor tente mais tarde",
          showCancelButton: false,
          confirmButtonText: "Ok",
        });
      });
  };

  const sendEmail = () => {
    var telefone = value.state.onboardingP.telefone.replace("(", "");
    telefone = telefone.replace("(", "", telefone);
    telefone = telefone.replace(")", "", telefone);
    telefone = telefone.replace(" ", "", telefone);
    telefone = telefone.replace("-", "", telefone);
    
    axiosConfig
      .post(
        "/Pessoa/EnviarTelefoneParaValidacao?telefone=55" + telefone
      )
      .then((response) => {
        if (response.data.statusCode === 200 && response.data.sucesso) {
          Swal.fire({
            icon: "success",
            title: response.data.mensagem,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/verifica");
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Erro por favor tente mais tarde",
          showCancelButton: false,
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <>
      {/* <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          onClick={() => navigate("/")}
          className="text-dark bg-white shadow rounded-circle icon"
        >
          <span className="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 className="mb-0 txt-center me-auto fw-bold">CADASTRO CONTATO</h6>
      </div> */}
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
            <label className="form-label mb-1">
              CPF
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cpf"
              >
                <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
              </span>
              <InputMask
                mask="999.999.999-99"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o seu CPF "
                defaultValue={value.state.onboardingP.cpf}
                onChange={(val) =>
                  value.setOnboardingP((prev) => ({
                    ...prev,
                    cpf: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">E-mail</label>
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

              <input
                type="email"
                name="email"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu e-mail"
                value={value.state.onboardingP.email}
                onChange={(val) => {
                    value.setOnboardingP((prev) => ({
                      ...prev,
                      email: val.target.value,
                    }))

                    value.setOnboardingC((prev) => ({
                      ...prev,
                      email: val.target.value,
                    }))
                  }
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">Nome</label>
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
                name="nome"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu nome"
                value={value.state.onboardingP.nome}
                onChange={(val) => {
                    value.setOnboardingP((prev) => ({
                      ...prev,
                      nome: val.target.value,
                    }))

                    value.setOnboardingC((prev) => ({
                      ...prev,
                      nome: val.target.value,
                    }))
                  }
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">
              Sobrenome
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
                placeholder="Digite seu sobrenome "
                aria-label="Type your name"
                aria-describedby="name"
                value={value.state.onboardingP.sobrenome}
                onChange={(val) =>
                  value.setOnboardingP((prev) => ({
                    ...prev,
                    sobrenome: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">Celular</label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span className="input-group-text bg-transparent rounded-0 border-0">
                <span className="mdi  mdi-phone mdi-18px text-muted"></span>
              </span>
              <InputMask
                name="telefone"
                mask="(99) 99999-9999"
                maskChar={""}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o seu celular"
                value={value.state.onboardingP.telefone}
                onChange={(val) => {
                    value.setOnboardingP((prev) => ({
                      ...prev,
                      telefone: val.target.value,
                    }))

                    value.setOnboardingC((prev) => ({
                      ...prev,
                      telefone: val.target.value,
                    }))

                    value.setOnboardingC((prev) => ({
                      ...prev,
                      telefoneResponsavel: val.target.value,
                    }))
                  }
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">Senha</label>
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
              <input
                type="password"
                name="senha"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite sua senha"
                value={value.state.onboardingP.senha}
                onChange={(val) =>
                  value.setOnboardingP((prev) => ({
                    ...prev,
                    senha: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div>
            <a
              onClick={sendSubmit}
              className="btn btn-info btn-lg w-100 rounded-4 mb-3"
            >
              Continuar
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

export default Signin;
