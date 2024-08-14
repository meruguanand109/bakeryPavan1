import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Context from './context/bakeryContext'
import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart'
import Admin from './components/Admin'
import EditBill from './components/EditBill'

const App = () => {
  const [productsList, setProductsList] = useState([
    {
      productName: 'burger',
      price: 80,
      quantity: 1,
      imgSrc:
        'https://images.stockcake.com/public/c/3/7/c374e5ac-f754-4c1c-a4d0-3ddb46049bbf_large/juicy-stacked-burger-stockcake.jpg',
    },
    {
      productName: 'pizza',
      price: 110,
      quantity: 1,
      imgSrc:
        'https://images.stockcake.com/public/3/9/4/39465313-b435-474b-be35-356204396954_large/delicious-pepperoni-pizza-stockcake.jpg',
    },
    {
      productName: 'puff',
      price: 30,
      quantity: 1,
      imgSrc:
        'https://images.stockcake.com/public/4/f/f/4fffb67c-f63e-4c9d-8a0e-ffc26be0db42_large/savory-puff-pastry-stockcake.jpg',
    },
  ])

  const [cartList, setCartList] = useState([
    {
      productName: 'burger',
      price: 80,
      quantity: 1,
      imgSrc:
        'https://images.stockcake.com/public/c/3/7/c374e5ac-f754-4c1c-a4d0-3ddb46049bbf_large/juicy-stacked-burger-stockcake.jpg',
    },
  ])

  const [billsList, setBillsList] = useState([])
  const [pBillsList, setPBillsList] = useState([]) // Ensure pBillsList is initialized as an empty array

  const addToCart = event => {
    const newProduct = productsList.find(
      each => each.productName === event.target.value,
    )
    const productExists = cartList.find(
      item => item.productName === newProduct.productName,
    )
    if (productExists) {
      const updatedCartList = cartList.map(item => {
        if (item.productName === newProduct.productName) {
          return {
            ...item,
            quantity: item.quantity + newProduct.quantity,
          }
        }
        return item
      })
      setCartList(updatedCartList)
    } else {
      setCartList([...cartList, {...newProduct, billTime: new Date()}])
    }
  }

  const incrementCartQuantity = productName => {
    const updatedCartList = cartList.map(item => {
      if (item.productName === productName) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }
      return item
    })

    setCartList(updatedCartList) // Update state with the new array
  }

  const decrementCartQuantity = productName => {
    const updatedCartList = cartList
      .map(item => {
        if (item.productName === productName) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1, // Decrement quantity
            }
          }
          return null // If quantity is 1, mark for removal
        }
        return item
      })
      .filter(Boolean) // Remove any null values

    setCartList(updatedCartList) // Update state with the new array
  }

  const addBill = () => {
    const newBillNumber = billsList.length
    console.log(newBillNumber)
    const currentBillTime = new Date()

    const updatedCartList = cartList.map(item => ({
      ...item,
      billNumber: newBillNumber,
      billTime: currentBillTime,
    }))

    setBillsList([...billsList, updatedCartList])
    setPBillsList([...billsList, updatedCartList]) // Update pBillsList with the correct data
    setCartList([]) // Clear cart after adding to billsList
  }

  const updatePBillsList = () => {
    setPBillsList([...billsList]) // Ensure pBillsList is always an array
  }

  const incrementQuantity = data => {
    const billIndex = data.billNumber
    const {productName} = data

    const updatedBillsList = billsList.map((bill, index) => {
      if (index === billIndex) {
        return bill.map(item => {
          if (item.productName === productName) {
            return {
              ...item,
              quantity: item.quantity + 1, // Increment quantity
            }
          }
          return item
        })
      }
      return bill
    })

    setBillsList(updatedBillsList)
    updatePBillsList() // Sync pBillsList
  }

  const decrementQuantity = data => {
    const {productName} = data
    const billIndex = data.billNumber

    const updatedBillsList = billsList.map((bill, index) => {
      if (index === billIndex) {
        return bill
          .map(item => {
            if (item.productName === productName) {
              if (item.quantity > 1) {
                return {
                  ...item,
                  quantity: item.quantity - 1, // Decrement quantity
                }
              }
              return null // If quantity is 1, remove the item
            }
            return item
          })
          .filter(Boolean) // Remove any null values
      }
      return bill
    })

    setBillsList(updatedBillsList) // Set the updated bills list correctly
    updatePBillsList() // Sync pBillsList
  }

  return (
    <Context.Provider
      value={{
        productsList,
        cartList,
        billsList,
        pBillsList,
        addToCart,
        addBill,
        incrementQuantity,
        decrementQuantity,
        updatePBillsList,
        incrementCartQuantity,
        decrementCartQuantity,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />
        <Route path="/admin" Component={Admin} />
        <Route path="/bills/:id" Component={EditBill} />
      </Routes>
    </Context.Provider>
  )
}

export default App
