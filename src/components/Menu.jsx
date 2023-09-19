import React, { useState, useEffect } from "react";
import { useContext } from "react";
// import logo from '../assets/images/logo-branco.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import photo from '../assets/img/perf1.jpeg';
import AppContext from "../context/AppContext";



const NavBar = () => {
    const value = useContext(AppContext);

    // value está a variável que tem a verificação se é para abrir ou não = (changeMenu)
    const navigate = useNavigate();
   
    // Aqui fazer a verificação e adicionar a classe, quando clicar passa o elemento atualizando para a raiz e boas. Colocar no nav ou onde precisa.

    console.log(value.state.changeMenu);
    var styles = {
        menuOpen: {
            backgroundColor: value.state.changeMenu ? 'red' : ' #000',            
            
        }
        
    }    

    return (
        <div style={styles.menuOpen} className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
            <a onClick={() => navigate('/admin/index')} className="text-dark bg-white shadow rounded-circle icon" >
                <span className="mdi mdi-arrow-left mdi-18px" />
            </a>

            <h6 className="mb-0 txt-center fw-bold">Cadastre seu cartão</h6>

            <div className="d-flex align-items-center gap-3">
                <a href="javascript:;" onClick={() => value.setMenuObject(!value.state.changeMenu)} className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5">
                    <i className="mdi mdi-menu" style={value.state.changeMenu ? {zIndex: 1000000} : {}} />
                </a>
            </div>
        </div>
    )
}

export default NavBar;