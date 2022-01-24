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
    username: "",
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
  const v_username = 'test';
  const v_email = 'test@values.com';
  const v_password = 'test12345';
  const handlebtnClick = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    console.log(values);
    if(values.username !== v_username && values.email !== v_email && values.password !== v_password){
      
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
              <div className="SG-username">
                <Input label="Username" type="text" name="username" value={values.username} onChange={handleChange}/>
                {errors.username && (<p className="SG-error">{errors.username}</p>)}
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