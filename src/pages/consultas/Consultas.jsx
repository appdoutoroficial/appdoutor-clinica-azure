import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import AppContext from "../../context/AppContext";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";



const Consultas = () => {
  const navigate = useNavigate();

  return (
    <>
    <NavPainel />
      <div className="main-content-wrap sidenav-open flex-colum">
        <div className="main-content">
          <div className="row pacients">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div className="card-body text-center">
                  <i className="icon-m i-Administrator"></i>
                  <div className="content">
                    <p className="txt-app mt-2 mb-0">Pacientes</p>
                    <p className="text-primary text-24 line-height-1 mb-2 numberConsultas">
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div className="card-body text-center">
                  <i className="icon-m i-Calendar-4"></i>
                  <div className="content">
                    <p className="txt-app mt-2 mb-0">Consultas</p>
                    <p className="text-primary text-24 line-height-1 mb-2 numberConsultas">
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div className="card-body text-center">
                  <i className="icon-m i-Address-Book-2"></i>
                  <div className="content">
                    <p className="txt-app mt-2 mb-0">Agendado</p>
                    <p className="text-primary text-24 line-height-1 mb-2 numberConsultas">
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              onClick={() => navigate("/cadastrar-consulta")}
              className="col-lg-3 col-md-6 col-sm-6"
            >
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div
                  className="card-body text-center"
                  style={{ background: "#21d23e", cursor: " pointer" }}
                >
                  <i
                    className="i-Add-User"
                    style={{ fontSize: 64, color: "#fff" }}
                  ></i>
                  <div className="content">
                    <p
                      className="text-withe text-24 mt-2 mb-0 cadastrar"
                      style={{ color: "#fff", fontSize: 20 }}
                    >
                      Cadastrar Consulta
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="space"></div>
          <div className="row">
            <div className="consult">
              <div className="card shadow">
                <div className="card-header d-flex align-items-center border-0">
                  <h1 className="w-50 float-left card-title m-0 minha-clin-tx">
                    Pacientes do dia <span className="datePaciente"></span>
                  </h1>
                </div>
                <form className="buscaForm" method="">
                  <div className="form-group mx-sm-3 mb-2 form-inline">
                    <input
                      type="hidden"
                      name="_token"
                      value="izXwGKIGS1FvOqhgOOl6L2Ss6OLxRzIY7n7nOPbR"
                    />
                    <input
                      className="form-control form-control-lg col-md-10"
                      style={{ marginTop: 15 }}
                      type="date"
                      required=""
                    />
                    <button
                      id="novaCon"
                      type="submit"
                      className="btn  btn-lg mb-2 float-left"
                      style={{
                        margin: "auto",
                        marginTop: 15,
                        background: "#663399",
                        color: "#fff",
                        width: 110,
                        height: 45,
                      }}
                    >
                      Buscar
                    </button>
                  </div>
                </form>
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Horario</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Tipo Consulta</th>
                        <th scope="col">Ação</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Consultas;
