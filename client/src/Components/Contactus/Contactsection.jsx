import React from "react";
import LP_Header from "../Header/LP_Header";
import "./Contactsection.css";
// import { Box } from "@mui/material";
const Contactsection= () => {
  return (
    <>
    <LP_Header />
      <div className ="container2">
         <h1>Contact Us</h1> 
         <div className="aboutSection2">
             <h2>Address</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint voluptas est iusto quasi repudiandae quia magni aliquam officiis, incidunt error laborum, fuga nisi omnis cumque nulla vitae dolor eaque.</p>
             <h2>Custemer Care Numbers</h2>
             <p>8383838383</p>
             <p>8484848484</p>

         </div> 
           <div className="aboutSectionGradient2">
             <h2>Location</h2>  

           </div>
      </div>
    </>
  );
};

export default Contactsection;