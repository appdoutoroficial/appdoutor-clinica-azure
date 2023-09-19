import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import axiosConfig from "../../axiosConfig";
import Swal from "sweetalert2";

const Profile = (props) => {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const value = useContext(AppContext);
  console.log(value);

  
  const sendSubmit = () => {
    var datanascimento = dateOfBirthday(value.state.onboardingP.dataNascimento);
    const form = value.state.onboardingP;

    var telefone = value.state.onboardingP.telefone.replace("(", "");
    telefone = telefone.replace("(", "", telefone);
    telefone = telefone.replace(")", "", telefone);
    telefone = telefone.replace(" ", "", telefone);
    telefone = telefone.replace("-", "", telefone);

    form.dataNascimento = datanascimento;
    form.endereco.cidade = form.endereco.localidade;
    form.endereco.estado = form.endereco.uf;
    form.telefone = "55"+telefone;
    form.endereco.numero = '123';

    axiosConfig.post("/Pessoa/Salvar", form)
    .then((response) => {
      if( response.data.statusCode === 200 && response.data.sucesso ){
          Swal.fire({
              icon: "success",
              title: response.data.mensagem,
              showCancelButton: false,
              confirmButtonText: 'Ok',
          }).then((result) => {
            value.setOnboardingC((prev) => ({
              ...prev,
              responsavel: response.data.id,
            }))

            saveCredencial(response.data.id)
          });
      }
    })
    .catch((err) =>{
        Swal.fire({
            icon: "warning",
            title: "Erro por favor tente mais tarde",
            showCancelButton: false,
            confirmButtonText: 'Ok',
        });
    })
  }

  const saveCredencial = (cred) => {
    var formCredencial = {
      idPessoa: cred,
      login: value.state.onboardingP.email,
      senha: value.state.onboardingP.senha
    }
    
    axiosConfig.post("/Pessoa/SalvarCredencial", formCredencial)
    .then((response) => {
      if( response.data.statusCode === 200 && response.data.sucesso ){
          Swal.fire({
              icon: "success",
              title: response.data.mensagem,
              showCancelButton: false,
              confirmButtonText: 'Ok',
          }).then((result) => {
            console.log(result)
            navigate('/responsavel')
          });
      }
    })
    .catch((err) =>{
        Swal.fire({
            icon: "warning",
            title: "Erro por favor tente mais tarde",
            showCancelButton: false,
            confirmButtonText: 'Ok',
        });
    })
  }

  const dateOfBirthday = (data) => {
    var nascimento = data.split("/");
    nascimento = nascimento.reverse();
    nascimento = nascimento[0] + "-" + nascimento[1] + "-" + nascimento[2];
    nascimento = nascimento.split("-undefined");
    return nascimento[0];
  }


  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        value.setOnboardingP((prev) => ({ ...prev, endereco: data }));
        value.setOnboardingC((prev) => ({ ...prev, endereco: data }));
      });
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          onClick={() => navigate("/verifica-email")}
          className="text-dark bg-white shadow rounded-circle icon"
        >
          <span className="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 className="mb-0 txt-center fw-bold">CADASTRO CLINÍCA</h6>
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
        <form onSubmit={handleSubmit(sendSubmit)}>
        <div className="mb-3">
          <label for="exampleFormControlCPF" className="form-label mb-1">
            RG
          </label>
          <div
            className="input-group border bg-white rounded-3 py-1"
            id="exampleFormControlCPF"
          >
            <span
              className="input-group-text bg-transparent rounded-0 border-0"
              id="rg"
            >
              <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
            </span>

            <input
              type="text"
              className="form-control bg-transparent rounded-0 border-0 px-0"
              name="address"
              id="rua"
              placeholder="RG "
              aria-label=""
              aria-describedby="rg"
              value={value.state.onboardingP.rg}
                onChange={(val) =>
                  value.setOnboardingP((prev) => ({
                    ...prev,
                    rg: val.target.value,
                  }))
                }
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlCPF" className="form-label mb-1">
            Data de Nascimento
          </label>
          <div
            className="input-group border bg-white rounded-3 py-1"
            id="exampleFormControlCPF"
          >
            <span
              className="input-group-text bg-transparent rounded-0 border-0"
              id="rg"
            >
              <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
            </span>
            <InputMask
              mask="99/99/9999"
              //defaultValue={}
              className="form-control bg-transparent rounded-0 border-0 px-0"
              placeholder="Data de Nascimento"
              value={value.state.onboardingP.dataNascimento}
                onChange={(val) =>
                  value.setOnboardingP((prev) => ({
                    ...prev,
                    dataNascimento: val.target.value,
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
                {...register("address")}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="address"
                id="rua"
                placeholder="Endereço "
                aria-label=""
                aria-describedby="endereco"
                value={value.state.onboardingP.endereco.logradouro}
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
                value={value.state.onboardingP.endereco.numero}
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
                value={value.state.onboardingP.endereco.complemento}
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
                value={value.state.onboardingP.endereco.bairro}
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
                value={value.state.onboardingP.endereco.localidade}
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
                value={value.state.onboardingP.endereco.uf}
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
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
