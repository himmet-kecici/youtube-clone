import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/auth.actions'
import './loginpage.scss'


const Loginpage = () => {

    const dispatch = useDispatch()

    const handleLogin = () => {
        console.log('start onclick')
        dispatch(login())
    }

    return (
        <div className="login">
            <div className='login-container'>
                <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt="" />
                <button onClick={handleLogin}>login with google</button>
                <p>youtube DATA API</p>
            </div>
        </div>
    )
}

export default Loginpage
