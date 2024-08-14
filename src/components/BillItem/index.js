import {Link} from 'react-router-dom'
import './index.css'

const BillItem = props => {
  const {data} = props

  // Calculate totalAmount, totalItems, and products using reduce
  const {totalAmount, totalItems, products} = data.reduce(
    (acc, item) => {
      const itemTotal = item.quantity * item.price
      const product = `${item.productName} x${item.quantity}`

      return {
        totalAmount: acc.totalAmount + itemTotal,
        totalItems: acc.totalItems + item.quantity,
        products: [...acc.products, product],
      }
    },
    {totalAmount: 0, totalItems: 0, products: []},
  )

  const billTime = new Date(data[0].billTime)
  const h = billTime.getHours()
  const m = billTime.getMinutes()
  const currentTime = `${h} : ${m}`

  return (
    <li className="bill-item">
      <p>Bill Number: {data[0].billNumber}</p>
      <p>Items:</p>
      <ul>
        {products.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
      <p>Total Items: {totalItems}</p>
      <p>Bill Time: {currentTime}</p>
      <p>
        Total Amount: <b>{totalAmount}</b>
      </p>
      <Link to={`/bills/${data[0].billNumber}`}>Edit</Link>
    </li>
  )
}

export default BillItem
