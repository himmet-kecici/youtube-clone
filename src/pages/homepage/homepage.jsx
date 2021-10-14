import React, { useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesBar from '../../components/categoriesBar/categoriesBar'
import Video from '../../components/video/video'
import { getPopularVideos, getVideosByCategory } from '../../redux/videos/videos.actions'
import InfiniteScroll from 'react-infinite-scroll-component'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const Homepage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())

    }, [dispatch])

    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === "All") {
            dispatch(getPopularVideos())
        }
        else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (

        <div>
            <Container>
                <CategoriesBar />
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className='spinner-border text-danger d-block mx-auto'></div>
                    }
                    className='row'>
                    {!loading
                        ? videos.map(video => (
                            <Col lg={3} md={4}>
                                <Video video={video} key={video.id} />
                            </Col>
                        ))
                        : [...Array(20)].map(() => (
                            <Col lg={3} md={4}>
                                <div style={{ width: '100%', margin: '1rem 0' }}>
                                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                                        <Skeleton height={180} />
                                        <div>
                                            <Skeleton
                                                style={{ margin: '0.5rem' }}
                                                circle
                                                height={40}
                                                width={40}
                                            />
                                            <Skeleton height={40} width='75%' />
                                        </div>
                                    </SkeletonTheme>
                                </div>
                            </Col>
                        ))}
                </InfiniteScroll>
            </Container>
        </div>
    )
}

export default Homepage