import React, { useEffect, useState } from 'react'
import './videoHorizontal.scss'
import request from "../../api"
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'


const VideoHorizontal = ({ video, searchingPage }) => {

    const { id,
        snippet: {
            channelId,
            channelTitle,
            description,
            title,
            publishedAt,
            thumbnails: { medium } }
    } = video

    const isVideo = id.kind === 'youtube#video'

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

    const history = useHistory()
    const handleClick = () => {
        isVideo ?
            history.push(`/watch${id.videoId}`)
            : history.push(`/channel${id.channelId}`)
    }

    const thumbnail = !isVideo && 'videoHorizontal-thumbnail-channel'
    return (
        <Row className="videoHorizontal m-1 py-1 align-items-center" onClick={handleClick}>
            <Col xs={6} md={searchingPage ? 4 : 6} className='videoHorizontal-left'>
                <LazyLoadImage src={medium.url}
                    effect='blur'
                    className={` videoHorizontal-thumbnail ${thumbnail}`}
                    wrapperClassName='videoHorizontal-thumbnail-wrapper' />

                {
                    isVideo &&
                    <span className='videoHorizontal-duration'>{_duration}</span>
                }
            </Col>
            <Col xs={6} md={searchingPage ? 8 : 6} className='videoHorizontal-right p-0'>
                <p className='videoHorizontal-title mb-1'> {title}</p>

                {
                    isVideo &&
                    <div className='videoHorizontal-details'>

                        {numeral(views).format('0.a')} Views •

                        {moment(publishedAt).fromNow()}
                    </div>
                }

                {
                    isVideo && <p className='mt-1'>
                        {description}

                    </p>
                }


                <div className='videoHorizontal-channel d-flex align-item-center my-1'>

                    {isVideo && (
                        <LazyLoadImage
                            src={channelIcon?.url}
                            effect='blurt'


                        />
                    )}
                    <p className='mb-0'>{channelTitle}</p>
                </div>
            </Col>
        </Row >
    )
}

export default VideoHorizontal
