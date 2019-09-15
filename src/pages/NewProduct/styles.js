import styled from "styled-components";

import { darken } from "polished";

export const ImageContainer = styled.div`
  display: flex;
  padding: 100px;
  margin-right: 20px;

  height: 260px;
  width: 260px;

  border: 1px solid #ddd;
  border-radius: 5px;
  color: #666;
`;

export const Container = styled.div`
  justify-content: center;
  display: flex;

  form {
    flex-direction: column;
    border-radius: 10px;
    background: #fff;
    display: flex;
    padding: 30px;

    strong {
      font-weight: bold;
      font-size: 21px;
      align: center;
    }

    div {
      margin-top: 10px;
      display: flex;

      div {
        flex-direction: column;
        display: flex;
        justify-content: flex-start;

        span {
          font-weight: bold;
          line-height: 24px;
          color: #333;
        }

        input {
          border: 1px solid #ddd;
          border-radius: 5px;
          height: 22px;
          color: #666;
        }

        textarea {
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: auto;
          height: 190px;
          resize: none;
          color: #666;
          rows: 12;
          width: 260px;
        }
      }
    }

    button {
      background: #7159c1;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 25px;
      padding: 10px;
      color: #fff;
      border: 0;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, "#7159c1")};
      }
    }
  }
`;
