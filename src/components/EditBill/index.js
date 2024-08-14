import {useParams, Link} from 'react-router-dom'
import EditBillItem from '../EditBillItem'
import Context from '../../context/bakeryContext'
import './index.css'

const EditBill = () => {
  const {id} = useParams()

  return (
    <Context.Consumer>
      {value => {
        const {billsList, updatePBillsList} = value
        const bill = billsList[id] || [] // Fallback to empty array if bill is undefined

        // Calculate total amount using reduce
        const totalBill = bill.reduce(
          (total, each) => total + each.price * each.quantity,
          0,
        )

        return (
          <div>
            <h1>Edit Bill</h1>
            <ul className="edit-bill-list">
              {bill.map(each => (
                <EditBillItem
                  data={each}
                  key={each.productId} // Assuming `productId` is a unique identifier
                />
              ))}
            </ul>
            <h2>Total Amount: {totalBill}</h2>
            <button
              type="button"
              onClick={updatePBillsList}
              className="save-button"
            >
              Save
            </button>
            <Link to="/admin" className="admin-link">
              Go to Admin
            </Link>
          </div>
        )
      }}
    </Context.Consumer>
  )
}

export default EditBill
