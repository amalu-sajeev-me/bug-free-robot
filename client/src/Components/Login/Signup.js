import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./ButtonComponent/Button";
import Input from "./InputComponent/Input";
import "../Css/Login.css";
import validation from "./validation";
import LP_Header from "../Header/LP_Header";

function Signup() {
  const history = useHistory();
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
  const handlebtnClick = (e) => {
    e.preventDefault();
    setErrors(validation(values));
  };
  const handlebtnChange = (e) => {
    e.preventDefault();
    history.push('/signin');
  }
  return (
    <>
    <LP_Header />
      <div className="SG-modalBackground">
        <div className="SG-modalContainer">
          <div className="SG-container">
            <div className="SG-app-wrapper">
              <div>
                <h2 className="SG-title">Create your Account</h2>
              </div>
              <form className="SG-form-wrapper">
                <div className="SG-name">
                  <div className="SG-Fname">
                  <Input label='Enter First Name' type="text" name="firstName" value={values.firstName}/>
                  {errors.firstName && (<p className="SG-error">{errors.fullname}</p>)}
                  </div>
                  <div className="SG-Lname">
                  <Input label='Enter Last Name' type="text" name="lastName" value={values.lastName}/>
                  {errors.lastName && (<p className="SG-error">{errors.lastName}</p>)}
                  </div>
                </div>
                <div className="SG-name">
                  <div className="SG-DOB">
                  <Input label='Enter DOB' type="text" name="dob" value={values.dob}/>
                  {errors.dob && (<p className="SG-error">{errors.dob}</p>)}
                  </div>
                  <div className="SG-ph">
                  <Input label='Enter Phone No' type="text" name="phone" value={values.phone}/>
                  {errors.phone && (<p className="SG-error">{errors.phone}</p>)}
                  </div>
                </div>
                <div className="SG-name">
                  <div className="SG-email">
                  <Input label='Enter Email' type="text" name="email" value={values.email}/>
                  {errors.email && (<p className="SG-error">{errors.email}</p>)}
                  </div>
                  <div className="SG-uname">
                  <Input label='Enter Username' type="text" name="username" value={values.username} onChange={handleChange}/>
                  {errors.username && (<p className="SG-error">{errors.username}</p>)}
                  </div>
                </div>
                <div className="SG-name">
                  <div className="SG-npassword">
                  <Input label='Enter password' type="password" name="password" value={values.password} onChange={handleChange}/>
                  {errors.password && (<p className="SG-error">{errors.password}</p>)}
                  </div>
                  <div className="SG-cpassword">
                  <Input label='Confirm Password' type="password" name="Confrimpassword" value={values.Confrimpassword} onChange={handleChange}/>
                  {errors.Confrimpassword && (<p className="SG-error">{errors.Confrimpassword}</p>)}
                  </div>
                </div>
                <div className="SG-footer">
                  <div className="SG-btnsignin">
                  <Button onClick={handlebtnClick} button='Continue' />
                  </div>
                  <div className="SG-btnsignup">
                  <Button button='Already a Member?'onClick={handlebtnChange}/>
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