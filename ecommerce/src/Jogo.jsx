import { Image, Card, Col, Row, Container, Button } from "react-bootstrap";
import Carrinho from "./Carrinho";

function Jogo(props) {
  const { nome, descricao, valor, total, imagens } = props;
  let badge = {
    display: "inline-block",
    padding: ".25em .4em",
    fontSize: "75%",
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".25rem",
    backgroundColor: "#3A5CA5",
    color: "white",
  };


  return (
    <>
      <Container >
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={imagens}
              />
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{nome}</Card.Title>
                <Card.Text>{descricao}</Card.Text>
                <Carrinho />
              </Card.Body>
              <Card.Footer>R$ {valor}</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Jogo;
