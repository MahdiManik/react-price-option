
import PropTypes from 'prop-types'

const Navbar = () => {


  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/portfolio', name: 'Portfolio' },
    { id: 5, path: '/contact', name: 'Contact' },
  ];

  return (
    <nav>
      <ul className='flex'>
        {
          routes.map(route => <li className='mr-12' key={route.id}><a href={route.path}>{route.name}</a></li>)
        }
      </ul>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar