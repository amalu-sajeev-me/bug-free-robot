import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./ButtonComponent/Button";
import Input from "./InputComponent/Input";
import "../Css/Login.css";
import validation from "./validation";
import LP_Header from "../Header/LP_Header";

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
    <LP_Header />
      <div className="SG-modalBackground">
        <div className="SG-modalContainer">
          <div className="SG-app-wrapper">
            <div>
              <h2 className="SG-title">Welcome Back</h2>
            </div>
            <form className="SG-form-wrapper">
              <div className="SG-fullname">
                <Input label="Full Name" type="text" name="fullname" value={values.fullname} onChange={handleChange}/>
                {errors.fullname && (<p className="SG-error">{errors.fullname}</p>)}
              </div>
              <div className="SG-signinemail">
                <Input label='Email' type="email" name="email" value={values.email} onChange={handleChange}/>
                {errors.email && (<p className="SG-error">{errors.email}</p>)}
              </div>
              <div className="SG-signinpassword">
                <Input label='Password' type="password" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && (<p className="SG-error">{errors.password}</p>)}
              </div>
              <div className="SG-footer">
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