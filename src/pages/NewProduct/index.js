import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, ImageContainer } from "./styles";
import { MdImage } from "react-icons/md";

export default class Announce extends Component {
  render() {
    return (
      <Container>
        <form>
          <strong>Publicar Anuncio</strong>
          <div>
            <ImageContainer>
              <MdImage size={60} color="#333" />
            </ImageContainer>
            <div>
              <span>Nome:</span>
              <input name="name" type="text" />
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
