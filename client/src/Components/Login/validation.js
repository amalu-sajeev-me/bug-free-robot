function validation(values) {

    let errors = {};

    if(!values.fullname){
        errors.fullname="Name is required."
    }else if(values.fullname==='test'){
    }else if(values.fullname !== 'test'){
        errors.fullname='hmm... somethings wrong!!'
    }
    if(!values.firstName){
        errors.firstName="Firstname is required."
    }
    if(!values.lastName){
        errors.lastName="Lastname is required."
    }
    if(!values.email){
        errors.email="Email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }else if(values.email==='test@gmail.com'){
    }else if(values.email !=='test@gmail.com'){
        errors.email='Email is not matching'
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
    }else if(values.password==='test12345'){
    }else if(values.password !== 'test12345'){
        errors.password='Password is not matching'
    }
    if(!values.Confrimpassword){
        errors.Confrimpassword="Password is required"
    }else if(values.password !== values.Confrimpassword){
        errors.password="Password is not matching."
    }
    return errors;

}

export default validation