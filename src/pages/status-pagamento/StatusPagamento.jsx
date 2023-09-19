import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import photo from "../../assets/img/perf1.jpeg";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";

const StatusPagamento = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavPainel />
      <div className="main-content-wrap sidenav-open flex-colum">
        <div className="main-content">
          <div className="row">
            <div className="col-lg-8 col-xl-8 mt-4">
              <div className="cardPag bg-defualt text-black">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="ul-widget_user-card">
                      <div className="ul-widget4__img">
                        <img src={photo} />
                      </div>
                    </div>
                    <h5 className="text-18 font-weight-700 card-title m-0">
                      Carlos Rodrigues
                    </h5>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <i className="i-Administrator text-22 mr-2"></i>
                    <h2 className="text-18 font-weight-700 card-title m-0">
                      Dados do paciente
                    </h2>
                  </div>
                  <form action="" className="">
                    <div className="row">
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          E-mail
                        </label>
                        <p className="font-weight-400 mb-2">
                          carlos@carlos.com
                        </p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Contato
                        </label>
                        <p className="font-weight-400 mb-2">(11) 95548-0000</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          CPF
                        </label>
                        <p className="font-weight-400 mb-2">353.458.858-01</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Endereço
                        </label>
                        <p className="font-weight-400 mb-2">
                          Rua Capote Valente
                        </p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Número
                        </label>
                        <p className="font-weight-400 mb-2">500</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Cidade
                        </label>
                        <p className="font-weight-400 mb-2">São Paulo</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Estado
                        </label>
                        <p className="font-weight-400 mb-2">SP</p>
                      </div>
                    </div>
                  </form>
                  <hr />
                  <div className="d-flex align-items-center mb-4">
                    <i className="i-Dollar-Sign-2 text-22 mr-2"></i>
                    <h2 className="text-18 font-weight-700 card-title m-0">
                      Dados do pagamento
                    </h2>
                  </div>
                  <form action="" className="">
                    <div className="row">
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Atendido por
                        </label>
                        <p className="font-weight-400 mb-2">
                          Dr Antonio Rodrigues
                        </p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          E-mail
                        </label>
                        <p className="font-weight-400 mb-2">
                          Antonio@clinicax.com
                        </p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Tipo de consulta
                        </label>
                        <p className="font-weight-400 mb-2">Presencial</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Clínica
                        </label>
                        <p className="font-weight-400 mb-2">Consolação 1</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Contato clínica
                        </label>
                        <p className="font-weight-400 mb-2">(11) 3368-0000</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Valor da consulta
                        </label>
                        <p className="font-weight-400 mb-2">R$ 500,00</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Forma de Pagamento
                        </label>
                        <p className="font-weight-400 mb-2">
                          Cartão de crédito
                        </p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Número do cartão
                        </label>
                        <p className="font-weight-400 mb-2">******5054</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Parcelas
                        </label>
                        <p className="font-weight-400 mb-2">1</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Pagamento efetuado em
                        </label>
                        <p className="font-weight-400 mb-2">15/07/2022</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Taxa App Doutor
                        </label>
                        <p className="font-weight-400 mb-2">R$ 2,50</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Voltar</p>
                        <a className="text-success mr-2" href="extratos/">
                          <i className="nav-icon i-Previous voltar"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-xl-4 mt-4">
              <div className="card status">
                <div className="card-body">
                  <div className="ul-widget__head __g-support v-margin">
                    <div className="ul-widget__head-label">
                      <h3 className="ul-widget__head-title">
                        Status do pagamento
                      </h3>
                    </div>
                  </div>
                  <div className="ul-widget__body">
                    <div className="ul-widget-s7">
                      <div className="ul-widget-s7__items">
                        <span className="ul-widget-s7__item-time">08:00</span>
                        <div className="ul-widget-s7__item-circle">
                          <p className="badge-dot-warning ul-widget7__big-dot"></p>
                        </div>
                        <div className="ul-widget-s7__item-text">
                          Aguardando Pagamento
                        </div>
                      </div>
                    </div>
                    <div className="ul-widget-s7">
                      <div className="ul-widget-s7__items">
                        <span className="ul-widget-s7__item-time">08:05</span>
                        <div className="ul-widget-s7__item-circle">
                          <p className="badge-dot-primary ul-widget7__big-dot"></p>
                        </div>
                        <div className="ul-widget-s7__item-text">
                          Processando Pagamento
                        </div>
                      </div>
                    </div>
                    <div className="ul-widget-s8">
                      <div className="ul-widget-s8__items">
                        <span className="ul-widget-s8__item-time">08:20</span>
                        <div className="ul-widget-s8__item-circle">
                          <p className="badge-dot-success ul-widget7__big-dot"></p>
                        </div>
                        <div className="ul-widget-s8__item-text">
                          Pagamento Efetuado
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-xl-8 mt-4">
              <div className="cardPag bg-defualt text-black">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="ul-widget_user-card">
                      <div className="ul-widget4__img">
                        <img src={photo} />
                      </div>
                    </div>
                    <h5 className="text-18 font-weight-700 card-title m-0">
                      Carlos Rodrigues
                    </h5>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <i className="i-Administrator text-22 mr-2"></i>
                    <h2 className="text-18 font-weight-700 card-title m-0">
                      Dados do paciente
                    </h2>
                  </div>
                  <form action="" className="">
                    <div className="row">
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          E-mail
                        </label>
                        <p className="font-weight-400 mb-2">
                          carlos@carlos.com
                        </p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Contato
                        </label>
                        <p className="font-weight-400 mb-2">(11) 95548-0000</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          CPF
                        </label>
                        <p className="font-weight-400 mb-2">353.458.858-01</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Endereço
                        </label>
                        <p className="font-weight-400 mb-2">
                          Rua Capote Valente
                        </p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Número
                        </label>
                        <p className="font-weight-400 mb-2">500</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Cidade
                        </label>
                        <p className="font-weight-400 mb-2">São Paulo</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Estado
                        </label>
                        <p className="font-weight-400 mb-2">SP</p>
                      </div>
                    </div>
                  </form>
                  <hr />
                  <div className="d-flex align-items-center mb-4">
                    <i className="i-Dollar-Sign-2 text-22 mr-2"></i>
                    <h2 className="text-18 font-weight-700 card-title m-0">
                      Dados do pagamento
                    </h2>
                  </div>
                  <form action="" className="">
                    <div className="row">
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Atendido por
                        </label>
                        <p className="font-weight-400 mb-2">
                          Dr Antonio Rodrigues
                        </p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          E-mail
                        </label>
                        <p className="font-weight-400 mb-2">
                          Antonio@clinicax.com
                        </p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Tipo de consulta
                        </label>
                        <p className="font-weight-400 mb-2">Presencial</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Clínica
                        </label>
                        <p className="font-weight-400 mb-2">Consolação 1</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Contato clínica
                        </label>
                        <p className="font-weight-400 mb-2">(11) 3368-0000</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Valor da consulta
                        </label>
                        <p className="font-weight-400 mb-2">R$ 500,00</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Forma de Pagamento
                        </label>
                        <p className="font-weight-400 mb-2">Boleto</p>
                      </div>
                      <div className=" mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Número do Boleto
                        </label>
                        <p className="font-weight-400 mb-2">
                          10491.12343.56990.000004 00000.000422 3 56740000045000
                        </p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Pagamento efetuado em
                        </label>
                        <p className="font-weight-400 mb-2">15/07/2022</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <label for="" className="extratoPG">
                          Taxa App Doutor
                        </label>
                        <p className="font-weight-400 mb-2">R$ 2,50</p>
                      </div>
                      <div className="mb-4 col-md-4">
                        <p className="font-weight-400 mb-2">Voltar</p>
                        <a className="text-success mr-2" href="extratos/">
                          <i className="nav-icon i-Previous voltar"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space"></div>
        <div className="space"></div>
      </div>
      <Footer />
    </>
  );
};

export default StatusPagamento;
