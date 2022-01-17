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
      <div className="A-modalBackground">
        <div className="A-modalContainer">
          <div className="A-titleCloseBtn"></div>
          <div className="A-app-wrapper">
            <div>
              <h2 className="A-title">Create your Account</h2>
            </div>
            <form className="A-form-wrapper">
              <div className="A-fullname">
                <label className="A-label">Full Name</label>
                <input
                  className="A-input"
                  type="text"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && <p className="A-error">{errors.fullname}</p>}
              </div>
              <div className="A-signinemail">
                <label className="A-label">Email</label>
                <input
                  className="A-input"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="A-error">{errors.email}</p>}
              </div>
              <div className="A-signinpassword">
                <label className="A-label">Password</label>
                <input
                  className="A-input"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="A-error">{errors.password}</p>}
              </div>
              <div className="A-footer">
                <button onClick={handleClick} className="A-submit">Continue</button>
                <button className="A-submit">
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