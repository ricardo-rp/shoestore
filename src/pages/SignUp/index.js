import React, { Component } from "react";

import { Container } from "./styles";

export default class SignUp extends Component {
  render() {
    return (
      <Container>
        <form>
          <strong> Cadastrar usuario </strong>
          <span>E-mail</span>
          <input type="text"></input>
          <span>Telefone</span>
          <input type="text"></input>
          <span>Senha</span>
          <input type="text"></input>
          <button>Finalizar cadastro</button>
        </form>
      </Container>
    );
  }
}
