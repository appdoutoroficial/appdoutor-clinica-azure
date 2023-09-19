import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";
import ReactEcharts from "echarts-for-react";

const Extratos = () => {
  const daysOfMonth = [];
  const numberOfDays = 31; // Change this based on the month

  for (let i = 1; i <= numberOfDays; i++) {
    daysOfMonth.push(i);
  }
  const navigate = useNavigate();
  return (
    <>
      <NavPainel />
      <div className="main-content-wrap sidenav-open flex-colum">
        <div className="row">
          <div className="mt-12 col-md-12">
            <div className="card bg-defualt text-black">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <i className="i-Receipt text-22 mr-2"></i>
                  <h5 className="text-18 font-weight-700 card-title m-0">
                    Extrato
                  </h5>
                </div>

                <form action="" className="">
                  <div className="row extrato">
                    <div className=" mb-4 col-md-2">
                      <p className="font-weight-400 mb-2">Filtrar de:</p>
                      <input
                        className="form-control"
                        type="date"
                        name="date"
                        required=""
                      />
                    </div>
                    <div className=" mb-4 col-md-2">
                      <p className="font-weight-400 mb-2">Até:</p>
                      <input
                        className="form-control"
                        type="date"
                        name="date"
                        required=""
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">
                        Filtrar por movimentação
                      </p>
                      <select className="form-control" name="" id="">
                        <option>Selecione</option>
                        <option>Antecipação</option>
                        <option>Pagamento pendente</option>
                        <option>Saques realizados</option>
                        <option>Saques em andamento</option>
                        <option>Saldo bloqueado</option>
                      </select>
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Antecipações</p>
                      <select className="form-control" name="" id="">
                        <option>1 Pendente</option>
                        <option>10/07/22 Realizada</option>
                        <option>05/07/22 Realizada</option>
                        <option>03/07/22 Realizada</option>
                        <option>15/06/22 Pendente</option>
                        <option>12/06/22 Realizada</option>
                        <option>11/06/22 Cancelada</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mt-12 col-md-12">
            <div className="card bg-defualt text-black">
              <div className="card-body">
                <div className="row pacients">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                      <div className="card-body text-center">
                        <i className="icon-m i-Cardiovascular"></i>
                        <div className="content">
                          <p className="txt-app2 mt-2 mb-0">Atendimentos</p>
                          <br />
                          <br />
                          <p className="text-primary text-24 line-height-1 mb-2 numberPacientes">
                            120
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                      <div className="card-body text-center">
                        <i className="icon-m i-Bar-Chart"></i>
                        <div className="content">
                          <p className="txt-app2 mt-0 mb-0 text-center">
                            Ticket médio
                          </p>
                          <br />
                          <br />
                          <p className="text-primary text-24 line-height-1 mb-2">
                            150,00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                      <div className="card-body text-center">
                        <i className="icon-m i-Dollar"></i>
                        <div className="content">
                          <p className="txt-app2 mt-0 mb-0">Pago</p>
                          <br />
                          <br />
                          <p className="text-primary text-24 line-height-1 mb-2">
                            12.000,00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                      <div className="card-body text-center">
                        <i className="icon-m i-Wallet-21"></i>
                        <div className="content">
                          <p className="txt-app2 mt-0 mb-0">Pendente</p>
                          <br />
                          <br />
                          <p className="text-primary text-24 line-height-1 mb-2">
                            15.500,00
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
                          <p className="txt-app2 mt-0 mb-0">Convênio</p>
                          <br />
                          <br />
                          <p className="text-primary text-24 line-height-1 mb-2">
                            1.220,00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="col-lg-4 col-md-6 col-sm-6"
                    data-toggle="modal"
                    data-target="#exampleModal1"
                  >
                    <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                      <div
                        className="card-body text-center"
                        style={{ background: "#21d23e", cursor: "pointer" }}
                      >
                        <i
                          className="i-Bank"
                          style={{ fontSize: 64, color: "#fff" }}
                        ></i>
                        <div className="content">
                          <p
                            className="text-withe text-24 mt-2 mb-0 cadastrar"
                            style={{
                              color: "#fff",
                              fontSize: 20,
                              fontWeight: "bold",
                            }}
                          >
                            Solicitar antecipação
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4 graf">
                  <div
                    className="card-title txt-app"
                    style={{ padding: 10, margin: "auto" }}
                  >
                    Comparativo de receita Diário
                  </div>
                  <ReactEcharts
                    key={Date.now()}
                    theme="light"
                    option={{
                      color: ["#3398DB"],
                      tooltip: {
                        trigger: "axis",
                        axisPointer: {
                          type: "shadow",
                        },
                      },
                      grid: {},
                      xAxis: [
                        {
                          type: "category",
                          data: daysOfMonth,
                        },
                      ],
                      yAxis: [
                        {
                          type: "value",
                        },
                      ],
                      series: [
                        {
                          type: "line",
                          barWidth: "60%",
                          data: [
                            1290, 1330, 1620, 2000, 7000, 20000, 1290, 1330,
                            1620, 2000, 7000, 20000, 1330, 1320, 820, 932, 901,
                            934, 1290, 1330, 1320, 820, 13000, 901, 934, 1290,
                            1330, 1620, 2000, 7000, 20000,
                          ],
                        },
                      ],
                    }}
                    style={{ width: "100%", height: 400 }}
                  />
                </div>
                <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4 graf">
                  <div className="extratosDia">
                    <div className="row mb-4">
                      <div className="col-md-12 mb-3">
                        <div className="card1 text-left">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Visualizar</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">RV-126749</th>
                                    <td>01/07/2022</td>
                                    <td>R$ 5.800,00</td>
                                    <td>
                                      <span className="badge badge-info">
                                        Processando
                                      </span>
                                    </td>
                                    <td>
                                      <a
                                       onClick={() => navigate("")}
                                        className="text-success mr-2"                                       
                                      >
                                        <i className="nav-icon icon-eye-open font-weight-bold"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">RV-126748</th>
                                    <td>01/07/2022</td>
                                    <td>R$ 5.800,00</td>
                                    <td>
                                      <span className="badge badge-info">
                                        Processando
                                      </span>
                                    </td>
                                    <td>
                                      <a
                                        className="text-success mr-2"
                                        onClick={() => navigate("")}
                                      >
                                        <i className="nav-icon icon-eye-open font-weight-bold"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">RV-126747</th>
                                    <td>01/07/2022</td>
                                    <td>R$ 5.800,00</td>
                                    <td>
                                      <span className="badge badge-warning">
                                        Aguardando
                                      </span>
                                    </td>
                                    <td>
                                      <a
                                        className="text-success mr-2"
                                        onClick={() => navigate("")}
                                      >
                                        <i className="nav-icon icon-eye-open font-weight-bold"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">RV-126746</th>
                                    <td>01/07/2022</td>
                                    <td>R$ 5.800,00</td>
                                    <td>
                                      <span className="badge badge-danger">
                                        Estorno
                                      </span>
                                    </td>
                                    <td>
                                      <a
                                        className="text-success mr-2"
                                        onClick={() => navigate("")}
                                      >
                                        <i className="nav-icon icon-eye-open font-weight-bold"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">RV-126745</th>
                                    <td>01/07/2022</td>
                                    <td>R$ 5.800,00</td>
                                    <td>
                                      <span className="badge badge-success">
                                        Disponível
                                      </span>
                                    </td>
                                    <td>
                                      <a
                                        className="text-success mr-2"
                                        onClick={() => navigate("")}
                                      >
                                        <i className="nav-icon icon-eye-open font-weight-bold"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">RV-126744</th>
                                    <td>01/07/2022</td>
                                    <td>R$ 5.800,00</td>
                                    <td>
                                      <span className="badge badge-success">
                                        Disponível
                                      </span>
                                    </td>
                                    <td>
                                      <a
                                        className="text-success mr-2"
                                        onClick={() => navigate("")}
                                      >
                                        <i className="nav-icon icon-eye-open font-weight-bold"></i>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-weight-400 mb-2">Voltar</p>
                <a  onClick={() => navigate("/appdoutor-pay")}className="text-success mr-2">
                  <i className="nav-icon i-Previous voltar"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Solicitar Antecipação
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="" className="sendAntecipa">
                  <div className="form-group">
                    <label for="message-text" className="col-form-label">
                      Quantia Solicitada*
                    </label>
                    <div className="input-group mb-2" id="">
                      <input
                        type="text"
                        id="money2"
                        className="form-control money2"
                        name="money"
                        data-mask="#.##0,00"
                        placeholder="EX: 3.500,00"
                        aria-label=""
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success ml-2" type="submit">
                      Solicitar Antecipação
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      data-dismiss="modal"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="space"></div>       
      </div>
      <Footer />
    </>
  );
};

export default Extratos;
