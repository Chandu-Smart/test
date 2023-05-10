import React from 'react'
import './Profile.css'
import logo from '../../../src/logo.svg'

const Profile = () => {
    return (
        <div>
            <div className="profile">
                <div className="profile-content">
                    <p className='account'>Account Settings</p>
                    <div className="profile-image-name">
                        <div className="profile-image">
                            <img src={logo} alt="" />
                            <i class="fa-solid fa-camera"></i>
                        </div>
                        <div className="profile-name">
                            <h4>Marry Doe</h4>
                            <span>Marry@Gmail.com</span>
                        </div>
                    </div>
                    <div className='profile-text'>
                       <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus asperiores error ut quisquam, quae illo maxime quibusdam saepe .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile