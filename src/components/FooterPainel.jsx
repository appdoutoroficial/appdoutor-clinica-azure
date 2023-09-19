import React, { useState, useEffect } from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { width } from "@mui/system";
import photo from "../assets/img/logo-branco.png";

const Footer = () => {
  const value = useContext(AppContext);

  console.log(value);

  return (
    <footer
      className="p-3 d-flex justify-content-center navbar fixed-bottom"
      style={{ height: 60, margin: "auto", zIndex: 0 }}
    >
      <h5
        style={{ marginTop: -25, fontSize: 10, display: 'flex', justifyContent: 'center', alignItems:'center' }}
        className="text-white text-center"
        href="javascript:;"
      >
        <p>©Todos os direitos 2022 -</p>
        <img
          src={photo}
          style={{
            width: 120,
            marginTop: -15,
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 0,
          }}
        />
        <p> - CNPJ: 42.538.353/0001-90 </p>
      </h5>
    </footer>
  );
};

export default Footer;
