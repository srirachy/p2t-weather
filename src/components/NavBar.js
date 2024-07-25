import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id='navbar'>
      <div id='navblock' />
      <ul id='navlist'>
        <li className='navitem'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='navitem'>
          <Link to='/about'>About</Link>
        </li>
        <li className='navitem'>
          <Link to='/contacts'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;