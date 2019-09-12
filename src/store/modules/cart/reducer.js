import produce from "immer";
// Immer permite manipular o state como se fosse mutavel

export default function cart(state = [], action) {
  // Quando chamamos dispatch(), todos os reducers sao chamados. Por isso usamos switch case
  switch (action.type) {
    case "ADD_TO_CART":
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.product.id
        );

        // Se o produto existe
        if (productIndex >= 0) {
          draft[productIndex].ammount++;
        } else {
          draft.push({ ...action.product, ammount: 1 });
        }
      });
    default:
      return state;
  }
}