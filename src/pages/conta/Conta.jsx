import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";

const Conta = (props) => {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const value = useContext(AppContext);
  console.log(value);

  const onSubmit = (e) => {
    console.log(e);
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        value.setOnboardingP((prev) => ({ ...prev, endereco: data }));
      });
  };

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const navigate = useNavigate();
  return (
   <>
   <NavPainel />
    <div className="main-content-wrap sidenav-open flex-colum">
      <div className="main-content">
        <h1>Conta</h1>
        <div className="row">
          <div className="mb-12 col-md-12">
            <div className="card o-hidden">
              <div
                className="card-header d-flex align-items-center border-0"
                style={{ background: "orange", color: "#fff" }}
              >
                <p style={{ fontSize: 20, fontWeight: "bold", margin: "auto" }}>
                  Você tem uma fatura em aberto no valor de{" "}
                  <span>R$ 99,00</span>
                </p>
                <button
                  id="fatura"
                  className="btn btn-lg btn-success"
                  onClick={() => navigate("/")}
                >
                  Ver faturas
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="mt-12 col-md-12">
            <div className="card bg-defualt text-black">
              <div className="card-body">
                <input type="hidden" name="idUser" value={""} />
                <div className="d-flex align-items-center mb-4">
                  <i className="i-ID-Card text-22 mr-2"></i>
                  <h5 className="text-18 font-weight-700 card-title m-0">
                    Informações de pagamento
                  </h5>
                </div>

                <form action="" className="updateUser">
                  <div className="row">
                    <div className=" mb-4 col-md-12">
                      <p className="font-weight-400 mb-2">Nome*</p>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">E-mail*</p>
                      <input
                        className="form-control"
                        type="text"
                        name="email"
                        placeholder="Digite seu e-mail"
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">CPF*</p>
                      <InputMask
                        mask="999.999.999-99"
                        className="form-control"
                        type="text"
                        name="cpf"
                        id="cpf"
                        placeholder="Digite seu CPF"
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">
                        Inscrição estadual*
                      </p>
                      <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        name="IE"
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Cep*</p>
                      <InputMask
                        mask="99999-999"
                        maskChar={""}
                        type="text"
                        className="form-control"
                        placeholder="Digite seu CEP"
                        onBlur={checkCEP}
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Endereço*</p>
                      <input
                        type="text"
                        {...register("address")}
                        className="form-control"
                        name="address"
                        id="rua"
                        placeholder="Endereço "
                        aria-label=""
                        aria-describedby="endereco"
                        value={value.state.onboarding.endereco.logradouro}
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Número*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Número"
                        aria-label=""
                        aria-describedby="numero"
                        value={value.state.onboarding.endereco.numero}
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Complemento*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="complement"
                        id="complement"
                        placeholder="Complemento"
                        aria-label=""
                        aria-describedby="Complemento"
                        value={value.state.onboarding.endereco.complemento}
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Bairro*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="neighbor"
                        id="neighbor"
                        placeholder="Bairro "
                        aria-label=""
                        aria-describedby="bairro"
                        value={value.state.onboarding.endereco.bairro}
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Cidade*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        id="city"
                        placeholder="Cidade"
                        aria-label=""
                        aria-describedby="cidade"
                        value={value.state.onboarding.endereco.localidade}
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Estado*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        id="state"
                        placeholder="Estado"
                        aria-label=""
                        aria-describedby="Estado"
                        value={value.state.onboarding.endereco.uf}
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Celular*</p>
                      <InputMask
                        name="telefone"
                        mask="(99) 99999-9999"
                        maskChar={""}
                        className="form-control"
                        placeholder="Digite o seu celular"
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">Número do cartão*</p>
                      <InputMask
                        type="text"
                        name="number"
                        className="form-control"
                        placeholder="Digite o número do seu cartão"
                        value={state.number.props}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        maxLength={16}
                      />
                    </div>
                    <div className="mb-2 col-md-2">
                      <p className="font-weight-400 mb-2">Validade*</p>
                      <InputMask
                  mask="99/99"
                  type="text"
                  name="expiry"
                  value={state.expiry.props}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className="form-control"
                  placeholder="Ex: 000"
                />
                    </div>
                    <div className="mb-2 col-md-2">
                      <p className="font-weight-400 mb-2">
                        Código de segurança*
                      </p>
                      <input
                         value={state.cvc.props}
                         onChange={handleInputChange}
                         onFocus={handleInputFocus}
                         type="text"
                         name="cvc"
                         className="form-control"
                         placeholder="Digite o cvv"
                         aria-label="Type your number"
                         aria-describedby="number"
                         defaultValue=""
                         maxLength={3}
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-400 mb-2">CNPJ*</p>
                      <InputMask
                        mask="99.999.999/9999-99"
                        defaultValue={value.state.onboarding.cnpj}
                        className="form-control"
                        placeholder="Digite o seu CNPJ "
                        onChange={(val) =>
                          value.setOnboardingP((prev) => ({
                            ...prev,
                            cnpj: val.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="mb-4 col-md-4">
                      <p className="font-weight-bold mb-2">Voltar</p>
                      <a
                        onClick={() => navigate("/appdoutor-pay")}
                        className="text-success mr-2"
                      >
                        <i className="nav-icon i-Previous voltar"></i>
                      </a>
                    </div>
                  </div>

                  <a
                    onClick={() => navigate("/cadastrar-cartao")}
                    className="btn btn-lg float-left btn-danger changeCard"
                    style={{ color: "#FFF" }}
                  >
                    Mudar cartão de crédito
                  </a>
                  <button
                    id="alert-success"
                    className="btn btn-lg btn-success float-right"
                    type="submit"
                  >
                    Salvar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
   <Footer />
   </>
  );
};

export default Conta;
