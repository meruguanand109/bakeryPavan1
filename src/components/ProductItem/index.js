import Context from '../../context/bakeryContext'
import './index.css'

const ProductItem = props => {
  const {data} = props
  const {productName, price, imgSrc} = data
  return (
    <Context.Consumer>
      {value => {
        const {addToCart} = value
        return (
          <ul className="products-list">
            <img className="products-img" src={imgSrc} alt={productName} />
            <h1>{productName}</h1>
            <p>{price}</p>
            <button type="button" onClick={addToCart} value={productName}>
              Add To Cart
            </button>
          </ul>
        )
      }}
    </Context.Consumer>
  )
}

export default ProductItem
