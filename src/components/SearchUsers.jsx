import React from 'react'
import Navbar from './Navbar'

const SearchUsers = () => {
  return (
    <div>
      <Navbar/>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">User name</label>
                        <input type="text" className="form-control" placeholder="Enter the username" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-info">Search</button>
                    </div>
                </div>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default SearchUsers