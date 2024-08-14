import React from 'react'

const Context = React.createContext({
  productsList: [],
  addToCart: () => {},
  cartList: [],
  billsList: [],
  billNumber: 0,
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  pBillsList: [],
  setPBillsList: () => {},
})

export default Context
