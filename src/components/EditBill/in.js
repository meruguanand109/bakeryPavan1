import {useParams, Link} from 'react-router-dom'
import EditBillItem from '../EditBillItem'
import Context from '../../context/bakeryContext'

const EditBill = () => {
  const {id} = useParams()
  return (
    <Context.Consumer>
      {value => {
        const {billsList, updatePBillsList} = value
        const bill = billsList[id]
        const onClickSave = () => {
          updatePBillsList()
        }
        let totalBill = 0
        for (const each of bill) {
          totalBill += each.price * each.quantity
        }
        return (
          <div>
            <h1>Edit Bill</h1>
            <ul className="edit-bill-list">
              {bill.map(each => (
                <EditBillItem data={each} key={each.productName} />
              ))}
            </ul>
            <h1>Total Amount: {totalBill}</h1>
            <Link to="/admin">
              <button onClick={onClickSave}>Save</button>
            </Link>
          </div>
        )
      }}
    </Context.Consumer>
  )
}

export default EditBill
