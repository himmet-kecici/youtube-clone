import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesBar from '../../components/categoriesBar/categoriesBar'
import Video from '../../components/video/video'
import { getPopularVideos } from '../../redux/videos/videos.actions'
import InfiniteScroll from 'react-infinite-scroll-component'

const Homepage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())

    }, [dispatch])

    const { videos } = useSelector(state => state.homeVideos)

    const fetchData = () => {
        dispatch(getPopularVideos())
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
                        <div className="spinner-border text-danger d-block mx-auto">

                        </div>
                    }
                >
                    <Row>
                        {videos.map((video) => (
                            <Col lg={3} md={4} key={video.id}>
                                <Video video={video} />
                            </Col>
                        ))}
                    </Row>
                </InfiniteScroll>
            </Container>
        </div >
    )
}

export default Homepage
