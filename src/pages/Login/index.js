import React, { Component } from "react";

import { Container } from "./styles";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <form>
          <strong> Login</strong>
          <span>E-mail</span>
          <input type="text"></input>
          <span>Senha</span>
          <input type="password"></input>
          <button>Finalizar cadastro</button>
        </form>
      </Container>
    );
  }
}
