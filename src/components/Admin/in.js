import Context from '../../context/bakeryContext'
import BillItem from '../BillItem'
import './index.css'

const Admin = () => (
  <Context.Consumer>
    {value => {
      const {pBillsList} = value
      console.log(pBillsList, 'p')
      let todaysAmount = 0
      for (const each of pBillsList) {
        for (const each2 of each) {
          todaysAmount += each2.quantity * each2.price
        }
      }
      return (
        <div className="admin">
          <h3>Todays Bills</h3>
          <ul className="bills-list">
            {pBillsList.map(each => (
              <BillItem data={each} key={each[0].billNumber} />
            ))}
          </ul>
          <h1> Today : {todaysAmount}</h1>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Admin
