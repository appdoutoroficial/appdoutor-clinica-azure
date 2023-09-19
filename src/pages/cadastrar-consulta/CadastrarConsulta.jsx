import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";

const CadastrarConsulta = () => {
  const navigate = useNavigate();

  return (
    <>
    <NavPainel />
      <div className="main-content-wrap sidenav-open flex-colum">
        <div className="main-content">
          <h1 style={{ fontSize: 32.52 }}>Nova Consulta</h1>
          <div className="row">
            <div className="mt-12 col-md-12">
              <div className="card bg-defualt text-black">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <i className="i-Calendar-3 text-22 mr-2"></i>
                    <h5 className="text-18 font-weight-700 card-title m-0">
                      Cadastrar Consulta
                    </h5>
                  </div>

                  <form action="" className="cadConsulta">
                    <div className="row">
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Nome*</p>
                        <select
                          className="form-control"
                          name="paciente_id"
                          id="paciente_id"
                        >
                          <option selected>Selecione</option>
                          <option value="16">Antonio nunes</option>
                          <option value="19">Carlos Rodrigues</option>
                        </select>
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Especialista*</p>
                        <select
                          className="form-control"
                          name="especialistas_id"
                          id="especialistas_id"
                        >
                          <option selected>Selecione</option>
                          <option value="5">Dr Arthur Azevedo</option>
                          <option value="6">Dr Sergio Reis </option>
                          <option value="7">Dr Francisco Rodrigues</option>
                        </select>
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">
                          Tipo de consulta*
                        </p>
                        <select
                          className="form-control"
                          name="tipo_consulta"
                          id="especialistas_id"
                        >
                          <option selected>Selecione</option>
                          <option value="6">Telemedicina</option>
                          <option value="7">Presencial</option>
                        </select>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Data*</p>
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                          required=""
                        />
                      </div>
                      <div className=" mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Horário*</p>
                        <input
                          className="form-control"
                          type="time"
                          name="hour"
                          required=""
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

export default CadastrarConsulta;
