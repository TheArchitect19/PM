import React, { useState } from "react";
import './Dashboard.css'

// name, email, isd, phone, address, designation, change password
export const Dashboard = () => {
  const profilePIcDefault =
    "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container content mt-10">
        <h5 className="mb-3"> 📝 Add New User</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">
                Phone Number
              </label>
              <input
                type="telephone"
                className="form-control"
                id="exampleInputPhone"
                aria-describedby="emailHelp"
              />
            </div>
            
            
            
            {/* radios button inpput ================== */} 
            
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I Acept Terms And Conditions
              </label>
            </div>
            
          </div>
          {/* col-md-6 ends */}

          <div className="col-md-4 ">
            <div className="profile_section">
            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">
                Designation
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputDesignation"
                aria-describedby="emailHelp"
              />
            </div>

              <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAddress"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Change Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            </div>
            <div className="mb-3">
              
            </div>
          </div>
          <button
              type="submit"
              className="form__submit-btn btn-sm "
              onClick={handleSubmit} 
            >
              Submit
            </button>
        </div>
        
      </div>
    </>
  );
};

