import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#ddd' }}>
      <Link to="/">Home</Link> |{' '}
      <Link to="/products">Products</Link> |{' '}
      <Link to="/cart">Cart</Link> |{' '}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;