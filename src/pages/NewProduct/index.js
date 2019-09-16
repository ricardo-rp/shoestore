import React, { Component } from "react";

import { Container } from "./styles";

import api from "../../services/api";
export default class Announce extends Component {
  // O proprio backend deve verificar qual usuario publicou o anuncio via token
  state = {
    title: "",
    desc: "",
    file: "",
    price: 0
  };

  handleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleButtonPress = event => {
    api.post("/products", this.state);
  };

  render() {
    const { title, desc, file, price } = this.state;
    return (
      <Container>
        <div>
          <strong>Publicar Anuncio</strong>
          <span>Titulo:</span>
          <input
            name="title"
            value={title}
            type="text"
            onChange={this.handleInputChange}
          />
          <span>Descricao:</span>
          <textarea
            name="desc"
            value={desc}
            type="text"
            maxlength={210}
            onChange={this.handleInputChange}
          />
          <span>Url da imagem:</span>
          <input
            name="file"
            value={file}
            type="text"
            onChange={this.handleInputChange}
          />
          <span>Preco:</span>
          <input
            name="price"
            value={price}
            type="number"
            onChange={this.handleInputChange}
          />
          <button type="button">Publicar</button>
        </div>
      </Container>
    );
  }
}
