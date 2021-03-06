import React, { useState } from 'react'
import './header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useHistory } from 'react-router'


const Header = ({ handleToggleSidebar }) => {

    const [input, setInput] = useState('')

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`search${input}`)
    }

    return (
        <div className="border border-dark header">
            <FaBars
                className='header-menu'
                size={26}
                onClick={handleToggleSidebar}
            />

            <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' className='header-logo' />

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='search' value={input} onChange={e => setInput(e.target.value)} />
                <button type='submit'>
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className='header-icons'>
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    alt='avatar'
                />
            </div>
        </div>
    )
}

export default Header
