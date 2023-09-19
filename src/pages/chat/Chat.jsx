import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from "react-perfect-scrollbar";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";
import photo from "../../assets/img/perf1.jpeg"

const Chat = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavPainel />
      <PerfectScrollbar>
        <div className="main-content-wrap sidenav-open flex-column">
          <div className="main-content">
            <div
              className="card chat-sidebar-container"
              data-sidebar-container="chat"
            >
              <div className="chat-sidebar-wrap" data-sidebar="chat">
                <div className="border-right">
                  <div className="pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar">
                    <a
                      className="link-icon d-md-none"
                      data-sidebar-toggle="chat"
                    >
                      <i className="icon-regular ml-0 mr-3 i-Left"></i>
                    </a>
                    <div className="form-group m-0 flex-grow-1">
                      <input
                        className="form-control form-control-rounded"
                        id="search"
                        type="text"
                        placeholder="Buscar contatos"
                      />
                    </div>
                  </div>
                  <div className="contacts-scrollable perfect-scrollbar">
                    <div className="mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom">
                      Recentes
                    </div>
                    <div className="p-3 d-flex align-items-center border-bottom online contact">
                      <img src= {photo}
                        className="avatar-sm rounded-circle mr-3"                       
                        alt="alt"
                      />
                      <div>
                        <h6 className="m-0">Antonio Carlos</h6>
                        <span className="text-muted text-small">
                          3 Oct, 2022
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom">
                      Contatos
                    </div>
                    <div className="p-3 d-flex border-bottom align-items-center contact online">
                      <img src={photo}
                        className="avatar-sm rounded-circle mr-3"                        
                        alt="alt"
                      />
                      <h6>William Ferreira</h6>
                    </div>
                    <div className="p-3 d-flex border-bottom align-items-center contact online">
                      <img src={photo}
                        className="avatar-sm rounded-circle mr-3"                      
                        alt="alt"
                      />
                      <h6>Jaqueline Day</h6>
                    </div>
                    <div className="p-3 d-flex border-bottom align-items-center contact">
                      <img src = {photo}
                        className="avatar-sm rounded-circle mr-3"
                        alt="alt"
                      />
                      <h6>Jhone Will</h6>
                    </div>
                  </div>
                </div>
              </div>              
              <PerfectScrollbar>
              <div className="chat-content-wrap">
                <div className="d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar">
                  <a className="link-icon d-md-none">
                    <i className="icon-regular i-Right ml-0 mr-3"></i>
                  </a>
                  <div className="d-flex align-items-center">
                    <img src= {photo}
                      className="avatar-sm rounded-circle mr-2"                      
                      alt="alt"
                    />
                    <p className="m-0 text-title text-16 flex-grow-1">
                      Francisco Silva
                    </p>
                  </div>
                </div>
                <div
                  className="chat-content perfect-scrollbar"
                  data-suppress-scroll-x="true"
                >
                  <div className="d-flex mb-4">
                    <div className="message flex-grow-1">
                      <div className="d-flex">
                        <p className="mb-1 text-title text-16 flex-grow-1">
                          Francisco Silva
                        </p>
                        <span className="text-small text-muted">
                          25 min ago
                        </span>
                      </div>
                      <p className="m-0">Teremos a consulta as 17:00 ?</p>
                    </div>
                    <img src= {photo}
                      className="avatar-sm rounded-circle ml-3"
                      alt="alt"
                    />
                  </div>
                  <div className="d-flex mb-4 user">
                    <img src= {photo}
                      className="avatar-sm rounded-circle mr-3"                      
                      alt="alt"
                    />
                    <div className="message flex-grow-1">
                      <div className="d-flex">
                        <p className="mb-1 text-title text-16 flex-grow-1">
                          João
                        </p>
                        <span className="text-small text-muted">
                          24 min ago
                        </span>
                      </div>
                      <p className="m-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div className="message flex-grow-1">
                      <div className="d-flex">
                        <p className="mb-1 text-title text-16 flex-grow-1">
                          Francisco Silva
                        </p>
                        <span className="text-small text-muted">
                          25 min ago
                        </span>
                      </div>
                      <p className="m-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <img src= {photo}
                      className="avatar-sm rounded-circle ml-3"                      
                      alt="alt"
                    />
                  </div>
                  <div className="d-flex mb-4 user">
                    <img src= {photo}
                      className="avatar-sm rounded-circle mr-3"                      
                      alt="alt"
                    />
                    <div className="message flex-grow-1">
                      <div className="d-flex">
                        <p className="mb-1 text-title text-16 flex-grow-1">
                          João
                        </p>
                        <span className="text-small text-muted">
                          24 min ago
                        </span>
                      </div>
                      <p className="m-0">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
                <div className="pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area">
                  <form className="inputForm">
                    <div className="form-group">
                      <textarea
                        className="form-control form-control-rounded"
                        id="message"
                        placeholder="Escreva sua mensagem"
                        name="message"
                        cols="30"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="d-flex">
                      <div className="flex-grow-1"></div>
                      <button className="btn btn-icon btn-rounded btn-primary mr-2">
                        <i className="i-Paper-Plane"></i>
                      </button>
                      <button
                        className="btn btn-icon btn-rounded btn-outline-primary"
                        type="button"
                      >
                        <i className="i-Add-File"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              </PerfectScrollbar>;            
             
             
            </div>
          </div>
        </div>
      </PerfectScrollbar>
      <Footer />
    </>
  );
};

export default Chat;
