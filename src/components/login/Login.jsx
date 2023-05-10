import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className='login-center'>
            <form action="">
            <div className="login-content">
                <h2>Signin to your </h2>
                <h2>PopX account</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className='wrapper'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="" id="email" placeholder='Enter email address' />
                </div>
                <div className='wrapper'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" placeholder='Enter password' />
                </div>
                <button>
                <Link to={"/profile"}>Login</Link>
                </button>
            </div>
            </form>
        </div>
    )
}

export default Login