import React, { useEffect, useState } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Inicial from "./pages/inicial/Inicial";
import Signin from "./pages/sign-in/Signin";
import Entrar from "./pages/entrar/Entrar";
import Verify from "./pages/verify/Verify";
import VerifyEmail from "./pages/verify-email/VerifyEmail";
import VerifySenha from "./pages/verify-senha/VerifySenha";

import VerifyC from "./pages/verifyC/Verify";
import VerifyEmailC from "./pages/verify-emailC/VerifyEmail";
import VerifySenhaC from "./pages/verify-senhaC/VerifySenha";

import Profile from "./pages/profile/Profile";
import Selfie from "./pages/selfie/Selfie";
import RecuperaSenha from "./pages/recuperaSenha/RecuperaSenha";
import Responsavel from "./pages/responsavel/Responsavel";
import NovaSenha from "./pages/nova-senha/NovaSenha";
import Gmail from "./pages/entrarGmail/EntrarGmail";
import Congrats from "./pages/congrats/Congrats";
import IndexInterno from "./pages/interna/inicial/Inicial";
import CadastrarCartao from "./pages/cadastrar-cartao/CadastrarCartao";
import Home from './pages/home/Home';
import Paciente from './pages/paciente/Paciente';
import CadastrarPaciente from './pages/cadastrar-paciente/CadastrarPaciente';
import Consultas from "./pages/consultas/Consultas";
import CadastrarConsulta from './pages/cadastrar-consulta/CadastrarConsulta';
import Chat from './pages/chat/Chat'
import AppDoutorPay from "./pages/appdoutor-pay/AppDoutorPay";
import Faturas from "./pages/faturas/Faturas";
import Conta from "./pages/conta/Conta";
import Extratos from "./pages/extratos/Extratos";
import StatusPagamento from "./pages/status-pagamento/StatusPagamento";
import Especialista from "./pages/especialista/Especialista";
import CadastrarEspecialista from "./pages/cadastrar-especialista/CadastrarEspecialista";
import MinhaClinica from "./pages/minha-clinica/MinhaClinica";
import CadastrarClinica from "./pages/cadastrar-clinica/CadastrarClinica";
import CadastrarPagamento from "./pages/cadastrar-pagamento/CadastrarPagamento";
import CadastrarConta from "./pages/cadastrar-conta/CadastrarConta";

import { useCookies } from 'react-cookie';
import axiosConfigLogin from './axiosConfigLogin';



import './assets/materialdesign/scss/materialdesignicons.scss'
import './assets/iconsmind/iconsmind.css'
import './bootstrapicons.scss'
import './demo.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import "./components/NavBar";
import "./components/NavPainel"
import AppContext from "./context/AppContext";





function App() {
  let element = useRoutes([
    {path: '/', exact: true, element: <Inicial />},
    {path: '/cadastrar', exact: true, element: <Signin />},  
    {path: '/entrar', exact: true, element: <Entrar />},
    {path: '/verifica', exact: true, element: <Verify />},
    {path: '/verifica-email', exact: true, element: <VerifyEmail />},
    {path: '/verifica-senha', exact: true, element: <VerifySenha />},

    {path: '/verifica-clinica', exact: true, element: <VerifyC />},
    {path: '/verifica-email-clinica', exact: true, element: <VerifyEmailC />},

    {path: '/cadastro', exact: true, element: <Profile />},
    {path: '/selfie', exact: true, element: <Selfie />},
    {path: '/finalizar', exact: true, element: <Congrats />},
    {path: '/login-gmail', exact: true, element: <Gmail />},
    {path: '/recuperar-senha', exact: true, element: <RecuperaSenha />},
    {path: '/responsavel', exact: true, element: <Responsavel />},
    {path: '/nova-senha', exact: true, element: <NovaSenha />},
    {path: '/admin/index', exact: true, element: <IndexInterno />},
    {path: '/cadastrar-cartao', exact: true, element: < CadastrarCartao/>}, 
    {path: '/cadastrar-conta', exact: true, element: < CadastrarConta />},

    {path: '/admin/home', exact: true, element: < Home />}, 
    {path: '/admin/paciente', exact: true, element: < Paciente />},
    {path: '/admin/cadastrar-paciente', exact: true, element: < CadastrarPaciente />},
    {path: '/admin/consultas', exact: true, element: < Consultas />},
    {path: '/admin/cadastrar-consulta', exact: true, element: < CadastrarConsulta />},
    {path: '/admin/chat', exact: true, element: < Chat />},
    {path: '/admin/appdoutor-pay', exact: true, element: < AppDoutorPay />},
    {path: '/admin/faturas', exact: true, element: < Faturas />},
    {path: '/admin/conta', exact: true, element: < Conta />},
    {path: '/admin/extratos', exact: true, element: < Extratos />},
    {path: '/admin/status-pagamento', exact: true, element: < StatusPagamento />},
    {path: '/admin/especialista', exact: true, element: < Especialista />},
    {path: '/admin/cadastrar-especialista', exact: true, element: < CadastrarEspecialista />}, 
    {path: '/admin/minha-clinica', exact: true, element: < MinhaClinica />},  
    {path: '/admin/cadastrar-clinica', exact: true, element: < CadastrarClinica />},
    {path: '/admin/cadastrar-pagamento', exact: true, element: < CadastrarPagamento />},
  ]);

  return element;
}

const AppWrapper = () => {
  const [cookie, setCookie] = useCookies(['idUsuario', 'mensagem', 'nome', 'nomeCompleto', 'primeiroAcesso', 'sobreNome', 'statusCode', 'sucesso', 'token']);
  const [menuObject, setMenuObject] = useState(false);
  const [onboardingP, setOnboardingP] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cpf: "",
    rg: "",
    endereco: {
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "0"
    },
    dataNascimento: "",
    perfil: 1
  });


  const [onboardingC, setOnboardingC] = useState({
    cnpj: "",
    dataAbertura: "2023-05-18T18:08:15.756Z",
    email: "",
    endereco: {
      logradouro: "",
      complemento: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: ""
    },
    especialidades: "1, 2, 3, 4",
    idPlanoSelecionado: 1,
    inscricaoEstadual: "",
    modificadoPor: "",
    nome: "",
    nomeFantasia: "",
    responsavel: "",
    pagamento: {
      nomeNoCartao: "",
      documento: "",
      bandeira: 0,
      numero: "",
      vencimento: "",
      cvv: ""
    },
    telefone: "",
  });


  const [userLogged, setUserLogged] = useState({
    idUsuario: "",
    mensagem: "",
    nome: "",
    nomeCompleto: "",
    primeiroAcesso: false,
    sobreNome: "",
    statusCode: 0,
    sucesso: false,
    token: ""
  });
  
  const [contaRecebedora, setContaRecebedora] = useState({
    idClinica: "",
    nomeFantasia: "",
    email: "",
    descricao: "",
    documento: "",
    dadosBancarios: {
      codigoBanco: "",
      agenciaNumero: "",
      contaNumero: "",
      contaDigito: "",
      tipoConta: "",
      nomeNoCartao: "",
      documento: "",
      bandeira: "",
      numero: "",
      vencimento: "",
      cvv: ""
    }
  })

  const resetUser = () => {
    setUserLogged({
      idUsuario: "",
      mensagem: "",
      nome: "",
      nomeCompleto: "",
      primeiroAcesso: false,
      sobreNome: "",
      statusCode: 0,
      sucesso: false,
      token: ""
    })
  }

  const verifySession = () => {
    if(userLogged.token == '' && cookie.token == ''){
      window.location.href = '/entrar';
    }else{
      axiosConfigLogin.post("/Auth/ValidarToken", {
        token: cookie.token
      })
      .then((response) => {
        if( !response.data.tokenValido ){
          window.location.href = '/entrar';
        }
      })
      .catch((err) =>{
        if( !err.data.tokenValido ){
          window.location.href = '/entrar';
        }
      })
    }
  }

  const verifyAdmin = () => {
    if(window.location.pathname.indexOf("admin")){
      verifySession();
    }
  }

  const remove_accents = (strAccents) => {
    var strAccents = strAccents.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents =    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëÇçðÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeCcdDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
            strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');

    return strAccentsOut;
}


  useEffect(() => {
    if( cookie.token != '' ){
      setUserLogged(prev => ({...prev, idUsuario: cookie.idUsuario}))
      setUserLogged(prev => ({...prev, token: cookie.token}))
      setUserLogged(prev => ({...prev, nomeCompleto: cookie.nomeCompleto}))
    }
  }, [cookie]);

  return (
    <AppContext.Provider
      value={{
        state: {
          changeMenu: menuObject,
          onboardingP: onboardingP,
          onboardingC: onboardingC,

          userLogged: userLogged,
          cookie: cookie,

          contaRecebedora: contaRecebedora
        },
        setMenuObject: setMenuObject,
        setOnboardingP: setOnboardingP,
        setOnboardingC: setOnboardingC,
        setContaRecebedora: setContaRecebedora,

        setUserLogged: setUserLogged,
        resetUser: resetUser,
        verifyAdmin: verifyAdmin,
        setCookie: setCookie,
        remove_accents: remove_accents,
      }}
    >
        <Router>
          <App />         
        </Router>
    </AppContext.Provider>
  );
};

export default AppWrapper;
