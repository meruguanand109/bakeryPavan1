import {FaMinus, FaPlus} from 'react-icons/fa6'
import Context from '../../context/bakeryContext'
import './index.css'

const EditBillItem = props => {
  const {data} = props
  return (
    <Context.Consumer>
      {value => {
        const {incrementQuantity, decrementQuantity} = value
        const onClickPlus = () => {
          incrementQuantity(data)
        }
        const onClickMinus = () => {
          decrementQuantity(data)
        }
        return (
          <li className="edit-bill-item">
            <p>{data.productName}</p>
            <div className="row">
              <button className="minus-btn" onClick={onClickMinus}>
                <FaMinus />
              </button>
              <p>{data.quantity}</p>
              <button className="minus-btn" onClick={onClickPlus}>
                <FaPlus />
              </button>
            </div>
          </li>
        )
      }}
    </Context.Consumer>
  )
}

export default EditBillItem
