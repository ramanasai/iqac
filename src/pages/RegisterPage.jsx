import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import {auth} from '../fire';


const RegisterPage  =(props) => {
  const [srn, setSRN] = useState("");
  const [fullname, setname] = useState("");
  const [usermail, setusermail] = useState("");
  const [enterpassword, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    const user = { srn, fullname, usermail, enterpassword, confirmpassword };
    // check for empty fields
    if (!srn || !fullname || !usermail || !enterpassword || !confirmpassword) {
      setError("Please enter all fields");
      setTimeout(() => {
        
      }, 3000);
    }
    // check if password and confirm password are same
    else if (enterpassword !== confirmpassword) {
      setError("Passwords do not match");
    }
    // check if password is of minimum length 6
    else if (enterpassword.length < 6) {
      setError("Password should be of minimum 6 characters");
    }
      // CHECK FOR SRN VALIDATION
    else if (srn.length < 13) {
      // regexp for PES1PG21CA054
      if (RegExp(/^PES[0-9]{1}[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/).test(srn)) {
        setError("Invalid SRN");
      }
      setError("SRN should be of 13 characters");
    }
    else {
      try {
        const res = await auth.createUserWithEmailAndPassword(usermail, enterpassword);
        console.log(res);
      } catch (err) {
        setError(err.message);
      }
    }
  };
    return (
      <div className="container flex bg-violet-500 content-center justify-center text-white w-auto h-auto top-10 mt-40 p-20 rounded-lg">
        {/* display the errors from handelsubmit */}
        

        <form>
          {error && <p className="text-white  bg-black p-2">{error}</p>}
        <h3>Sign Up</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control w-[80%] h-10"
            placeholder="Full name"
              value={fullname}
              onChange={(e) => setname(e.target.value)}
                      />
        </div>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder="SRN"
              value={srn}
              onChange={(e) => setSRN(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
              value={usermail}
              
              onChange={(e) => setusermail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
              value={enterpassword}
              onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          </div>
          
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in" className='text-white '>sign in?</a>
        </p>
        </form>
        {/* display the errors */}
        {/* <div className="text-red-500">
          {this.state.errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div> */}
      </div>

    )
}

export default RegisterPage;