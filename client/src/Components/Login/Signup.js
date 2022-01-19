import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./ButtonComponent/Button";
import Input from "./InputComponent/Input";
import "./Login.css";
import validation from "./validation";

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
  console.log(values);
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
      <div className="A-modalBackground">
        <div className="A-modalContainer">
          <div className="A-container">
            <div className="A-app-wrapper">
              <div>
                <h2 className="A-title">Create your Account</h2>
              </div>
              <form className="A-form-wrapper">
                <div className="A-name">
                  <div className="A-Fname">
                  <Input label='Enter First Name' type="text" name="firstName" value={values.firstName} onChange={handleChange}/>
                  {errors.firstName && (<p className="A-error">{errors.fullname}</p>)}
                  </div>
                  <div className="A-Lname">
                  <Input label='Enter Last Name' type="text" name="lastName" value={values.lastName} onChange={handleChange}/>
                  {errors.lastName && (<p className="A-error">{errors.lastName}</p>)}
                  </div>
                </div>
                <div className="A-name">
                  <div className="A-DOB">
                  <Input label='Enter DOB' type="text" name="dob" value={values.dob} onChange={handleChange}/>
                  {errors.dob && (<p className="A-error">{errors.dob}</p>)}
                  </div>
                  <div className="A-ph">
                  <Input label='Enter Phone No.:' type="text" name="phone" value={values.phone} onChange={handleChange}/>
                  {errors.phone && (<p className="A-error">{errors.phone}</p>)}
                  </div>
                </div>
                <div className="A-name">
                  <div className="A-email">
                  <Input label='Enter Email' type="text" name="email" value={values.email} onChange={handleChange}/>
                  {errors.email && (<p className="A-error">{errors.email}</p>)}
                  </div>
                  <div className="A-uname">
                  <Input label='Enter Username' type="text" name="username" value={values.username} onChange={handleChange}/>
                  {errors.username && (<p className="A-error">{errors.username}</p>)}
                  </div>
                </div>
                <div className="A-name">
                  <div className="A-npassword">
                  <Input label='Enter password' type="password" name="password" value={values.password} onChange={handleChange}/>
                  {errors.password && (<p className="A-error">{errors.password}</p>)}
                  </div>
                  <div className="A-cpassword">
                  <Input label='Confirm Password' type="password" name="Confrimpassword" value={values.Confrimpassword} onChange={handleChange}/>
                  {errors.Confrimpassword && (<p className="A-error">{errors.Confrimpassword}</p>)}
                  </div>
                </div>
                <div className="A-footer">
                  <div className="A-btnsignin">
                  <Button onClick={handlebtnClick} button='Continue' />
                  </div>
                  <div className="A-btnsignup">
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