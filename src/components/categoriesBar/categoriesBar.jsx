import React, { useState } from 'react'
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

    console.log(activeElement)

    return (
        <div className='categories-bar'>
            {keywords.map((item, index) => <span
                onClick={() => setActiveElement(item)}
                className={activeElement === item ? 'active' : ''}
                key={index}>{item}</span>)}
        </div>
    )
}

export default CategoriesBar
