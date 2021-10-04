import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux/auth/auth.actions'
import './loginpage.scss'


const Loginpage = () => {

    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    const history = useHistory()


    useEffect(() => {
        if (accessToken) {
            history.push('/')
        }

    }, [accessToken, history])

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
