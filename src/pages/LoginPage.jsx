import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../fire';
import { useState } from 'react';
// import firebase from 'firebase/compat';
import "firebase/compat/auth";

const LoginPage =()=> {
  const[ srn, setSRN] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { srn, password };
    // check for empty fields
    if (!srn || !password) {
      setError("Please enter all fields");
      setTimeout(() => {
      }, 3000);
    }
    else if (password.length < 6) {
      setError("Password should be of minimum 6 characters");
    }
    else if (srn.length < 13) {
      if (RegExp(/^PES[0-9]{1}[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/).test(srn)) {
        setError("Invalid SRN");
      }
      setError("SRN should be of 13 characters");
    }
    else {
      try {
        console.log('H');
        await auth.signInWithEmailAndPassword(srn.trim(), password).then((userCredential) => {
          var user = userCredential.user;
          // redirect to home page
          console.log('login')
          window.location.href = "/";
        })
      } catch (err) {
        setError(err.message);
      }
    }
  };


      return (
        <div className='flex items-center justify-center text-center bg-violet-400 m-10 top-10 '>
          <form className=' p-10 text-white w-[50%]'>
          {error && <p className='text-white bg-black p-4'>{error}</p>}
            
        <h3>Sign In</h3>
        <div className="mb-3">
          <input
            type="mail"
            className="form-control"
            placeholder="Enter Email"
                value={srn}
                onChange={(e) => setSRN(e.target.value)}
              />
              {/* <p>
              <small>
                <i>
                  SRN should be in the format PES1PG21CA001
                </i>
              </small>
            </p> */}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* show the dynamic output */}
              
        </div>
        
        <div className="d-grid">
            <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <Link to='/forgot-password'>password?</Link>
            </p>
              </form>
    </div>
    )
}


export default LoginPage;