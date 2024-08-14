import {FaMinus, FaPlus} from 'react-icons/fa6'
import Context from '../../context/bakeryContext'
import './index.css'

const CartItem = props => {
  const {data} = props
  const {productName, price, quantity} = data

  return (
    <Context.Consumer>
      {value => {
        const {incrementCartQuantity, decrementCartQuantity} = value
        const onClickPlusCart = () => {
          incrementCartQuantity(productName)
        }
        const onclickMinusCart = () => {
          decrementCartQuantity(productName)
        }
        return (
          <li className="cart-item">
            <p className="ci-name">Product Name : {productName}</p>
            <p className="ci-price">Price : {price}</p>
            <p className="ci-quantity">
              Quantity :
              <button className="minus-btn" onClick={onclickMinusCart}>
                <FaMinus />
              </button>
              {quantity}{' '}
              <button className="minus-btn" onClick={onClickPlusCart}>
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
