import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { MdShoppingBasket, MdPersonOutline } from "react-icons/md";

import { Container, Cart, User } from "./styles";

import logo from "../../assets/images/logo.svg";

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="blacksheepshoes" />
      </Link>
      <div>
        <User to="/signup">
          <div>
            <strong>Username?</strong>
            <span>login/logout</span>
          </div>
          <MdPersonOutline size={36} color="#fff" />
        </User>
        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#fff" />
        </Cart>
      </div>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length
}))(Header);
