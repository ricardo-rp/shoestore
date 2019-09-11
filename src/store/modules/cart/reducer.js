export default function cart(state = [], action) {
  // Quando chamamos dispatch(), todos os reducers sao chamados. Por isso esta checagem e necessaria
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.product];
    default:
      return state;
  }
}
