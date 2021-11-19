import React, { useEffect, useState } from 'react'
import './videoHorizontal.scss'
import request from "../../api"
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'


const VideoHorizontal = ({ video }) => {

    const { id,
        snippet: {
            channelId,
            channelTitle,
            description,
            title,
            publishedAt,
            thumbnails: { medium } }
    } = video

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    useEffect(() => {
        const get_video_details = async () => {
            const {
                data: { items },
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: id.videoId,
                },
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    }, [id])

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    return (
        <Row className="videoHorizontal m-1 py-1 align-items-center">
            <Col xs={6} md={4} className='videoHorizontal-left'>
                <LazyLoadImage src={medium.url}
                    effect='blur'
                    className='videoHorizontal-thumbnail'
                    wrapperClassName='videoHorizontal-thumbnail-wrapper' />
                <span className='video-top-duration'>{_duration}</span>
            </Col>
            <Col xs={6} md={8} className='videoHorizontal-right p-0'>
                <p className='videoHorizontal-title mb-1'> {title}</p>
                <div className='videoHorizontal-details'>

                    {numeral(views).format('0.a')} Views •

                    {moment(publishedAt).fromNow()}
                </div>
                <div className='videoHorizontal-channel d-flex align-item-center my-1'>
                    <p>{channelTitle}</p>
                </div>
            </Col>
        </Row >
    )
}

export default VideoHorizontal
