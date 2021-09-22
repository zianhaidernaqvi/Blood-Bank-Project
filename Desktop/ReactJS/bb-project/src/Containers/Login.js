import React from 'react'
import './Login.css'
import donorImage from "../assets/donor.png";

function Login() {
    return (
        <section className='login-page'>

            <div>
                <div class="card" className='card-design'>
                    <div className='card-image'>
                        <img src={donorImage} />
                    </div>
                    <div class="card-body">
                        <form>
                            <div className="form-group row">
                                <label className='form-label col-md-4' for="username">User-name:</label>
                                <input className='form-input col-md-8' type="text" id="fname" name="fname" />
                            </div>
                            <div className="form-group row">
                                <label className='form-label col-md-4' for="password">Password:</label>
                                <input className='form-input col-md-8' type="text" id="fname" name="fname" />
                            </div>

                            <button className="btn btn-large button-design" type="submit" >Login</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Login
