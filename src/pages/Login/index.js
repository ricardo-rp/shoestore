import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <button>Log-in</button>
          <Link to="/signup">
            <span>Não possui conta?</span>
          </Link>
        </form>
      </Container>
    );
  }
}
