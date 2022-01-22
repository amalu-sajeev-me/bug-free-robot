import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../Images/logo.png';
import '../Css/LP_Header.css';

function LP_Header() {
    return (
        <>
           <header>
                <div className='LP-container LP-container-flex'>
                    <div className='LP-logoContainer'>
                        {/* <img src={logo} alt="logo" className='A-logo'/>   */}
                        <h2>LOGO</h2>
                    </div>
                    <nav>
                        <div className='LP-list'>
                            <NavLink to="/" exact className="LP-listItem" activeClassName='LP-activeItem'>Home</NavLink>
                            <NavLink to="/about" className="LP-listItem" activeClassName='LP-activeItem'>About</NavLink>
                            <NavLink to="/feature" className="LP-listItem" activeClassName='LP-activeItem'>Feature</NavLink>
                            <NavLink to="/contact" className="LP-listItem" activeClassName='LP-activeItem'>Contact Us</NavLink>
                          
                        </div>
                    </nav>
                </div>
           </header> 
        </>
    )
}

export default LP_Header
