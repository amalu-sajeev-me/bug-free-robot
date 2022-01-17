import React, { useState } from "react";
// import signpic from '../../Image/Signpic.png';
import "./Login.css";
import validation from "./validation";

function Signup({ setOpenModal }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName:"",
    dob:"",
    phone:"",
    username:"",
    email: "",
    password: "",
    Confrimpassword:""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);
  const handleClick = (e) => {
    e.preventDefault();
    setErrors(validation(values));
  };
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn"></div>
          <div className="container">
            <div className="app-wrapper">
              <div>
                <h2 className="title">Create your Account</h2>
              </div>
              <form className="form-wrapper">
                <div className="name">
                  <div className="Fname">
                  <label className="label">Enter First Name</label>
                  <input
                    className="input"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="error">{errors.fullname}</p>
                  )}
                  </div>
                  <div className="Lname">
                  <label className="label">Enter Last Name</label>
                  <input
                    className="input"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="error">{errors.lastName}</p>
                  )}
                  </div>
                </div>
                <div className="name">
                  <div className="DOB">
                  <label className="label">Enter DOB</label>
                  <input
                    className="input"
                    type="text"
                    name="dob"
                    value={values.dob}
                    onChange={handleChange}
                  />
                  {errors.dob && (
                    <p className="error">{errors.dob}</p>
                  )}
                  </div>
                  <div className="ph">
                  <label className="label">Enter Phone No.:</label>
                  <input
                    className="input"
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="error">{errors.phone}</p>
                  )}
                  </div>
                </div>
                <div className="name">
                  <div className="email">
                  <label className="label">Enter Email</label>
                  <input
                    className="input"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="error">{errors.email}</p>
                  )}
                  </div>
                  <div className="uname">
                  <label className="label">Enter Username</label>
                  <input
                    className="input"
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="error">{errors.username}</p>
                  )}
                  </div>
                </div>
                <div className="name">
                  <div className="npassword">
                  <label className="label">Enter password</label>
                  <input
                    className="input"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                  </div>
                  <div className="cpassword">
                  <label className="label">Confirm Password</label>
                  <input
                    className="input"
                    type="password"
                    name="Confrimpassword"
                    value={values.Confrimpassword}
                    onChange={handleChange}
                  />
                  {errors.Confrimpassword && (
                    <p className="error">{errors.Confrimpassword}</p>
                  )}
                  </div>
                </div>
                
                <div className="footer">
                  <div className="btnsignin">
                  <button onClick={handleClick} className="submit">
                    Continue
                  </button>
                  </div>
                  <div className="btnsignup">
                  <button>
                    Already a Member?
                  </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
