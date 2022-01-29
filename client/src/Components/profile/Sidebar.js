import React, { useState } from 'react';
import '../Css/Sidebar.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className='SB-mainContainer'>
        <div className='head-container'>
            <header className='head-text'><DehazeIcon onClick={() => setSidebar(!sidebar)}/>menu</header>
        </div>
        {sidebar && <div className='sidebar active'>
            <ul>
                <li><a href='/profile'>Profile</a></li>
                <li><a href='/job'>Jobs</a></li>
                <li><a href='/jobseek'>Jobs Seekers</a></li>
                <li><a href='/settings'>Settings</a></li>
            </ul>
        </div>}
    </div>
    );
}

export default Sidebar;
