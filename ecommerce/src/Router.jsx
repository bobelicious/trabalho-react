import React from "react";
import { Route, BrowserRouter, Switch, useParams } from "react-router-dom";
import Home from "./Home";
import Forms from "./Forms";
import ProdutoDetalhe from "./ProdutoDetalhe";
import Pedidos from "./Pedidos";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/produtos/:id" exact component={ProdutoDetalhe} />
        <Route path="/pedidos" exact component={Pedidos}/>
      </BrowserRouter>
    );
  }
}

export default Router;
