import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";

const CadastrarPaciente = (props) => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const value = useContext(AppContext);
  console.log(value);

  const onSubmit = (e) => {
    console.log(e);
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        // value.setOnboardingP((prev) => ({ ...prev, endereco: data }));
      });
  };

  return (
    <>
    <NavPainel />
      <div className="main-content-wrap sidenav-open flex-colum">
        <div className="main-content">
          <h1 style={{ fontSize: 32.52 }}>Cadastro de Pacientes</h1>
          <div className="row">
            <div className="mt-12 col-md-12">
              <div className="card bg-defualt text-black">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <i className="i-Add-User text-22 mr-2"></i>
                    <h5 className="text-18 font-weight-700 card-title m-0">
                      Cadastrar Paciente
                    </h5>
                  </div>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
                    className="updateUser"
                  >
                    <div className="row">
                      <div className=" mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Nome*</p>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Digite o nome do paciente"
                        />
                        <input type="hidden" name="last_name" value=" 1" />
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">E-mail*</p>
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          placeholder="Digite o e-mail"
                        />
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Celular*</p>
                        <InputMask
                          name="telefone"
                          mask="(99) 99999-9999"
                          maskChar={""}
                          className="form-control"
                          placeholder="Digite o seu celular"
                        />
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">CPF*</p>
                        <InputMask
                          className="form-control"
                          type="text"
                          name="cpf"
                          mask="999.999.999-99"
                          id="cpf"
                          placeholder="Digite o CPF"
                        />
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">
                          Convênio para reembolso
                        </p>
                        <select
                          id="convenio"
                          name="convenio"
                          className="form-control"
                        >
                          <option selected>Selecione</option>
                          <option>Amil</option>
                          <option>Unimed</option>
                          <option>Prevent-Sênior</option>
                          <option>São Luiz</option>
                          <option>Outros</option>
                          <option>Não necessita</option>
                        </select>
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Cep</p>
                        <InputMask
                          mask="99999-999"
                          maskChar={""}
                          type="text"
                          className="form-control"
                          placeholder="Digite seu CEP"
                          onBlur={checkCEP}
                        />
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Endereço</p>
                        <input
                          type="text"
                          {...register("address")}
                          className="form-control"
                          name="address"
                          id="rua"
                          placeholder="Endereço "
                          aria-label=""
                          aria-describedby="endereco"
                          // value={value.state.onboarding.endereco.logradouro}
                        />
                      </div>
                      <div className="mb-4 col-md-2">
                        <p className="font-weight-400 mb-2">Número</p>
                        <input
                          type="text"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Número"
                          aria-label=""
                          aria-describedby="numero"
                          // value={value.state.onboarding.endereco.numero}
                        />
                      </div>
                      <div className="mb-4 col-md-2">
                        <p className="font-weight-400 mb-2">Complemento</p>
                        <input
                          type="text"
                          className="form-control"
                          name="complement"
                          id="complement"
                          placeholder="Complemento"
                          aria-label=""
                          aria-describedby="Complemento"
                          // value={value.state.onboarding.endereco.complemento}
                        />
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Bairro</p>
                        <input
                          type="text"
                          className="form-control"
                          name="neighbor"
                          id="neighbor"
                          placeholder="Bairro "
                          aria-label=""
                          aria-describedby="bairro"
                          // value={value.state.onboarding.endereco.bairro}
                        />
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Cidade</p>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          id="city"
                          placeholder="Cidade"
                          aria-label=""
                          aria-describedby="cidade"
                          // value={value.state.onboarding.endereco.localidade}
                        />
                      </div>
                      <div className="mb-4 col-md-2">
                        <p className="font-weight-400 mb-2">Estado</p>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          id="state"
                          placeholder="Estado"
                          aria-label=""
                          aria-describedby="Estado"
                          // value={value.state.onboarding.endereco.uf}
                        />
                      </div>
                      <div className="mb-4 col-md-4">
                        <label
                          className="font-weight-400 mb-2"
                          for="foto_doutor"
                        >
                          Foto Paciente
                        </label>
                        <input
                          type="file"
                          id="foto_doutor"
                          className="form-control-file"
                          name="photo"
                        />
                      </div>
                    </div>
                    <button
                      id="alert-success"
                      className="btn btn-lg btn-success float-right"
                      type="submit"
                    >
                      Salvar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CadastrarPaciente;
