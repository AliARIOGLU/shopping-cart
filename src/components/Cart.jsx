import React, { useState, useEffect } from "react";

const Cart = ({ state, dispatch }) => {
  const [total, setTotal] = useState(0);

  const { cart } = state;

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce(
        (sum, product) => sum + Number(product.price) * product.qty,
        0
      )
    );
  }, [cart]);

  return (
    <div className="cart">
      <b className="cart-header">MY CART</b>
      <b className="cart-total">Total Amount: ${total}</b>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div style={{ display: "flex", gap: 10 }}>
              <img src={product.thumbnail} alt={product.title} />
              <div className="cart-product-info">
                <span>{product.title}</span>
                <b>${product.price}</b>
              </div>
            </div>
            <div className="buttons">
              <button onClick={() => changeQty(product.id, product.qty - 1)}>
                -
              </button>
              <span>{product.qty}</span>
              <button onClick={() => changeQty(product.id, product.qty + 1)}>
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span style={{ marginTop: "50", padding: "20", alignSelf: "center" }}>
          Cart is empty
        </span>
      )}
    </div>
  );
};

export default Cart;
