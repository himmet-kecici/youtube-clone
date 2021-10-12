import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/videos/videos.actions'
import './categoriesBar.scss'
const keywords = [

    'All',
    'computer science',
    'javascript',
    'css',
    'html',
    'react',
    'redux',
    'basketball',
    'music',
    'drum',
    'guitar',
    'Rock',
    'Rap',
    'ambience',
    'popular',
    'trend',
    'premium',
    'sport',
    'movie trailer'

]

const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All')
    const dispatch = useDispatch()

    const handleClick = (value) => {
        setActiveElement(value)
        if (value === 'All') {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(value))
        }
    }




    return (
        <div className='categories-bar'>
            {keywords.map((item, index) => <span
                onClick={() => handleClick(item)}
                className={activeElement === item ? 'active' : ''}
                key={index}>{item}</span>)}
        </div>
    )
}

export default CategoriesBar
