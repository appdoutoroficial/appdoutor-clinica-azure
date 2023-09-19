import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import photo from "../../assets/img/perf1.jpeg";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";

const Especialista = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavPainel />
      <div className="main-content-wrap sidenav-open flex-colum">
        <div className="main-content">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div className="card-body text-center">
                  <i className="icon-m i-Doctor"></i>
                  <div className="content">
                    <p className="txt-app mt-2 mb-0">Ativos</p>
                    <p className="text-primary text-24 line-height-1 mb-2 numberPacientes">
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div className="card-body text-center">
                  <i className="icon-m i-Hospital"></i>
                  <div className="content">
                    <p className="txt-app mt-2 mb-0">Inativos</p>
                    <p className="text-primary text-24 line-height-1 mb-2">0</p>
                  </div>
                </div>
              </div>
            </div>
            <a
              onClick={() => navigate("/cadastrar-especialista")}
              className="col-lg-4 col-md-6 col-sm-6"
            >
              <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div
                  className="card-body text-center"
                  style={{ background: "#21d23e", cursor: "pointer" }}
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
                      Cadastrar Especialista
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card o-hidden mb-4">
                <div className="card-header d-flex align-items-center border-0">
                  <h3 className="w-50 float-left card-title m-0 txt-app">
                    Especialistas
                  </h3>
                </div>
                <div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div
                        id="sales_table_wrapper"
                        className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12">
                            <div
                              id="example1_wrapper"
                              className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                            >
                              <div className="row">
                                <div className="col-sm-12">
                                  <table
                                    className="table dataTable-collapse text-center dataTable no-footer"
                                    id="sales_table"
                                    role="grid"
                                    aria-describedby="sales_table_info"
                                  >
                                    <thead>
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Telefone</th>
                                        <th scope="col">Ação</th>
                                      </tr>
                                    </thead>
                                    <tbody></tbody>
                                  </table>
                                  <div
                                    id="example1_processing"
                                    className="dataTables_processing card"
                                    style={{ display: "none" }}
                                  ></div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-sm-12 col-md-5">
                                  <div
                                    className="dataTables_info"
                                    id="example1_info"
                                    role="status"
                                    aria-live="polite"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Especialista;
