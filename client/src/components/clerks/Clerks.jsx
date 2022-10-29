import React, { useState, useEffect } from 'react'
// import '../../../App.css'
// import Spinner from '../../common/spinner/Spinner'
// import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Grid from '@mui/material/Grid'
// import clerkAnalytics from '../analytics/clerkAnalytics';
// import { DataGrid } from '@mui/x-data-grid';



const ClerkForm = () => {
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password_digest: '',

  })

  const [clerks, setClerks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    createClerk();
    console.log(formData);
  }

  //function adding clerk
  const createClerk = (data) => {
    fetch("/clerks", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        
    })
  }
  
  //handling form field state
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
 
//fetch clerks
  useEffect(() => {
    fetch("http://localhost:3000/clerks")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      setClerks(data)
    })
  }, [])
  
  return (
    <>
    <Grid item xs={8}>
      <div className='container'>
        <div className="row mt-5">
            <div className="col-md-6">
              <button className='btn btn-success my-3' data-bs-toggle="modal"  data-bs-target='#form-modal'>Add Clerk</button>
          </div>
          <div className="col-md-6">
          <h3 className='my-3 '>Clerks</h3>
          </div>
        </div>

      <div className="modal" id="form-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title ">New Clerk</h3>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
    
            <div className="modal-body">
            <form action="" onSubmit={handleSubmit}>
                <div className="row">
                <div className="col">
                    <input type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={(e) => handleChange(e)}
                      placeholder='full name'
                      className="form-control"
                    />
                  </div>
                  
                  <div className="col">
                    <input type="text"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange(e)}
                      placeholder='email'
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  
                  <div className="col">
                    <input type="password"
                      name="password_digest"
                      value={formData.password_digest}
                      onChange={(e) => handleChange(e)}
                      placeholder='password'
                      className="form-control"
                    />
                  </div>

                  <div className="col">
                        <input type="submit"
                        className="btn btn-primary btn-block form-control mt-2"
                    />
                  </div>
          
                </div>
              </form>
            </div>
            {/*modal footer */}
            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>

      </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-2">
              <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Deactivate</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clerks && clerks.map((clerk) => (
            <tr key={clerk.id}>
              <td>{clerk.fullname}</td>
              <td>{clerk.email}</td>
              <td><button className='btn btn-primary'>Deactivate</button></td>
              <td><button className='btn btn-danger'>Delete</button></td>
          </tr>
        ))}
        </tbody>
      </table>
              </div>
            </div>     
          </div> 
      </div>
      </Grid>  
      </>
  )
}

export default ClerkForm;