/*
 * @Date: 2021-08-30 19:16:53
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-06 18:03:29
 * @FilePath: /food-order/src/store/cart-context.js
 */
import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
})

export default CartContext;