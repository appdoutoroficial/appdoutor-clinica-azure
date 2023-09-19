import React, { useState, useEffect, useContext } from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import axiosConfig from "../../axiosConfigClinicas";
import Swal from "sweetalert2";

const Responsavel = (props) => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        value.setOnboardingC((prev) => ({ ...prev, endereco: data }));
      });
  };

  const sendSubmit = () => {
    axiosConfig
      .post(
        "/Clinica/ValidaCNPJ?CNPJ=" +
          value.state.onboardingC.cnpj
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
        "/Clinica/EnviarTelefoneParaValidacao?telefone=55" + telefone
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
              navigate("/verifica-clinica");
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
      <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          onClick={() => navigate("/cadastro")}
          className="text-dark bg-white shadow rounded-circle icon"
        >
          <span className="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 className="mb-0 txt-center me-auto fw-bold">
          CADASTRO RESPONSÁVEL
        </h6>
      </div>
      <div className="sign-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-plus-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">
              Precisamos de algumas informações.
            </h2>
            <p className="text-muted mb-0">Nos ajude a te conhecer melhor!</p>
          </div>
        </div>
        <form>
        <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              CNPJ
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
                mask="99.999.999/9999-99"
                defaultValue={value.state.onboardingC.cnpj}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o seu CNPJ "
                onChange={(val) =>
                  value.setOnboardingC((prev) => ({
                    ...prev,
                    cnpj: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Inscrição estadual
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

              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite sua Inscrição estadual"
                name="inscricaoEstadual"
                value={value.state.onboardingC.inscricaoEstadual}
                onChange={(val) =>
                  value.setOnboardingC((prev) => ({
                    ...prev,
                    inscricaoEstadual: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              Nome Fantasia
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-card-account-details-outline mdi-18px text-muted"></span>
              </span>

              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o nome da sua clínica "
                name="nomeFantasia"
                value={value.state.onboardingC.nomeFantasia}
                onChange={(val) =>
                  value.setOnboardingC((prev) => ({
                    ...prev,
                    nomeFantasia: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          {/* <div className="mb-3">
            <label for="exampleFormControlName" className="form-label mb-1">
              Nome da sua clínica
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-hospital-box mdi-18px text-muted"></span>
              </span>

              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o nome da sua clínica "
                name="inscricaoEstadual"
                value={value.state.onboardingC.clinica}
                onChange={(val) =>
                  value.setOnboardingC((prev) => ({
                    ...prev,
                    clinica: val.target.value,
                  }))
                }
              />
            </div>
          </div> */}
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Contato
            </label>
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
                defaultValue={value.state.onboardingC.telefone}
                onChange={(val) =>
                  value.setOnboardingC((prev) => ({
                    ...prev,
                    telefone: val.target.value,
                    telefoneResponsavel: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Cep
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <InputMask
                mask="99999-999"
                maskChar={""}
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu CEP"
                onBlur={checkCEP}
                value={value.state.onboardingC.endereco.cep}
              />
            </div>
          </div>
          
        <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Endereço
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="address"
                id="rua"
                placeholder="Endereço "
                aria-label=""
                aria-describedby="endereco"
                value={value.state.onboardingC.endereco.logradouro}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Número
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="number"
                id="number"
                placeholder="Número"
                aria-label=""
                aria-describedby="numero"
                value={value.state.onboardingC.endereco.numero}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Complemento
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="complement"
                id="complement"
                placeholder="Complemento"
                aria-label=""
                aria-describedby="Complemento"
                value={value.state.onboardingC.endereco.complemento}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Bairro
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="neighbor"
                id="neighbor"
                placeholder="Bairro "
                aria-label=""
                aria-describedby="bairro"
                value={value.state.onboardingC.endereco.bairro}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Cidade
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="city"
                id="city"
                placeholder="Cidade"
                aria-label=""
                aria-describedby="cidade"
                value={value.state.onboardingC.endereco.localidade}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Estado
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="state"
                id="state"
                placeholder="Estado"
                aria-label=""
                aria-describedby="Estado"
                value={value.state.onboardingC.endereco.uf}
              />
            </div>
          </div>
          
          {/* <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Contato
            </label>
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
                value={value.state.onboardingC.telefoneResponsavel}
                onChange={(val) =>
                  value.setOnboardingP((prev) => ({
                    ...prev,
                    telefoneResponsavel: val.target.value,
                  }))
                }
              />
            </div>
          </div> */}
          {/* <div className="mb-3">
            <label for="exampleFormControlName1" className="form-label mb-1">
              Nível de permissão
            </label>
            <div className="input-group border bg-white rounded-3 py-1">
              <label
                className="input-group-text bg-transparent rounded-0 border-0"
                for="inputGroupSelect01"
              >
                <span className="mdi mdi-account-group-outline mdi-18px"></span>
              </label>
              <select
                className="form-select bg-transparent rounded-0 border-0 px-0"
                id="inputGroupSelect01"
              >
                <option selected="">Administrador</option>
                <option value="1">Gerente</option>
                <option value="2">Atendimento</option>
                <option value="3">Operacional</option>
                <option value="4">Técnico</option>
              </select>
            </div>
          </div> */}
          <div>
            <a
              onClick={sendSubmit}
              className="btn btn-info btn-lg w-100 rounded-4 mb-3"
            >
              Finalizar Cadastro
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Responsavel;
