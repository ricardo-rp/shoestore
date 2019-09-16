import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container } from "./styles";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleButtonPress = async event => {
    const { username, password } = this.state;

    const response = await api.post("/sessions", { email: username, password });

    localStorage.setItem("token", response.data.token);
  };

  // movimento 200qi
  handleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { username, password } = this.state;

    return (
      <Container>
        <div>
          <strong> Login</strong>
          <span>E-mail</span>
          <input
            type="text"
            name="username"
            value={username}
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
