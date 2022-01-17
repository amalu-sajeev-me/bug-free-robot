import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/Home.css'
import Signup from '../Login/Signup';

function Home() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
           <div className='mainSection'>
               <div className='contentBox'>
                   <h1>INTRODUCTION</h1>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
                <div className='btnBox'>
                    <div className='btn'>
                        <NavLink to='/signup' className="Signup" onClick={() => {
            setModalOpen(true);
        }}>Join the community</NavLink>
                        {modalOpen && <Signup setOpenModal={setModalOpen} />}
                    </div>
                    <div className='btn'>
                        <NavLink to='/signin' className="Signin">Already a Member</NavLink>
                        {modalOpen && <Signup setOpenModal={setModalOpen} />}
                    </div>
                </div>
           </div>
        </>
    )
}

export default Home
