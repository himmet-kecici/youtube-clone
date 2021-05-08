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
    'music'

]

const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All')

    console.log(activeElement)

    return (
        <div className='categories-bar'>
            {keywords.map((item, index) => <span
                className={activeElement === item ? 'active' : ''}
                onClick={() => setActiveElement(item)}
                key={index}>{item}</span>)}
        </div>
    )
}

export default CategoriesBar
