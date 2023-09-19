import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import NavPainel from "../../components/NavPainel"
import Footer from "../../components/FooterPainel"

const Faturas = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavPainel />
      <div className="main-content-wrap sidenav-open flex-colum">
        <div className="main-content">
          <h2 className="text-center" style={{ fontWeight: "bold" }}>
            FATURAS
          </h2>
          <hr />
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Pesquisar"
              aria-label="Search"
              style={{ height: 60 }}
            />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card o-hidden mb-4">
                <div className="card-body">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th className="pay">ID</th>
                        <th className="pay">EMAIL</th>
                        <th className="pay">VALOR</th>
                        <th className="pay">VENCIMENTO</th>
                        <th className="pay">NOTA FISCAL</th>
                      </tr>
                    </thead>
                    <tbody id="">
                      <tr>
                        <td className="pay">1500</td>
                        <td className="pay">carlos@gmail.com</td>
                        <td className="pay">R$ 99,00</td>
                        <td className="pay">19/04/2022</td>
                        <td className="pay">
                          <a href="javascript:;">Baixar NF-e</a>
                        </td>
                        <td className="text-center">
                          <a className="text-success mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Right  font-weight-bold font-size"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-danger mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Billing font-weight-bold"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-success mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Dollar-Sign font-weight-bold"
                              style={{ fontSize: 18 }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>antonio@gmail.com</td>
                        <td>R$ 99,00</td>
                        <td>19/04/2022</td>
                        <td>Fatura não paga</td>
                        <td className="text-center">
                          <a className="text-success mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Right  font-weight-bold font-size"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-danger mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Billing font-weight-bold"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-danger mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Dollar-Sign font-weight-bold"
                              style={{ fontSize: 18 }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>1100</td>
                        <td>anderia@gmail.com</td>
                        <td>R$ 99,00</td>
                        <td>19/04/2022</td>
                        <td>Fatura paga</td>
                        <td className="text-center">
                          <a className="text-success mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Right  font-weight-bold font-size"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-danger mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Billing font-weight-bold"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-success mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Dollar-Sign font-weight-bold"
                              style={{ fontSize: 18 }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>120</td>
                        <td>luiza@gmail.com</td>
                        <td>R$ 99,00</td>
                        <td>19/04/2022</td>
                        <td>Fatura não paga</td>
                        <td className="text-center">
                          <a className="text-success mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Right  font-weight-bold font-size"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-danger mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Billing font-weight-bold"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-danger mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Dollar-Sign font-weight-bold"
                              style={{ fontSize: 18 }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>150</td>
                        <td>carla@gmail.com</td>
                        <td>R$ 99,00</td>
                        <td>19/04/2022</td>
                        <td>Fatura paga</td>
                        <td className="text-center">
                          <a className="text-success mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Right  font-weight-bold font-size"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-danger mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Billing font-weight-bold"
                              style={{ fontSize: 18, color: "#222d47" }}
                            ></i>
                          </a>
                          <a className="text-success mr-2" href="javascript:;">
                            <i
                              className="nav-icon i-Dollar-Sign font-weight-bold"
                              style={{ fontSize: 18 }}
                            ></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />

                  <div className="col-sm-12">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="sales_table_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous"
                          id="sales_table_previous"
                        >
                          <a
                            href="javascript:;"
                            aria-controls="sales_table"
                            data-dt-idx="0"
                            tabindex="0"
                            className="page-link"
                          >
                            Anterior
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="javascript:;"
                            aria-controls="sales_table"
                            data-dt-idx="1"
                            tabindex="0"
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="sales_table_next"
                        >
                          <a
                            href="javascript:;"
                            aria-controls="sales_table"
                            data-dt-idx="2"
                            tabindex="0"
                            className="page-link"
                          >
                            Próxima
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p>Voltar</p>
                    <a
                      onClick={() => navigate("/appdoutor-pay")}
                      className="text-success mr-2"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="nav-icon i-Previous voltar"></i>
                    </a>
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

export default Faturas;
