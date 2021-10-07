import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesBar from '../../components/categoriesBar/categoriesBar'
import Video from '../../components/video/video'
import { getPopularVideos } from '../../redux/videos/videos.actions'


const Homepage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())

    }, [dispatch])

    const { videos } = useSelector(state => state.homeVideosReducer)



    return (
        <div>
            <CategoriesBar />
            <Container>
                <Row>
                    {videos ?
                        videos.map((video) => (
                            <Col lg={3} md={4} key={video.id}>
                                <Video video={video} />
                            </Col>
                        )) : null}
                </Row>

            </Container>
        </div>
    )
}

export default Homepage
