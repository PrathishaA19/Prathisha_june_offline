import React from 'react';
import './sign.css';
import phone from '/phone.jpeg';
import google from '/google.jpeg';
import apple from '/apple.png';
import microsoft from '/microsoft.png';
export default function sign(){
    return(
        <div style={{padding:'100px' , textAlign:"center"}}>
        <h1>Welcome Back!!!!</h1>
        <input  className='email' type='email' placeholder='Enter email'></input><br />
        <button className='continue'> Continue</button>
        <h3>Don't have an account?</h3>
        <h4 className='signup'>Sign up</h4>
        <h3>OR</h3>
        <button className='phone'><img  src={phone} width={25} height={25}></img>continue with phone</button><br />
        <button className='google'><img  src={google} width={25} height={25}></img> continue with google</button><br />
        <button className='micro'><img  src={microsoft} width={25} height={25}></img> continue with microsoft</button><br />
       <button className='apple'><img  src={apple} width={25} height={25}></img> continue with apple</button> 
        </div>
);
}