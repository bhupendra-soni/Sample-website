  import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import '../components/Navbar.css';  
  import Profile from '../components/profile';

  function Navbar() {
      const {click, setClick} = useState(false); 
    const [button, setButton] = useState(true);

      const handleClick = () => setClick(!click);
      const closeMobileMenu = () => setClick(false);

      const showButton = () => {
          if (window.innerWidth <= 960) {
              setButton(false);
          } else {
              setButton(true);
          }
      };

      useEffect(() => {
        showButton();
      }, []);

      window.addEventListener('resize', showButton);

      return (
          <>
           <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  SUNSTONE EDUVERSITY <i className='fab fa-typo3' />
              </Link>
             <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />     
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Programs
                  </Link>
                 </li>
                 <li className='nav-item'>
                  <Link to='/campuses' className='nav-links' onClick={closeMobileMenu}>
                      Campuses
                  </Link>
                 </li>
                 <li className='nav-item'>
                  <Link to='/fee-structure' className='nav-links' onClick={closeMobileMenu}>
                     Fee Structure 
                  </Link>
                 </li>
                 <li className='nav-item'>
                  <Link to='/hire-from-sunstone' className='nav-links' onClick={closeMobileMenu}>
                      Hire From Sunstone 
                  </Link>
                 </li>
                 <li className='nav-item'>
                  <Link to='/faculty' className='nav-links' onClick={closeMobileMenu}>
                      Faculty
                  </Link>
                 </li>
                 <li className='nav-item'>
                  <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                      About Us
                  </Link>
                 </li>
                 <li>
                  <Link to='/apply-now' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Apply Now
                  </Link>
                 </li>
                 </ul>
                 {button && <Button buttonStyle='btn--outline'>Apply Now</Button>}
                </div>
           </nav>
          </>
      );
  }
  
  export default Navbar;
  

            