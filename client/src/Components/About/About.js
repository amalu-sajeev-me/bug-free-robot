import React from "react";
import Header from "../Home/Header";
import "./aboutSection.css";
// import { Box } from "@mui/material";
const About = () => {
  return (
    <>
    <Header />
      <div className ="container1">
        <h1>About Us</h1> 
         <div className="aboutSection1">
             <h2>Our Visions</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sint voluptas est iusto quasi repudiandae quia magni aliquam officiis, incidunt error laborum, fuga nisi omnis cumque nulla vitae dolor eaque.</p>
             <h2>Our Technology</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, officia laudantium. Ex nam eaque hic repudiandae a dolores cumque, dolorum, debitis suscipit nisi delectus nesciunt.</p>
         </div> 
           <div className="aboutSectionGradient1">
             <h2>Image</h2>  
             <img src="" alt="" />

           </div>
      </div>
      </>
  );
};

export default About;