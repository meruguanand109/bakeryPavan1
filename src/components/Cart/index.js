import Context from '../../context/bakeryContext'
import CartItem from '../CartItem'
import './index.css'

const Cart = () => (
  <Context.Consumer>
    {value => {
      const {cartList, addBill} = value

      // Calculate total amount using array reduce method
      const totalAmount = cartList.reduce(
        (sum, each) => sum + each.quantity * each.price,
        0,
      )

      return (
        <div className="cart-main-container">
          <h1>Cart</h1>
          <ul className="cart-list">
            {cartList.map(each => (
              // Ensure each.productName is unique for the key
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
