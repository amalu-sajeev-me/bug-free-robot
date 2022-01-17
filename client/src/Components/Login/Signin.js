import React, { useState } from "react";
import "./Login.css";
import validation from "./validation";

function Signin({ setOpenModal }) {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  // console.log(values);
  const handleClick = (e) => {
    e.preventDefault();
    setErrors(validation(values));
  };
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn"></div>
          <div className="app-wrapper">
            <div>
              <h2 className="title">Create your Account</h2>
            </div>
            <form className="form-wrapper">
              <div className="fullname">
                <label className="label">Full Name</label>
                <input
                  className="input"
                  type="text"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && <p className="error">{errors.fullname}</p>}
              </div>
              <div className="signinemail">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="signinpassword">
                <label className="label">Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="footer">
                <button onClick={handleClick} className="submit">Continue</button>
                <button className="submit">
                    Not a Member?
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
