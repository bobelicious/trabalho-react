import {
  Form,
  InputGroup,
  Col,
  Row,
  Button,
  FormControl,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "./service/api";
import { useParams } from "react-router-dom";

function Carrinho(props) {
  const { id } = useParams(props);
  const [quantidade, setQuantidade] = useState(0);
  const [pedido, setPedido] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    function resposta(res) {
      console.log(res.data, id);
    }

    let novo = {
      quantidade: "5",
      pedido: {
        id: 5,
      },
      produto: {
        id: id,
      },
    };

    api.post("/itemPedido", novo).then(resposta);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              type="number"
              className="mb-2"
              id="inlineFormInput"
              placeholder="Quantidade"
              value={quantidade}
              onChange={(event) =>
                setQuantidade(
                  event.target.value,
                  setQuantidade(event.target.value)
                )
              }
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Adicionar ao carrinho
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Carrinho;
