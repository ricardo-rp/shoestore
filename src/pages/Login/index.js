import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container } from "./styles";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleButtonPress = async event => {
    const response = await api.post("/sessions", this.state);

    localStorage.setItem("token", response.data.token);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <div>
          <strong> Login</strong>
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          ></input>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleButtonPress}>Log-in</button>
          <Link to="/signup">
            <span>Não possui conta?</span>
          </Link>
        </div>
      </Container>
    );
  }
}
