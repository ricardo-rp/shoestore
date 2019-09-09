import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { ProductList } from "./styles";

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61DsWfBTvrL._UY500_.jpg"
          alt="shoe"
        />
        <strong> Nome do tenis </strong>
        <span>R$123,45</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61DsWfBTvrL._UY500_.jpg"
          alt="shoe"
        />
        <strong>Nome do tenis comprido que quebra duas linhas</strong>
        <span>R$123,45</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61DsWfBTvrL._UY500_.jpg"
          alt="shoe"
        />
        <strong> Nome do tenis </strong>
        <span>R$123,45</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61DsWfBTvrL._UY500_.jpg"
          alt="shoe"
        />
        <strong> Nome do tenis </strong>
        <span>R$123,45</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61DsWfBTvrL._UY500_.jpg"
          alt="shoe"
        />
        <strong> Nome do tenis </strong>
        <span>R$123,45</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61DsWfBTvrL._UY500_.jpg"
          alt="shoe"
        />
        <strong> Nome do tenis </strong>
        <span>R$123,45</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61DsWfBTvrL._UY500_.jpg"
          alt="shoe"
        />
        <strong> Nome do tenis </strong>
        <span>R$123,45</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
