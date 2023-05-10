import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='signup-center'>
            <div className="signup-content">
                <form action="">
                    <h2>Create your </h2>
                    <h2>PopX account</h2>
                    <div className='wrapper'>
                        <label htmlFor="text">Full Name</label>
                        <input type="text" name="" id="text" placeholder='Marry Doe' />
                    </div>
                    <div className='wrapper'>
                        <label htmlFor="number">Phone Number</label>
                        <input type="number" name="" id="number" placeholder='Marry Doe' />
                    </div>
                    <div className='wrapper'>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="" id="email" placeholder='Marry Doe' />
                    </div>
                    <div className='wrapper'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="password" placeholder='Marry Doe' />
                    </div>
                    <div className='wrapper'>
                        <label className='star' htmlFor="companyname">Company Name</label>
                        <input type="companyname" name="" id="companyname" placeholder='Marry Doe' />
                    </div>
                    <div className='radio'>
                        <p>Are you an Agency?</p>
                        <span>
                        <input type="radio" name="agency" value="radio1" checked /> <small>Yes</small>
                        <input type="radio" name="agency" value="radio2" /> <small>No</small>
                        </span>
                    </div>
                    <button>
                        <Link to={"/profile"}>Create Account</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp