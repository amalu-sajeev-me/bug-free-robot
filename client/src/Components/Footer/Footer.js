import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../Css/Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <div className='container container-flex'>
                    <div className='icons'>
                        <TwitterIcon className='icon'/>
                        <FacebookIcon className='icon'/>
                        <InstagramIcon className='icon'/>
                    </div>
                    <div className='line'>
                        <hr />
                    </div>
                    <div className='copyright'>
                        <p>All rights reserved &copy;</p>
                        <p>Made with React,Node</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
