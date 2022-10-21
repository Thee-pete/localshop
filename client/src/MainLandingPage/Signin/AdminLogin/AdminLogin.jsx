

import React, { useState }from 'react'
import { Link } from "react-router-dom"

const AdminLogin= ({setUser}) => {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch ("/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
          <input type="text"
                id="username"
                placeholder='username'
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
          />
           <input type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)} 
          />
           <p>
                Don't have account? <Link to='/register'> <br />Become a Member!</Link>
              </p>
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default AdminLogin