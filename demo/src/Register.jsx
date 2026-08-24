import React, { useState } from 'react'

function Register() {
    const [details,setDetails] = useState({
        username:'',
        email:'',
        password:''
    })
    console.log(details);

    const handleRegister = ()=> {
        const {username,email,password} =details  /* object destructering, or direct details.username is possible */
        alert(`User registered successsfully with username : ${username}, email ${email}, password : ${password} `)
    }
  return (
    <div className='d-flex justify-content-center align-items-center'>{/*  align-vertical */}
      <form className='m-5 p-4 shadow w-50'>
        <h3 className='text-center text-primary'>Register</h3>
        <div className='mb-3'>
            <input type="text" className='form-control' placeholder='Enter the username' onChange={(e)=>setDetails({...details,username:e.target.value})}/>
        </div>
         <div className='mb-3'>
            <input type="email" className='form-control' placeholder='Enter the email' onChange={(e)=>setDetails({...details,email:e.target.value})}/>
        </div>
         <div className='mb-3'>
            <input type="text" className='form-control' placeholder='Enter the password' onChange={(e)=>setDetails({...details,password:e.target.value})}/>
        </div>
         <div className='mb-3'>
            <button className='btn btn-primary' onClick={handleRegister}>Register</button>
        </div>

      </form>
    </div>
  )
}

export default Register