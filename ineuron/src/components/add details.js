import React, { useState } from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
import  Axios  from "axios";
function AddDetails(){
    const [User,setUser]=useState({
        firstName:"",
        lastName:"",
        age:"",
        phoneNumber:""
    })
const navigate=useNavigate()
const handleForm=(e)=>{
    e.preventDefault()
    Axios.post("https://blue-journalist-bbrpv.ineuron.app:4000/user/create",User).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    navigate('/')
}
const handleFirstName =(e)=>{
    setUser({...User,firstName:e.target.value})
}
const handleLastName=(e)=>{
    setUser({...User,lastName:e.target.value})
}
const handleAge=(e)=>{
    setUser({...User,age:e.target.value})
}
const handlePhonenumber=(e)=>{
    setUser({...User,phoneNumber:e.target.value})
}
    return(
        <>
        <div className='form'>
        <label >firstName</label><br/>
       <input onChange={handleFirstName} value={User.firstName} placeholder='Enter your name'/><br/>
        <label>lastName</label><br/>
        <input onChange={handleLastName} value={User.lastName} placeholder='Enter your email-id'/><br/>
        <label >age</label><br/>
        <input  onChange={handleAge} value={User.age}placeholder='Enter your PhoneNumber'/><br/>
        <label >phoneNumber</label><br/>
        <input onChange={handlePhonenumber} value={User.phoneNumber} placeholder='Enter your PhoneNumber'/><br/>
        <button type='submit' onClick={handleForm}>submit</button>
        </div>
        </>
    )
}
export default AddDetails