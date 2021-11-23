import React from 'react'
import { useParams } from 'react-router-dom'

const SearchingPage = () => {

    const { query } = useParams()

    console.log(query)
    return (
        <div>
            search
        </div>
    )
}

export default SearchingPage
