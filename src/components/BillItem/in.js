import {Link} from 'react-router-dom'
import './index.css'

const BillItem = props => {
  const {data} = props
  const billTime = new Date(data[0].billTime)
  const h = billTime.getHours()
  const m = billTime.getMinutes()
  const currentTime = `${h} : ${m}`
  let totalItems = 0
  let totalAmount = 0
  const products = []
  for (const each of data) {
    totalAmount += each.quantity * each.price
    totalItems += each.quantity
    const product = `${each.productName}  x${each.quantity} `
    products.push(product)
  }
  return (
    <li className="bill-item">
      <p>Bill Number : {data[0].billNumber}</p>
      <p>Items :</p>
      <ul>
        {products.map(each => (
          <li key={each}>{each}</li>
        ))}
      </ul>
      <p>Total Items : {totalItems}</p>
      <p>Bill Time : {currentTime}</p>
      <p>
        Total Amount : <b>{totalAmount}</b>
      </p>
      <Link to={`/bills/${data[0].billNumber}`}>Edit</Link>
    </li>
  )
}

export default BillItem

//  <p>{data[0].billNumber}</p>
//  <p>{totalItems}</p>
//  <p>{currentTime}</p>
//  <p>{totalAmount}</p>
//  <Link to={`/bills/${data[0].billNumber}`}>Edit</Link>
