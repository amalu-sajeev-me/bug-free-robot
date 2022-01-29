import React from 'react';
import '../Css/Infobar.css';

function Infobar() {
  return (
    <div className='IB-mainContainer'>
        <div className='infobar active'>
            <ul>
                <li><a href='/profile'>About</a></li>
                <li><a href='/job'>Contact</a></li>
                <li><a href='/jobseek'>Skills</a></li>
            </ul>
        </div>
    </div>
    );
}

export default Infobar;
