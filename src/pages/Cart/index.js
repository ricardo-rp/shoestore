import React from "react";
import { connect } from "react-redux";

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

function Cart({ cart }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.ammount} />
                  <button>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$246,9</strong>
              </td>
              <td>
                <button>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">
          <span>Finalizar pedido</span>
        </button>
        <Total>
          <span>TOTAL</span>
          <strong>R$678,90</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart);
