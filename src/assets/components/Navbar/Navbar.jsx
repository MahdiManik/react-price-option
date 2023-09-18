
// import PropTypes from 'prop-types'
import { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {

  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/services', name: 'Services' },
    { id: 4, path: '/portfolio', name: 'Portfolio' },
    { id: 5, path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className='py-4 text-white bg-lime-800'>
      <div className='container mx-auto'>
        <div className='md:hidden text-2xl ' onClick={() => setOpen(!open)}>
          {
            open === true ?
              <AiOutlineClose></AiOutlineClose>
              :
              <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
          }



        </div>
        <ul className={`md:flex duration-500 py-4
      ${open ? "top-12 bg-orange-800 ml-4 p-12 rounded-lg" : "-top-40"}
      absolute md:static pl-8`}>
          {
            routes.map(route => <li className='mr-12 hover:bg-orange-700 hover:px-6 hover:py-1 rounded-lg' key={route.id}><a href={route.path}>{route.name}</a></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar