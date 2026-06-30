import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="app-nav">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/other">Other</NavLink>
    </nav>
  );
}

export default Navbar;
