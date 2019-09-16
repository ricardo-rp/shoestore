import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, ImageContainer } from "./styles";
import { MdImage } from "react-icons/md";

export default class Announce extends Component {
  state = {
    title: "",
    desc: "",
    file: null
  };

  handleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleFileSelect = event => {
    this.setState({
      ...this.state,
      file: event.target.files[0]
    });
  };

  render() {
    return (
      <Container>
        <form>
          <strong>Publicar Anuncio</strong>
          <div>
            <ImageContainer>
              <MdImage size={60} color="#333" />
              <input name="file" type="file" onChange={this.handleFileSelect} />
            </ImageContainer>
            <div>
              <span>Titulo:</span>
              <input name="title" type="text" />
              <span>Descricao:</span>
              <textarea name="desc" type="text" maxlength={210} />
            </div>
          </div>
          <button type="button">Publicar</button>
        </form>
      </Container>
    );
  }
}
