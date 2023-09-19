import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";

const Paciente = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavPainel />
      <div class="main-content-wrap sidenav-open flex-colum">
        <div class="main-content">
          <div class="row pacients">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div class="card-body text-center">
                  <i class="icon-m i-Bar-Chart"></i>
                  <div class="content">
                    <p class="txt-app mt-2 mb-0">Acessos</p>
                    <p class="text-primary text-24 line-height-1 mb-2">0</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div class="card-body text-center">
                  <i class="icon-m i-Administrator"></i>
                  <div class="content">
                    <p class="txt-app mt-2 mb-0">Pacientes</p>
                    <p class="text-primary text-24 line-height-1 mb-2 numberPacientes">
                      0
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              onClick={() => navigate("/cadastrar-paciente")}
              class="col-lg-4 col-md-6 col-sm-6"
            >
              <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                <div
                  class="card-body text-center"
                  style={{ background: "#21d23e", cursor: "pointer" }}
                >
                  <i
                    class="i-Add-User"
                    style={{ fontSize: 64, color: "#fff" }}
                  ></i>
                  <div class="content">
                    <p
                      class="text-withe text-24 mt-2 mb-0 cadastrar"
                      style={{ color: "#fff", fontSize: 20 }}
                    >
                      Cadastrar Paciente
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="card o-hidden mb-4">
                <div class="card-header d-flex align-items-center border-0">
                  <h3 class="w-50 float-left card-title m-0 txt-app">
                    Pacientes
                  </h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <div
                      id="sales_table_wrapper"
                      class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                    >
                      <div class="row">
                        <div class="col-sm-12">
                          <div
                            id="example1_wrapper"
                            class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                          >
                            <div class="row">
                              <div class="col-sm-12">
                                <table
                                  class="table dataTable-collapse text-center dataTable no-footer"
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
                                <hr />
                                <div
                                  id="example1_processing"
                                  class="dataTables_processing card"
                                  style={{ display: "none" }}
                                ></div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-sm-12 col-md-5">
                                <div
                                  class="dataTables_info"
                                  id="example1_info"
                                  role="status"
                                  aria-live="polite"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Paciente;
