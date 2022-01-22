import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/Main_Header.css';


function Main_Header() {
  return (
  <>
            <header>
                <div className='MN-Container MN-Container-flex'>
                    <div className='MN-logoContainer'>
                        {/* <img src={logo} alt="logo" className='A-logo'/>   */}
                        <h2>LOGO</h2>
                    </div>
                    <nav>
                        <div className='MN-list'>
                            <NavLink to="/dashboard" exact className="MN-listItem" activeClassName='MN-activeItem'>Dashboard</NavLink>
                            <NavLink to="/notification" className="MN-listItem" activeClassName='MN-activeItem'>Notification</NavLink>
                            <NavLink to="/message" className="MN-listItem" activeClassName='MN-activeItem'>Messages</NavLink>
                            <NavLink to="/help" className="MN-listItem" activeClassName='MN-activeItem'>Help</NavLink>
                          
                        </div>
                    </nav>
                </div>
            </header>
  </>
    );
}

export default Main_Header;
