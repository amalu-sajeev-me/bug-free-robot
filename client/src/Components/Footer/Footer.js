import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../Css/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <div className='A-container A-container-flex'>
                    <div className='A-icons'>
                        <TwitterIcon className='A-icon'/>
                        <FacebookIcon className='A-icon'/>
                        <InstagramIcon className='A-icon'/>
                    </div>
                    <div className='A-line'>
                        <hr />
                    </div>
                    <div className='A-copyright'>
                        <p>All rights reserved &copy;</p>
                        <p>Made with React,Node</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
