import Context from '../../context/bakeryContext'
import ProductItem from '../ProductItem'
import './index.css'

const ProductsList = () => (
  <>
    <Context.Consumer>
      {value => {
        const {productsList} = value
        return (
          <li className="ProductList">
            {productsList.map(each => (
              <ProductItem data={each} key={each.productName} />
            ))}
          </li>
        )
      }}
    </Context.Consumer>
  </>
)

export default ProductsList
