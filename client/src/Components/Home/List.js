import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../Images/logo.png';
import PersonIcon from '@material-ui/icons/Person';
import '../Css/List.css';

function List() {
    return (
        <>
           <header>
                <div className='container container-flex'>
                    <div className='logoContainer'>
                        {/* <img src={logo} alt="logo" className='logo'/>   */}
                        <h2>LOGO</h2>
                    </div>
                    <nav>
                        <div className='list'>
                            <NavLink to="/" exact className="listItem" activeClassName='activeItem'>Home</NavLink>
                            <NavLink to="/about" className="listItem" activeClassName='activeItem'>About</NavLink>
                            <NavLink to="/feature" className="listItem" activeClassName='activeItem'>Feature</NavLink>
                            <NavLink to="/contact" className="listItem" activeClassName='activeItem'>Contact Us</NavLink>
                          
                        </div>
                    </nav>
                </div>
           </header> 
        </>
    )
}

export default List
