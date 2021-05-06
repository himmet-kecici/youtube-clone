import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../components/categoriesBar/categoriesBar'
import Video from '../../components/video/video'
const Homepage = () => {
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
