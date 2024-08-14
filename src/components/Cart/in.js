import Context from '../../context/bakeryContext'
import CartItem from '../CartItem'
import './index.css'

const Cart = () => (
  <Context.Consumer>
    {value => {
      const {cartList, addBill} = value
      let totalAmount = 0
      for (const each of cartList) {
        totalAmount += each.quantity * each.price
      }
      return (
        <div className="cart-main-container">
          <h1>Cart</h1>
          <ul className="cart-list">
            {cartList.map(each => (
              <CartItem data={each} key={each.productName} />
            ))}
          </ul>
          <h2>Total Amount : {totalAmount}</h2>
          <button type="button" onClick={addBill}>
            Bill
          </button>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Cart
