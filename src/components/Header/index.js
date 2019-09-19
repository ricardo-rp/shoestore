import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  MdShoppingBasket,
  MdPersonOutline,
  MdPerson,
  MdAttachMoney
} from "react-icons/md";

import { Container, Cart, User, Sell } from "./styles";

import logo from "../../assets/images/logo.svg";

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="blacksheepshoes" />
      </Link>
      <div>
        <Sell to="/new_product">
          <div>
            <strong>Anunciar</strong>
          </div>
          <MdAttachMoney size={36} color="#fff" />
        </Sell>
        {console.log(
          "TCL: Header -> localStorage.getItem('token')",
          localStorage.getItem("token")
        )}
        <User onClick={() => localStorage.removeItem("token")}>
          <div>
            <strong>Logout</strong>
            <span></span>
          </div>
          <MdPerson size={36} color="#fff" />
        </User>
        <User to="/login">
          <div>
            <strong>Login</strong>
            <span></span>
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
