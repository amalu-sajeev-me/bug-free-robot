import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Home/Header";
import Button from "./ButtonComponent/Button";
import Input from "./InputComponent/Input";
import "../Css/Login.css";
import validation from "./validation";

function Signin() {
  const history = useHistory();
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
  const v_fullname = 'test';
  const v_email = 'test@values.com';
  const v_password = 'test12345';
  const handlebtnClick = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    console.log(values);
    if(values.fullname !== v_fullname && values.email !== v_email && values.password !== v_password){
      
    }else{
      history.push('/dashboard')
    }
  };
  const handlebtnChange = (e) => {
    e.preventDefault();
    history.push('/signup');
  }
  return (
    <>
    <Header />
      <div className="A-modalBackground">
        <div className="A-modalContainer">
          <div className="A-app-wrapper">
            <div>
              <h2 className="A-title">Welcome Back</h2>
            </div>
            <form className="A-form-wrapper">
              <div className="A-fullname">
                <Input label="Full Name" type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
                {errors.fullname && (<p className="A-error">{errors.fullname}</p>)}
              </div>
              <div className="A-signinemail">
                <Input label='Email' type="email" name="email" value={values.email} onChange={handleChange}/>
                {errors.email && (<p className="A-error">{errors.email}</p>)}
              </div>
              <div className="A-signinpassword">
                <Input label='Password' type="password" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && (<p className="A-error">{errors.password}</p>)}
              </div>
              <div className="A-footer">
                <Button button='Continue' onClick={handlebtnClick}/>
                <Button button='Not a member?' onClick ={handlebtnChange}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;