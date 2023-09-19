import React, { useState, useEffect } from "react";
import { useContext } from "react";
import NavBar from "../../components/NavBar";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import Cards from "react-credit-cards-2";
import AppContext from "../../context/AppContext";
import axiosConfig from "../../axiosConfig";
import Swal from "sweetalert2";

const CadastrarCartao = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  const [state, setState] = useState({
    numero: "",
    vencimento: "",
    cvv: "",
    nomeNoCartao: "",
    documento: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const onSubmit = () => {
    value.setOnboardingC((prev) => ({
      ...prev,
      pagamento: state,
    }))

    const form = value.state.onboardingC;
    form.endereco.cidade = form.endereco.localidade;
    form.endereco.estado = form.endereco.uf;
    form.endereco.numero = '123';

    var telefone = value.state.onboardingP.telefone.replace("(", "");
    telefone = telefone.replace("(", "", telefone);
    telefone = telefone.replace(")", "", telefone);
    telefone = telefone.replace(" ", "", telefone);
    telefone = telefone.replace("-", "", telefone);
    form.telefone = telefone;

    var cnpj = value.state.onboardingC.cnpj.replace("-", "");
    cnpj = cnpj.replace("/", "", cnpj);
    cnpj = cnpj.replace(".", "", cnpj);
    cnpj = cnpj.replace(".", "", cnpj);
    form.cnpj = cnpj;

    var cep = value.state.onboardingP.endereco.cep.replace("-", "");
    form.endereco.cep = cep;
    
    var cpfDoc = value.state.onboardingC.pagamento.documento.replace("-", "");
    cpfDoc = cpfDoc.replace(".", "", cpfDoc);
    cpfDoc = cpfDoc.replace(".", "", cpfDoc);
    
    form.pagamento.documento = cnpj;
    form.pagamento.bandeira = 1;
    

    var nome = value.remove_accents(form.pagamento.nomeNoCartao);
    form.pagamento.nomeNoCartao = nome;

    setTimeout(() => {
      axiosConfig.post("/Clinica/Salvar", form)
      .then((response) => {
          console.log(response);
          value.setContaRecebedora(prev => ({...prev, idClinica: response.data.id}));
          if( response.data.statusCode === 200 && response.data.sucesso ){
            Swal.fire({
                icon: "success",
                title: response.data.mensagem,
                showCancelButton: false,
                confirmButtonText: 'Ok',
            }).then((result) => {
              navigate('/cadastrar-conta')
              // saveCredencial(response.data.id)
            });
        }
      })
      .catch((err) =>{
        console.log(err);
          Swal.fire({
              icon: "warning",
              title: "Erro por favor tente mais tarde",
              showCancelButton: false,
              confirmButtonText: 'Ok',
          });
      })
    }, 1000);
  }


  console.log(state, 'STATE');
  
  return (
    <>
      <NavBar />

      <div className="request-appointment d-flex flex-column vh-100">
        <Menu />

        <Cards
          number={state.numero}
          expiry={state.vencimento}
          cvc={state.cvv}
          name={state.nomeNoCartao}
        />

        {/* body */}
        <div className="vh-100 my-auto overflow-auto p-3">
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName"
                className="form-label mb-1"
              >
                Nome do titular
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-account-outline mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  name="nomeNoCartao"
                  value={state.nomeNoCartao.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite seu nome como está no cartão"
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                Número do cartão
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <InputMask
                  type="text"
                  name="numero"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o número do seu cartão"
                  value={state.numero.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  maxLength={16}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName1"
                className="form-label mb-1"
              >
                CPF do títular
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>

                <InputMask
                  mask="999.999.999-99"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o seu CPF "
                  name="documento"
                  value={state.documento.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlName"
                className="form-label mb-1"
              >
                Vencimento do cartão
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <InputMask
                  mask="99/99"
                  type="text"
                  name="vencimento"
                  value={state.vencimento.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite a data de vencimento do cartão"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="exampleFormControlNumber"
                className="form-label mb-1"
              >
                CVV
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlNumber"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="number"
                >
                  <span className="mdi mdi-credit-card-check-outline mdi-18px" />
                </span>
                <input
                  value={state.cvv.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  type="text"
                  name="cvv"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o código de segurança"
                  aria-label="Type your number"
                  aria-describedby="number"
                  defaultValue=""
                  maxLength={3}
                />
              </div>
            </div>
          </form>
        </div>
        {/* footer */}
        <div className="footer mt-auto p-3">
          <a
             onClick={onSubmit}
            className="btn btn-info btn-lg w-100 rounded-4"
          >
            Salvar
          </a>
        </div>
        <div className="footer mt-auto p-3">
          <a
             onClick={() => navigate("/cadastrar-conta")}
            className="btn btn-info btn-lg w-100 rounded-4"
          >
            Cadastrar mais tarde
          </a>
        </div>
      </div>
    </>
  );
};

export default CadastrarCartao;
