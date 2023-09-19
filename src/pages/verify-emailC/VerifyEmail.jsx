import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import AppContext from "../../context/AppContext";
import axiosConfig from "../../axiosConfig";
import Swal from "sweetalert2";

const VerifyEmail = (props) => {
  const navigate = useNavigate();
  const [sms, setSMS] = useState("");
  const value = useContext(AppContext);

  console.log(value, sms);

  
  const verifySms = () => {
    if( sms != '' ){
      var email = value.state.onboardingP.email.replace("(", "");
      axiosConfig.post("/Clinica/ValidaEmail?email="+email+"&pin="+sms.replace(" ", ""))
      .then((response) => {
        if( response.data.statusCode === 200 && response.data.sucesso ){
            Swal.fire({
                icon: "success",
                title: response.data.mensagem,
                showCancelButton: false,
                confirmButtonText: 'Ok',
            }).then((result) => {
                navigate('/cadastrar-cartao')
            });
        }
      })
      .catch((err) =>{
          Swal.fire({
              icon: "warning",
              title: "Erro por favor tente mais tarde",
              showCancelButton: false,
              confirmButtonText: 'Ok',
          });
      })
    }
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
        <a
          onClick={() => navigate("/verifica")}
          className="text-dark bg-white shadow rounded-circle icon"
        >
          <span className="mdi mdi-arrow-left mdi-18px"></span>
        </a>
        <h6 className="mb-0 txt-center me-auto fw-bold">
          CÓDIGO DE VERIFICAÇÃO E-MAIL
        </h6>
      </div>
      <div className="verify p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-check-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">Verificação</h2>
            <p className="text-muted mb-0">
              Digite o código enviado para seu e-mail
            </p>
          </div>
        </div>
        <div className="d-flex gap-1 mb-2">
          <div className="col">
            <InputMask
              mask="999999"
              maskChar={""}
              name="codigo"
              value={props.value}
              onChange={(val) => setSMS(val.target.value)}
              className="form-control form-control-lg text-center py-3"
            />
          </div>
        </div>
        <p className="text-muted text-center mt-4">
          Não recebeu o código?{" "}
          {/* <a onClick={() => navigate('')} className="ml-2 primario">
            Enviar novamente
          </a> */}
        </p>
      </div>
      <div className="footer fixed-bottom m-4">
        <a onClick={verifySms} className="btn btn-info btn-lg w-100 rounded-4">
          Confirma
        </a>
      </div>
    </>
  );
};

export default VerifyEmail;
