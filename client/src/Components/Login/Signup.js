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
      <div className="A-modalBackground">
        <div className="A-modalContainer">
          <div className="A-titleCloseBtn"></div>
          <div className="A-container">
            <div className="A-app-wrapper">
              <div>
                <h2 className="A-title">Create your Account</h2>
              </div>
              <form className="A-form-wrapper">
                <div className="A-name">
                  <div className="A-Fname">
                  <label className="A-label">Enter First Name</label>
                  <input
                    className="A-input"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="A-error">{errors.fullname}</p>
                  )}
                  </div>
                  <div className="A-Lname">
                  <label className="A-label">Enter Last Name</label>
                  <input
                    className="A-input"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="A-error">{errors.lastName}</p>
                  )}
                  </div>
                </div>
                <div className="A-name">
                  <div className="A-DOB">
                  <label className="A-label">Enter DOB</label>
                  <input
                    className="A-input"
                    type="text"
                    name="dob"
                    value={values.dob}
                    onChange={handleChange}
                  />
                  {errors.dob && (
                    <p className="A-error">{errors.dob}</p>
                  )}
                  </div>
                  <div className="A-ph">
                  <label className="A-label">Enter Phone No.:</label>
                  <input
                    className="A-input"
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="A-error">{errors.phone}</p>
                  )}
                  </div>
                </div>
                <div className="A-name">
                  <div className="A-email">
                  <label className="A-label">Enter Email</label>
                  <input
                    className="A-input"
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="A-error">{errors.email}</p>
                  )}
                  </div>
                  <div className="A-uname">
                  <label className="A-label">Enter Username</label>
                  <input
                    className="A-input"
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="A-error">{errors.username}</p>
                  )}
                  </div>
                </div>
                <div className="A-name">
                  <div className="A-npassword">
                  <label className="A-label">Enter password</label>
                  <input
                    className="A-input"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="A-error">{errors.password}</p>
                  )}
                  </div>
                  <div className="A-cpassword">
                  <label className="A-label">Confirm Password</label>
                  <input
                    className="A-input"
                    type="password"
                    name="Confrimpassword"
                    value={values.Confrimpassword}
                    onChange={handleChange}
                  />
                  {errors.Confrimpassword && (
                    <p className="A-error">{errors.Confrimpassword}</p>
                  )}
                  </div>
                </div>

                <div className="A-footer">
                  <div className="A-btnsignin">
                  <button onClick={handleClick} className="A-submit">
                    Continue
                  </button>
                  </div>
                  <div className="A-btnsignup">
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