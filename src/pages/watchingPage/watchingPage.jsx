import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Comments from '../../components/comments/comments'
import VideoData from '../../components/videoData/videoData'
import VideoHorizontal from '../../components/videoHorizontal/videoHorizontal'
import { getVideoById } from '../../redux/videos/videos.actions'
import './watchingPage.scss'



const WatchingPage = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideoById(id))
    }, [dispatch, id])

    return <Row>
        <Col lg={8}>
            <div className='watchpage-player'>
                <iframe src={`https://www.youtube.com/embed/${id}`}
                    title='my video'
                    frameBorder='0'
                    allowFullScreen
                    width="100%"
                    height='100%'
                >
                </iframe>
            </div>
            <VideoData />
            <Comments />
        </Col>

        <Col lg={4}>

            {

                [...Array(10)].map(() => <VideoHorizontal />)
            }
        </Col>
    </Row >
}

export default WatchingPage
