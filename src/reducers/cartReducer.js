export const cartReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
