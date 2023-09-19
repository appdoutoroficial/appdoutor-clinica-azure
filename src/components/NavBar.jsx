import React, { useState, useEffect } from "react";
import { useContext } from "react";
// import logo from '../assets/images/logo-branco.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import photo from '../assets/img/logo-app.png';
import AppContext from "../context/AppContext";


const NavBar = () => {
   const value = useContext(AppContext);

   // Aqui fazer a verificação e adicionar a classe, quando clicar passa o elemento atualizando para a raiz e boas. Colocar no nav ou onde precisa.

   return (
      <nav id="main-nav" className={`hc-offcanvas-nav hc-nav-1 nav-levels-overlap nav-position-left disable-body  ${value.state.changeMenu ? 'nav-open' : 'hidden' }`} style={value.state.changeMenu ? {visibility:'visible', display: 'block', } : {}}  >
            <ul className="second-nav">
               <li className="osahan-user-profile bg-primary">
                  <div className="d-flex align-items-center gap-2">
                     <img src={photo} alt="" className="rounded-pill img-fluid"/>
                     <div className="ps-1">
                        <h6 className="fw-bold text-white mb-0">Arthur Bastos</h6>
                        <p className="text-white-50 m-0 small">(11) 95599-9988</p>
                     </div>
                  </div>
               </li>           
               <li><a href="#"><span className="mdi mdi-bell-outline me-3"></span>Notificações</a></li>
               <li><a href="/inicio"><span className="mdi mdi-home-variant-outline me-3"></span>Home</a></li>
               <li><a href="/mapa"><span className="mdi mdi-car me-3"></span>Rota</a></li>                              
               <li><a href="/pagamento"><span className="mdi mdi-file-table-box-outline me-3"></span>Pagamento</a></li>         
               <li>
                  <a href="#"><span className="mdi mdi-account-outline me-3"></span>Opções</a>
                  <ul>
                     <li><a href="/perfil"><span className="mdi mdi-account-outline me-3"></span>Minha conta</a></li>
                     <li><a href="/iniciar-consulta"><span className="mdi mdi-calendar-clock me-3"></span>Próximas consultas</a></li>
                     <li><a href="my-appointment.html"><span className="mdi mdi-calendar-range me-3"></span>Minhas consultas</a></li>
                     <li><a href="history.html"><span className="mdi mdi-history me-3"></span>Histórico</a></li>
                     <li><a href="favorite-doctor.html"><span className="mdi mdi-cards-heart-outline me-3"></span>Favoritos</a></li>
                     <li><a href="change-profile.html"><span className="mdi mdi-square-edit-outline me-3"></span>Editar conta</a></li>
                  </ul>
               </li>
               <li><a href="video.html"><span className="mdi mdi-video-outline me-3"></span>Telemedicina</a></li>                    
               <li><a href="chat.html"><span className="mdi mdi-chat-processing-outline me-3"></span>Chat</a></li>
               <li><a href="review.html"><span className="mdi mdi-star-half-full me-3"></span>Avaliar especialista</a></li>
               <li><a href="index.html"><span className="mdi mdi-login me-3"></span>Sair</a></li>
               <li><a href="inicial.html"><span className="mdi mdi-login me-3"></span>Tela carregar</a></li>
            </ul>   
            <ul className="bottom-nav">
               <li className="home">
                  <a href="https://www.facebook.com/drareginabiasoli/">
                     <p className="h5 m-0"><span className="mdi mdi-facebook"></span></p>
                     Facebook
                  </a>
               </li>
               <li className="find">
                  <a href="https://www.instagram.com/drareginabiasoli/">
                     <p className="h5 m-0"><span className="mdi mdi-instagram"></span></p>
                     Instagram
                  </a>
               </li>
               <li className="more">
                  <a href="https://drareginabiasoli.com.br/">
                     <p className="h5 m-0"><span className="mdi mdi-web"></span></p>
                     Site
                  </a>
               </li>
            </ul>     
         </nav>
    )
}

export default NavBar;