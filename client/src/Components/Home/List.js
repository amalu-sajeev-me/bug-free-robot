import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../Images/logo.png';
import '../Css/List.css';

function List() {
    return (
        <>
           <header>
                <div className='A-container A-container-flex'>
                    <div className='A-logoContainer'>
                        {/* <img src={logo} alt="logo" className='A-logo'/>   */}
                        <h2>LOGO</h2>
                    </div>
                    <nav>
                        <div className='A-list'>
                            <NavLink to="/" exact className="A-listItem" activeClassName='A-activeItem'>Home</NavLink>
                            <NavLink to="/about" className="A-listItem" activeClassName='A-activeItem'>About</NavLink>
                            <NavLink to="/feature" className="A-listItem" activeClassName='A-activeItem'>Feature</NavLink>
                            <NavLink to="/contact" className="A-listItem" activeClassName='A-activeItem'>Contact Us</NavLink>
                          
                        </div>
                    </nav>
                </div>
           </header> 
        </>
    )
}

export default List
