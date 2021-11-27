import Carrossel from "./Carrossel";
import Produtos from "./Produtos";
import api from "./service/api";
import { useState, useEffect } from "react";
import { Card, Col, Row, Container, Image, Button } from "react-bootstrap";
import NavBar from "./NavBar"
function Home() {
  const imagens=[
    "https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png",
    "https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048",
    "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
    "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S2-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.jpg"
  ]
  
  const [produtos, setProdutos] = useState([]);
  const [imagem, setImagem] = useState([]);

  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => setProdutos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [], console.log(produtos));


  return (
    <>
     <NavBar />
      <Carrossel />
      <Container>
        <Row>
          {produtos.map((produto,i) => (
            <Col key={produto.id} >
              <Produtos
                titulo={produto.nome} 
                imagem={produto.imagens}
                id={produto.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Home;