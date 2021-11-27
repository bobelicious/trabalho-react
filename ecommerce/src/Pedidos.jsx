import api from "./service/api";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import {Table } from "react-bootstrap";

function Pedidos() {
  const [pedidos, SetPedidos] = useState([]);

  useEffect(() => {
    api.get("/itemPedido").then(listar);
    console.log("oidgasnga");
    function listar(response) {
      SetPedidos(response.data);
      console.log(response.data);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome produto</th>
            <th>Quantidade</th>
            <th>Valor unitario</th>
            <th>Total</th>
            <th>Id do pedido</th>
          </tr>
        </thead>
        <tbody>
        {pedidos.map((itemPedido,i) => (
            <tr key={i}>
            <td>{itemPedido.produto.nome}</td>
            <td>{itemPedido.quantidade}</td>
            <td>{itemPedido.produto.vlUnitario}</td>
            <td>{itemPedido.subTotal}</td>
            <td>{itemPedido.pedido.id}</td>
          </tr>
      ))}
        </tbody>
      </Table>
    </>
  );
}

export default Pedidos;
