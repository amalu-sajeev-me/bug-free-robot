import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../Css/LP_Footer.css';

function LP_Footer() {
    return (
        <>
            <footer>
                <div className='LP_F-container LP_F-container-flex'>
                    <div className='LP_F-icons'>
                        <TwitterIcon className='LP_F-icon'/>
                        <FacebookIcon className='LP_F-icon'/>
                        <InstagramIcon className='LP_F-icon'/>
                    </div>
                    <div className='LP_F-line'>
                        <hr />
                    </div>
                    <div className='LP_F-copyright'>
                        <p>All rights reserved &copy;</p>
                        <p>Made with React,Node</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default LP_Footer
