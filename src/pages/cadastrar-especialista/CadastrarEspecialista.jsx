import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";

const CadastrarEspecialista = () => {
  const navigate = useNavigate();
  return (
    <>
    <NavPainel />
      <div className="main-content-wrap sidenav-open flex-colum">
        <div className="main-content">
          <h1>Cadastro de Especialista</h1>
          <div className="row">
            <div className="mt-12 col-md-12">
              <div className="card bg-defualt text-black">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <i className="i-Doctor text-22 mr-2"></i>
                    <h5 className="text-18 font-weight-700 card-title m-0">
                      Cadastrar Especialista
                    </h5>
                  </div>

                  <form action="" className="cad-pac">
                    <input type="hidden" name="idClinica" value={""} />

                    <div className="row">
                      <div className=" mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Nome*</p>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Digite o nome do especialista"
                        />
                        <input
                          className="form-control"
                          type="hidden"
                          name="last_name"
                          placeholder="Digite o nome do especialista"
                          value="1"
                        />
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
                        <p className="font-weight-400 mb-2">CRM*</p>
                        <InputMask
                          mask="999.999.9999/aa"
                          className="form-control"
                          type="text"
                          name="crm"
                          id="mixed"
                          placeholder="Digite o CRM"
                        />
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Especialidade*</p>
                        <input
                          className="form-control"
                          type="search"
                          name="especialidade"
                          placeholder="Especialidade"
                        />
                      </div>
                      <div className="mb-4 col-md-4">
                        <label
                          className="font-weight-400 mb-2"
                          for="foto_doutor"
                        >
                          Foto Especialista
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

export default CadastrarEspecialista;
