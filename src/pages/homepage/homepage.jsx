import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import CategoriesBar from '../../components/categoriesBar/categoriesBar'
import Video from '../../components/video/video'
import { getPopularVideos } from '../../redux/videos/videos.actions'


const Homepage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularVideos())

    }, [dispatch])


    return (
        <div>
            <CategoriesBar />
            <Container>
                <Row>
                    {
                        [...new Array(20)].map(() => (
                            <Col lg={3} md={4}>
                                <Video />
                            </Col>
                        ))}
                </Row>

            </Container>
        </div>
    )
}

export default Homepage
