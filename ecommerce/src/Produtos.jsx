import { Card, Button } from "react-bootstrap";
import React from "react";
import axios from "axios";

function Produtos(props) {
  const {imagem,descricao, titulo, id } = props;

  return (
    <>
      <Card style={{ width: "18rem", marginBottom: "50px" }}>
        <Card.Img variant="top" src={imagem} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Button href= {`/produtos/${id}`} variant="primary">Detalhe</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Produtos;
