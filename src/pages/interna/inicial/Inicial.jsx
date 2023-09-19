import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import NavBar from "../../../components/NavBar";
import photo from "../../../assets/img/perf1.jpeg";
import photo1 from "../../../assets/img/ft_perfil.png";
import photo2 from "../../../assets/img/home/prescription.png";
import photo3 from "../../../assets/img/home/medicine.png";
import photo4 from "../../../assets/img/home/schedule.png";
import photo5 from "../../../assets/img/ftmao.png";

const Inicial = () => {
  const value = useContext(AppContext);

  var settings = {
    infinite: false,
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var settingsDoctor = {
    infinite: false,
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <NavBar />
      <div className="home d-flex flex-column vh-100">
        <div className="bg-white shadow-sm">
          <div className="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
            <div className="d-flex align-items-center gap-2 me-auto">
              <a href="/sobre">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded-circle icon"
                />
              </a>
              <div className="ps-1">
                <p className="text-orange m-0 small">Bem vindo</p>
                <p className="fw-bold mb-0 text-primary fw-bold">Olá Arthur!</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a href="#" className="bg-white shadow rounded-circle icon">
                <span className="mdi mdi-cards-heart-outline mdi-18px text-primary" />
              </a>
              <a
                href="/notificacao"
                className="bg-white shadow rounded-circle icon"
              >
                <span className="mdi mdi-bell-outline mdi-18px text-primary" />
              </a>
              <a
                href="javascript:;"
                onClick={() => value.setMenuObject(!value.state.changeMenu)}
                className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
              >
                <i className="mdi mdi-menu text-primary fs-5 d-flex" />
              </a>
            </div>
          </div>
          <div className="px-3 pb-3">
            <form>
              <div className="input-group rounded-4 shadow py-1 px-3 bg-light">
                <span
                  className="input-group-text bg-transparent text-muted border-0 p-0"
                  id="search"
                >
                  <span className="mdi mdi-magnify mdi-24px text-primary" />
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent text-muted rounded-0 border-0 px-3"
                  placeholder="Pesquisar"
                  aria-label="Search"
                  aria-describedby="search"
                />
                <a
                  href="#"
                  className="input-group-text bg-transparent text-muted border-0 border-start pe-0"
                  id="search"
                >
                  <span className="mdi mdi-filter-outline mdi-18px color" />
                </a>
              </div>
            </form>
          </div>
        </div>
        {/* body */}
        <div className="vh-100 my-auto body-fix-osahan-footer">
          {/* Available doctors */}
          <div className="mb-0 pt-3">
            <div className="cardHome">
              <h2 className="mb-2 pb-1 fw-bold px-3 text-1">
                DRA REGINA BIASOLI
              </h2>
              <p
                className="mb-2 pb-1  px-3 txt-2 fw-bold"
                style={{ fontSize: 12 }}
              >
                HEMATOLOGISTA E CLÍNICA GERAL - CRM 75627
              </p>
            </div>
            <div className="col-12 col-md-8 col-lg-4 col-xl-5">
              <div className="box-perf1">
                <img src={photo1} alt="" />
              </div>
            </div>
            <div className="box-perf2">
              <img className="card-img-1" src={photo5} alt="Card image cap" />
            </div>
            <div className="txt3">
              <p className="txt-photo">DOUTORA É POSSIVEL EVITAR A TROMBOSE?</p>
              <p className="txt-photo2">24 DE AGOSTO DE 2022</p>
            </div>
          </div>
          <div className="p-3 mb-2">
            <div
              className="row row-cols-8 g-2"
              style={{ justifyContent: "center" }}
            >
              <div className="col">
                <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                  <a href="/agenda" className="link-dark">
                    <img src={photo4} alt="" className="img-fluid px-2" />
                    <p className="text-truncate small pt-2 m-0">Agenda</p>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                  <a href="/exame" className="link-dark">
                    <img src={photo2} alt="" className="img-fluid px-2" />
                    <p className="text-truncate small pt-2 m-0">Exames</p>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                  <a href="/receita" className="link-dark">
                    <img src={photo3} alt="" className="img-fluid px-2" />
                    <p className="text-truncate small pt-2 m-0">Receitas</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Top Doctor */}
          <div className=" my-auto overflow-auto body-fix-osahan-footer">
            <div className="mb-3">
              <h6 className="mb-2 pb-1 fw-bold px-3 text-1">Especialistas</h6>
              <Slider {...settingsDoctor} className="top-doctors">
                <div className="top-doctor-item" style={{ width: 349 }}>
                  <a href="/sobre" className="link-dark">
                    <div
                      className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden"
                      style={{ width: "95%", margin: "auto" }}
                    >
                      <img
                        src={photo1}
                        className="card-img-top top-doctor-img"
                        alt="..."
                      />
                      <div className="card-body small p-3 osahan-card-body">
                        <p className="card-title fw-semibold mb-0 text-truncate fs-14">
                          Dra. Regina Biasoli
                        </p>
                        <p className="card-text text-muted small m-0">
                          Especialista em trombofilia
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="top-doctor-item" style={{ width: 349 }}>
                  <a href="/sobre" className="link-dark">
                    <div
                      className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden"
                      style={{ width: "95%", margin: "auto" }}
                    >
                      <img
                        src={photo1}
                        className="card-img-top top-doctor-img"
                        alt="..."
                      />
                      <div className="card-body small p-3 osahan-card-body">
                        <p className="card-title fw-semibold mb-0 text-truncate fs-14">
                          Dra. Regina Biasoli
                        </p>
                        <p className="card-text text-muted small m-0">
                          Especialista em trombofilia
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="top-doctor-item" style={{ width: 349 }}>
                  <a href="/sobre" className="link-dark">
                    <div
                      className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden"
                      style={{ width: "95%", margin: "auto" }}
                    >
                      <img
                        src={photo1}
                        className="card-img-top top-doctor-img"
                        alt="..."
                      />
                      <div className="card-body small p-3 osahan-card-body">
                        <p className="card-title fw-semibold mb-0 text-truncate fs-14">
                          Dra. Regina Biasoli
                        </p>
                        <p className="card-text text-muted small m-0">
                          Especialista em trombofilia
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="space1" />
      </div>
      {/* footer */}
      <div className="footer mt-auto p-3 fix-osahan-footer1">
        <div className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
          <a href="/inicio" className="col footer-bottom-nav active">
            <span className="mdi mdi-home-variant-outline mdi-24px" />
            <span>Home</span>
          </a>
          <a href="/pesquisar" className="col footer-bottom-nav">
            <span className="mdi mdi-magnify mdi-24px" />
            <span>Pesquisar</span>
          </a>
          <a href="/video" className="col footer-bottom-nav">
            <span className="mdi mdi-video-outline mdi-24px" />
            <span>Telemedicina</span>
          </a>
          <a href="/chat" className="col footer-bottom-nav">
            <span className="mdi mdi-message-processing-outline mdi-24px" />
            <span>Chat</span>
          </a>
          <a href="/perfil" className="col footer-bottom-nav">
            <span className="mdi mdi-account-outline mdi-24px" />
            <span>Perfil</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Inicial;
