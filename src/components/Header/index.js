import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header">
    <Link to="/" className="p">
      Bakery
    </Link>
    <Link to="/cart" className="p">
      Cart
    </Link>
    <Link to="/admin" className="p">
      Admin
    </Link>
  </nav>
)

export default Header
