import React from 'react'

function validation(values) {

    let errors = {};

    if(!values.fullname){
        errors.fullname="Name is required."
    }
    if(!values.firstName){
        errors.firstName="Firstname is required."
    }
    if(!values.lastName){
        errors.lastName="Lastname is required."
    }
    if(!values.email){
        errors.email="Email is required."
    }else if(!/\s+@\s+\.\s+/.test(values.email)){
        errors.email="Email is invalid."
    }
    
    if(!values.dob){
        errors.dob="DOB is required"
    }else if(values.dob.length < 10){
        errors.dob="DOB must be valid."
    }else if(values.dob.length > 10){
        errors.dob="Please enter valid Dob."
    }
    if(!values.phone){
        errors.phone="Phone no. is required"
    }else if(values.phone.length < 13){
        errors.phone="Number must be valid."
    }
    if(!values.username){
        errors.username="Username is required."
    }
    if(!values.password){
        errors.password="Password is required"
    }else if(values.password.length < 8){
        errors.password="Password mus be atleast 8 Charachter"
    }
    if(!values.Confrimpassword){
        errors.Confrimpassword="Password is required"
    }else if(values.password != values.Confrimpassword){
        errors.password="Password is not matching."
    }
    return errors;

}

export default validation