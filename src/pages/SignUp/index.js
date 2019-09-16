import React, { Component } from "react";

import axios from "axios";

import { Container } from "./styles";
import api from "../../services/api";

export default class SignUp extends Component {
  state = {
    name: "1",
    email: "",
    password: ""
  };

  handleButtonPress = event => {
    api.post("/users", this.state);
  };

  handleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <div>
          <strong> Cadastrar usuario </strong>
          <span>E-mail</span>
          <input
            name="email"
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <span>Senha</span>
          <input
            name="password"
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <button onClick={this.handleButtonPress}>Finalizar cadastro</button>
        </div>
      </Container>
    );
  }
}
