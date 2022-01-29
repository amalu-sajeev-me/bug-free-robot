import React, { useState } from 'react';
import Main_Header from '../Header/Main_Header';
import axios from 'axios';
import '../Css/Profile.css';
import Sidebar from './Sidebar';
import LP_Footer from '../Footer/LP_Footer';
import Infobar from './Infobar';

function Profile() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
        axios.get('https://bug-free.herokuapp.com/api/members/all')
        .then(res => {
            console.log(res);
            setFname(res.data.response[1].firstName);
            setLname(res.data.response[1].lastName);
        })

  return (
  <>
    <Main_Header />
    <div className='PF-MainContainer'>
        <Sidebar/>
        <div className='PF-subContainer'>
            <div className='PF-topContainer'>

            </div>
            <div className='PF-button'>

            </div>
            <div className='PF-bottomContainer'>
                <Infobar />
                <div className='PF-userinfo'>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>
        </div>
    </div>
    <LP_Footer />
  </>
  );
}

export default Profile;
