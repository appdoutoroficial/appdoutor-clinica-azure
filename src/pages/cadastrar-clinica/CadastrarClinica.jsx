import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel";

const CadastrarClinica = (props) => {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const value = useContext(AppContext);
  console.log(value);

  const onSubmit = (e) => {
    console.log(e);
  };

  const checkCEP = (e) => {
    // const cep = e.target.value.replace(/\D/g, "");
    // fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     value.setOnboardingP((prev) => ({ ...prev, endereco: data }));
    //   });
  };

  const navigate = useNavigate();
  return (
    <>
      <NavPainel />
      <div className="main-content-wrap sidenav-open flex-colum">
      <div className="main-content">
        <h1>Cadastrar Cínica</h1>
        <div class="row">
          <div class="mt-12 col-md-12">
            <div class="card bg-defualt text-black">
              <div class="card-body">
                <input type="hidden" name="idUser" value="" />
                <div class="d-flex align-items-center mb-4">
                  <i class="i-Hospital text-22 mr-2"></i>
                  <h5 class="text-18 font-weight-700 card-title m-0">
                    Informações da Clínica
                  </h5>
                </div>
                <hr />
                <form action="" class="createClinica">
                  <div class="row">
                    <div class=" mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Nome da Clínica*</p>
                      <input
                        class="form-control"
                        type="text"
                        name="name"
                        placeholder="Digite o nome da clínica"
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">E-mail*</p>
                      <input
                        class="form-control"
                        type="text"
                        name="email"
                        placeholder="Digite seu e-mail"
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Celular*</p>
                      <InputMask
                        name="telefone"
                        mask="(99) 99999-9999"
                        maskChar={""}
                        className="form-control"
                        placeholder="Digite o seu celular"
                        onChange={(val) =>
                          value.setOnboardingP((prev) => ({
                            ...prev,
                            telefone: val.target.value,
                          }))
                        }
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">CNPJ*</p>
                      <InputMask
                        mask="99.999.999/9999-99"
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
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Inscrição estadual*</p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Digite sua Inscrição estadual"
                        name="inscricaoEstadual"
                        onChange={(val) =>
                          value.setOnboardingP((prev) => ({
                            ...prev,
                            inscricaoEstadual: val.target.value,
                          }))
                        }
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Cep*</p>
                      <InputMask
                        mask="99999-999"
                        maskChar={""}
                        type="text"
                        className="form-control"
                        placeholder="Digite seu CEP"
                        onBlur={checkCEP}
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Endereço*</p>
                      <input
                        type="text"
                        {...register("address")}
                        className="form-control"
                        name="address"
                        id="rua"
                        placeholder="Endereço "
                        aria-label=""
                        aria-describedby="endereco"
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Número*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Número"
                        aria-label=""
                        aria-describedby="numero"
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Complemento*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="complement"
                        id="complement"
                        placeholder="Complemento"
                        aria-label=""
                        aria-describedby="Complemento"
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Bairro*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="neighbor"
                        id="neighbor"
                        placeholder="Bairro "
                        aria-label=""
                        aria-describedby="bairro"
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Cidade*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        id="city"
                        placeholder="Cidade"
                        aria-label=""
                        aria-describedby="cidade"
                      />
                    </div>
                    <div class="mb-4 col-md-4">
                      <p class="font-weight-400 mb-2">Estado*</p>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        id="state"
                        placeholder="Estado"
                        aria-label=""
                        aria-describedby="Estado"
                      />
                    </div>

                    <div class="mb-12 col-md-12">
                      <p class="font-weight-400 mb-2">Sobre a Clínica</p>
                      <textarea
                        class="comentario"
                        name="description"
                        aria-label="With textarea"
                      ></textarea>
                    </div>
                    <div class="mb-4 col-md-4">
                      <label class="font-weight-400 mb-2" for="foto_doutor">
                        Logo da Clínica
                      </label>
                      <input
                        type="file"
                        id="foto_doutor"
                        class="form-control-file"
                        name="photo"
                      />
                    </div>
                  </div>
                  <a
                    class="btn btn-lg float-left btn-danger changeCard"
                    style={{ color: "#FFF" }}
                  >
                    Apagar clínica
                  </a>
                  <button
                    id="alert-success"
                    class="btn btn-lg btn-success float-right"
                    type="submit"
                  >
                    Salvar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CadastrarClinica;
