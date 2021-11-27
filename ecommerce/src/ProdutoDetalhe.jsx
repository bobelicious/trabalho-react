import { Image, Card, Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "./service/api";
import { useState, useEffect } from "react";
import Jogo from "./Jogo";
import NavBar from "./NavBar";

const ProdutoDetalhe = (props) => {
  const { id } = useParams(props);
  const [jogos, setJogos] = useState("");

  useEffect(() => {
    api
      .get(`/produtos/${id}`)
      .then((response) => setJogos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  },[]);

  return (
    <>
    <NavBar />
    <Jogo
    nome={jogos.nome}
    descricao={jogos.descricao}
    valor={jogos.vlUnitario}
    imagens={jogos.imagens}
     />
    </>
  );
};

export default ProdutoDetalhe;
