// @flow
import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";

interface BRTModel {
  BAIRRO: String;
  NUMERO: Number;
  ESTACAO: String;
}
type Props = {};
export const Brts = (props: Props) => {
  const [brts, setBrt] = useState<BRTModel[]>([]);

  useEffect(() => {
    //ou k(a)y
    axios
      .get(
        "http://dadosabertos.rio.rj.gov.br/brt/api/v1/rest/EstacoesTranscarioca.cfm?token=7A32FDD1-CF97-4B1D-4BEE71037BAAEAF2&pretty=false&filter="
      )
      .then((response) => {
        setBrt(response.data);
      })
      .catch();
  }, []);

  return (
    <div>
      <h1>Brts Estações TransCarioca</h1>
      <ul>
        {brts.map((brt, index) => {
          return (
            <li key={index}>
              {index + 1} <span> Estação: </span> {brt.ESTACAO}
              <span> Bairro: </span> {brt.BAIRRO} <span> Número: </span>
              {brt.NUMERO ? brt.NUMERO : "Sem número"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
