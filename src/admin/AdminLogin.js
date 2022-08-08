import React, {useState} from 'react';
import './adminlogin.css';

function AdminLogin() {
    const [email, setEmail]=useState('');
    const [emailError, setEmailErorr]=useState('');

    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');

    
    
    const handleEmailChange=(e)=>{
      setEmailErorr('');
      setEmail(e.target.value);
    }
    
    const handlePasswordChange=(e)=>{
      setPasswordError('');
      setPassword(e.target.value);
    }
    const handleFormSubmit=(e)=>{
      e.preventDefault();
      
      if (email!==''){
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailRegex.test(email)){
          setEmailErorr('');
          if (email==='admin@mail.com') {
            setEmailErorr('');
            if (password==='admin2022') {
              window.location.href='/dashboard';
            }else{
              setPasswordError('Invalid Password not match with email');
            }
          }else{
            setEmailErorr('Email dose not match')
          }
        }
      else{
        setEmailErorr('Invalid Email ');
      }
      }else{
        setEmailErorr('Email Required');
      }

      if (password!==''){

      }else{
        setPasswordError('Password Required');
      }
}
    return(
      <> 
  
{/* <script src='back.js'></script> */}
<section >
          <br />
        <div className="login-wrapper ">
        
        
        <form className='form-group formm' onSubmit={handleFormSubmit}>
        <h1>Admin Login</h1>
          <label > Email </ label>
            <input type="text" className='form-control ' placeholder='Your Email' 
            onChange={handleEmailChange} value={email}/>
            {emailError&&<div className='error-msg'>{emailError}</div>}       

          <label >Password </label>
            <input type="password" className='form-control ' placeholder='Your Password'
            onChange={handlePasswordChange} value={password}/>
            {passwordError&&<div className='error-msg'>{passwordError}</div>}       
        <br/>
          <div>
            <button type="submit" className='btn-warning admin-btn' >Submit</button>
          </div>
          <br/>
        </form>
        </div>
       </section>
      </>
    );
   
    
}
export default AdminLogin;