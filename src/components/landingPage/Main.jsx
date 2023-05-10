import React from 'react'
import './Main.css'
import {Link} from 'react-router-dom'

const Main = () => {
    return (
        <div className='center'>
        <div className="content">
            <h2>Welcome to PopX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button>
                <Link className='signup' to={"/signup"}>Create Account</Link>
            </button>
            <button>
            <Link className='login' to={"/login"}>Already Registered? Login</Link>
            </button>
        </div>
    </div>
    )
}

export default Main;

