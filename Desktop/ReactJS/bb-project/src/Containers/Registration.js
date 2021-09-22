import React from 'react'
import './Registration.css'

function Registration() {
    return (
        <section className='registration-page'>
            <div>
                <div class="card"  className='card-design'>
                    <div class="card-body">
                        <form>
                        <div className="form-group">
                            <label className='form-label' for="username">Name:</label>
                            <input className='form-input' type="text" id="name" name="name" />
                        </div>
                        <div className="form-group">
                            <label className='form-label' for="username">User-name:</label>
                            <input className='form-input' type="text" id="fname" name="fname" />
                        </div>
                        
                        <div className="form-group">
                            <label className='form-label' for="username">User-name:</label>
                            <input className='form-input' type="text" id="fname" name="fname" />
                        </div>
                        
                        <div className="form-group">
                            <label className='form-label' for="username">Password:</label>
                            <input className='form-input' type="password" id="fname" name="fname" />
                        </div>
                        
                        <div className="form-group">
                            <label className='form-label' for="username">Email:</label>
                            <input className='form-input' type="email" id="fname" name="fname" />
                        </div>
                        
                        <div className="form-group">
                            <label className='form-label' for="username">Contact Number:</label>
                            <input className='form-input' type="text" id="numbet" name="number" />
                        </div>
                        
                        <div className="form-group">
                            <label className='form-label' for="username">Blood Group:</label>
                            <input className='form-input' type="text" id="Blood-Group" name="Blood-Group" />
                        </div>
                        
                            
                          <button className="btn btn-large button-design" type="submit" >Register</button>  
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Registration
