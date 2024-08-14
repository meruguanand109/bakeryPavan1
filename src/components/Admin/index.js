import React, {useContext} from 'react'
import BillItem from '../BillItem'
import Context from '../../context/bakeryContext'
import './index.css'

const Admin = () => {
  const {pBillsList} = useContext(Context)

  // Calculate today's amount using reduce with a simplified arrow function
  const todaysAmount = pBillsList.reduce(
    (total, bill) =>
      total +
      bill.reduce(
        (billTotal, item) => billTotal + item.quantity * item.price,
        0,
      ),
    0,
  )

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <h3>Todays Bills</h3>
      <ul className="bills-list">
        {pBillsList.map(each => (
          <React.Fragment key={each[0]?.billNumber}>
            {each.map(item => (
              <BillItem data={item} key={item.billNumber} />
            ))}
          </React.Fragment>
        ))}
      </ul>
      <h1>Today: {todaysAmount}</h1>
    </div>
  )
}

export default Admin
