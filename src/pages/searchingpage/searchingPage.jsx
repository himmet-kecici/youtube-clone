import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import VideoHorizontal from '../../components/videoHorizontal/videoHorizontal'
import { getVideosBySearch } from '../../redux/videos/videos.actions'

const SearchingPage = () => {

    const { query } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideosBySearch(query))
    }, [query, dispatch])


    const { videos, loading } = useSelector(state => state.searchedVideos)
    return (
        <Container>
            {

                !loading ? (
                    videos?.map(video => <VideoHorizontal video={video} key={video.id.videoId} searchingPage />)
                ) : (
                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                        <Skeleton width="100" height="200px" count={20} />
                    </SkeletonTheme>
                )
            }
        </Container>
    )
}

export default SearchingPage
