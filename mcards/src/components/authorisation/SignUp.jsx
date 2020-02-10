import React, { useState } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom';



const SignUp = () => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [userInfo, setUserInfo] = useState({

    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/users/add', userInfo)
      .then(res => console.log(res.data))
    setRedirectToReferrer(true)


  }
  const page = (redirectToReferrer === true) ? (<Redirect to='/sign-in'></Redirect>) : (<div className="registration-from z-depth-3">
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="First Name" type="text" className="validate" onChange={handleChange} value={userInfo.first_name} name="first_name" />

          </div>
          <div className="input-field col s6">
            <input placeholder="Last Name" type="text" onChange={handleChange} value={userInfo.last_name} name="last_name" />

          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="email" type="email" onChange={handleChange} value={userInfo.email} name="email" />

          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Password" type="password" className="validate" onChange={handleChange} value={userInfo.password} name="password" />

          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <button type="submit" className="waves-effect waves-light btn">Apply</button>
          </div>
        </div>
      </form>
    </div>
  </div>)
  return (
    <>
      {page}
    </>
  )
}

export default SignUp;