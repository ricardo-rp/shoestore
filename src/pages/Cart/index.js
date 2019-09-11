import React from "react";

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

//#TODO: Remover bordas do botao delete e setas do input

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61DsWfBTvrL._UY500_.jpg"
                alt="shoe"
              />
            </td>
            <td>
              <strong> Titulo do PRODUTO</strong>
              <span> R$123,45</span>
            </td>
            <td>
              <div>
                <button>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
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
        </tbody>
      </ProductTable>

      <footer>
        <button type="button"> Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$678,90</strong>
        </Total>
      </footer>
    </Container>
  );
}
