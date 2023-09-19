import React, { useState, useEffect } from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import photo from "../assets/img/Logo.png";
import photoPerfil from "../assets/img/ft_perfil.png";

const NavPainel = () => {
  const navigate = useNavigate;
  const value = useContext(AppContext);

  console.log(value);

  return (
    <>
      {/*  <div id="overlay" onclick="off()">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
  </div>*/}
      <div className="app-admin-wrap layout-sidebar-large">
        <div className="main-header">
          <div className="logo">
            <img src={photo} />
          </div>
          <div className="menu-toggle">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="d-flex align-items-center"></div>
          <div style={{ margin: "auto" }}></div>
          <div className="header-part-right">
            <div className="dropdown">
              <i
                className="i-Gift-Box text-muted header-icon"
                role="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></i>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="menu-icon-grid">
                  <a onClick={() => navigate("admin/indique")}>
                    <i className="i-Affiliate"></i> Indique
                  </a>
                  <a onClick={() => navigate("admin/extrato-indique")}>
                    <i className="i-Bar-Chart-2"></i>Minhas indicações
                  </a>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <div
                className="badge-top-container"
                role="button"
                id="dropdownNotification"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="badge badge-primary">3</span>
                <i className="i-Bell text-muted header-icon"></i>
              </div>

              <div
                className="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none ps"
                aria-labelledby="dropdownNotification"
                data-perfect-scrollbar=""
                data-suppress-scroll-x="true"
              >
                <div className="dropdown-item d-flex">
                  <div className="notification-icon">
                    <i className="i-Speach-Bubble-6 text-primary mr-1"></i>
                  </div>
                  <div className="notification-details flex-grow-1">
                    <p className="m-0 d-flex align-items-center">
                      <span>Nova mensagem</span>
                      <span className="badge badge-pill badge-primary ml-1 mr-1">
                        novo
                      </span>
                      <span className="flex-grow-1"></span>
                      <span className="text-small text-muted ml-auto">
                        10 sec
                      </span>
                    </p>
                    <p className="text-small text-muted m-0">
                      Bom dia a consulta para as 15 está confirmada?
                    </p>
                  </div>
                </div>
                <div className="dropdown-item d-flex">
                  <div className="notification-icon">
                    <i className="i-Address-Book-2 text-success mr-1"></i>
                  </div>
                  <div className="notification-details flex-grow-1">
                    <p className="m-0 d-flex align-items-center">
                      <span>Nova consulta cadastrada</span>
                      <span className="badge badge-pill badge-success ml-1 mr-1">
                        Dra. Ana
                      </span>
                      <span className="flex-grow-1"></span>
                      <span className="text-small text-muted ml-auto">
                        2 horas
                      </span>
                    </p>
                    <p className="text-small text-muted m-0">Carlos gomes</p>
                  </div>
                </div>
                <div className="dropdown-item d-flex">
                  <div className="notification-icon">
                    <i className="i-Calendar text-danger mr-1"></i>
                  </div>
                  <div className="notification-details flex-grow-1">
                    <p className="m-0 d-flex align-items-center">
                      <span>Consulta desmarcada</span>
                      <span className="badge badge-pill badge-danger ml-1 mr-1">
                        Dr. Antonio
                      </span>
                      <span className="flex-grow-1"></span>
                      <span className="text-small text-muted ml-auto">
                        1 hora
                      </span>
                    </p>
                    <p className="text-small text-muted m-0">Paciente Gomes</p>
                  </div>
                </div>
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                  <div
                    className="ps__thumb-x"
                    style={{ left: 0, width: 0 }}
                  ></div>
                </div>
                <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                  <div
                    className="ps__thumb-y"
                    style={{ top: 0, height: 0 }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <div className="user col align-self-end">
                <img
                  src={photoPerfil}
                  id="userDropdown"
                  alt=""
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />

                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdown"
                >
                  <div className="dropdown-header">
                    <i className="i-Lock-User mr-1"></i>
                  </div>
                  <a
                    onClick={() => navigate("admin/perfil")}
                    className="dropdown-item"
                    id="perfil"
                  >
                    Perfil
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("admin/suporte")}
                  >
                    Suporte
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => navigate("admin/sair")}
                  >
                    Sair
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-content-wrap">
          <div
            className="sidebar-left open "
            data-perfect-scrollbar=""
            data-suppress-scroll-x="true"
          >
            <ul className="navigation-left">
              <li className="nav-item" data-item="dashboard">
                <a onClick={() => navigate("admin/home/")} id="painel" className="nav-item-hold">
                  <i className="nav-icon i-Monitor-2"></i>
                  <span className="nav-text">Painel</span>
                </a>
                <div className="triangle"></div>
              </li>
              <li className="nav-item" data-item="uikits">
                <a id="paciente" onClick={() => navigate("admin/paciente")} className="nav-item-hold">
                  <i className="nav-icon  i-Administrator"></i>
                  <span className="nav-text">Pacientes</span>
                </a>
                <div className="triangle"></div>
              </li>
              <li className="nav-item" data-item="apps">
                <a id="consulta" onClick={() => navigate("admin/consultas")} className="nav-item-hold">
                  <i className="nav-icon i-Calendar"></i>
                  <span className="nav-text">Consultas</span>
                </a>
                <div className="triangle"></div>
              </li>
              <li className="nav-item" data-item="widgets">
                <a id="chat" onClick={() => navigate("admin/chat")} className="nav-item-hold">
                  <i className="nav-icon  i-Speach-Bubble-3"></i>
                  <span className="nav-text">Chat</span>
                </a>
                <div className="triangle"></div>
              </li>
              <li className="nav-item" data-item="charts">
                <a id="appPay" onClick={() => navigate("admin/appdoutor-pay")} className="nav-item-hold">
                  <i className="nav-icon i-Money1"></i>
                  <span className="nav-text">App Doutor Pay</span>
                </a>
                <div className="triangle"></div>
              </li>
              <li className="nav-item" data-item="extrakits">
                <a
                  id="especialista"
                  onClick={() => navigate("/admin/especialista")}
                  className="nav-item-hold"
                >
                  <i className="nav-icon i-Cardiovascular"></i>
                  <span className="nav-text">Especialistas</span>
                </a>
                <div className="triangle"></div>
              </li>
              <li className="nav-item" data-item="sessions">
                <a
                  id="minhaClin"
                  onClick={() => navigate("admin/minha-clinica")}
                  className="nav-item-hold"
                >
                  <i className="nav-icon i-Home1"></i>
                  <span className="nav-text">Minha Clinica</span>
                </a>
                <div className="triangle"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavPainel;
