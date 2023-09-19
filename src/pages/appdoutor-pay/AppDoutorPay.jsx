import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useForm } from "react-hook-form";
import ReactECharts from "echarts-for-react";
import NavPainel from "../../components/NavPainel";
import Footer from "../../components/FooterPainel"

const AppDoutorPay = () => {
  const navigate = useNavigate();

  const options = {
    grid: { },
    xAxis: {
      type: "category",
      data: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez",],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line",
        barWidth: "60%",
        data: [
          1290, 1330, 1620, 2000, 7000, 20000, 1290, 1330,
          1620, 2000, 7000, 100000
        ],
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
  };

  return (
    <>
    <NavPainel />
        <div className="main-content-wrap sidenav-open flex-colum">
      <div className="main-content">
        <div className="separator-breadcrumb">
          <div className="row payapp">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body app-pay">
                  <h6 className="mb-3 txt-app-pay">FATURAS</h6>
                  <p className="text-20 text-success-pay line-height-1 mb-3">
                    <i
                      className="i-Arrow-Up-in-Circle"
                      style={{
                        letterSpacing: 5,
                        fontWeight: "bold",
                        color: "#3d8b40",
                      }}
                    ></i>
                    <a onClick={() => navigate("/faturas")} className="text-success">
                      CONSULTE AQUI
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body app-pay">
                  <h6 className="mb-3 txt-app-pay">PAGAMENTOS</h6>
                  <p className="text-20 text-success-pay line-height-1 mb-3">
                    <i
                      className="i-Arrow-Up-in-Circle"
                      style={{
                        letterSpacing: 5,
                        fontWeight: "bold",
                        color: "#3d8b40",
                      }}
                    ></i>
                    <a onClick={() => navigate("/conta")} className="text-success">
                      CONSULTE AQUI
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body app-pay">
                  <h6 className="mb-3 txt-app-pay">EXTRATOS</h6>
                  <p className="text-20 text-success-pay line-height-1 mb-3">
                    <i
                      className="i-Arrow-Up-in-Circle"
                      style={{
                        letterSpacing: 5,
                        fontWeight: "bold",
                        color: "#3d8b40",
                      }}
                    ></i>
                    <a onClick={() => navigate("/extratos")} className="text-success">
                      CONSULTE AQUI
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-md-10 graf">
          <div className="card mb-4">
            <div className="card-body app-pay">
            <div
                    className="card-title txt-app"
                    style={{ padding: 10, margin: "auto", textAlign: 'center' }}
                  >
                    Comparativo de receita Mensal
                  </div>
              <ReactECharts
                option={options}                
              ></ReactECharts>              
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>   
    </div>
    <Footer />
    </>
  );
};

export default AppDoutorPay;
