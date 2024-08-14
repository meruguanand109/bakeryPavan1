import {FaMinus, FaPlus} from 'react-icons/fa'
import Context from '../../context/bakeryContext'
import './index.css'

const CartItem = props => {
  const {data} = props
  const {productName, price, quantity} = data

  return (
    <Context.Consumer>
      {value => {
        const {incrementCartQuantity, decrementCartQuantity} = value

        const handleIncrease = () => {
          incrementCartQuantity(productName)
        }

        const handleDecrease = () => {
          decrementCartQuantity(productName)
        }

        return (
          <li className="cart-item">
            <p className="ci-name">Product Name: {productName}</p>
            <p className="ci-price">Price: {price}</p>
            <p className="ci-quantity">
              Quantity:
              <button
                className="quantity-btn"
                type="button"
                onClick={handleDecrease}
              >
                <FaMinus />
              </button>
              {quantity}
              <button
                className="quantity-btn"
                type="button"
                onClick={handleIncrease}
              >
                <FaPlus />
              </button>
            </p>
          </li>
        )
      }}
    </Context.Consumer>
  )
}

export default CartItem
