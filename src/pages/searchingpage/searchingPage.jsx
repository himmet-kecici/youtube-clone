import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../../redux/videos/videos.actions'

const SearchingPage = () => {

    const { query } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideosBySearch(query))
    }, [query, dispatch])


    const { videos, loading } = useSelector(state => state.searchedVideos)
    return (
        <div>
            search
        </div>
    )
}

export default SearchingPage
