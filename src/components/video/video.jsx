import React, { useEffect, useState } from 'react'
import './video.scss'
import request from "../../api"
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Video = ({ video }) => {

    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
        }
    } = video

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    const _videoId = id?.videoId || id;

    useEffect(() => {
        const get_video_details = async () => {
            const {
                data: { items },
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: _videoId,
                },
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    }, [_videoId])

    useEffect(() => {
        const get_channel_icon = async () => {
            const {
                data: { items },
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default)

        }
        get_channel_icon()
    }, [channelId])

    return (
        <div className="video">
            <div className="video-top">

                {  /*<img src={medium.url} alt="" />*/}
                <LazyLoadImage src={medium.url} effect='blur' />
                <span className='video-top-duration'>{_duration}</span>

            </div>
            <div className='video-container'>
                <div className='video-logo'>
                    { /* <img src={channelIcon?.url} alt=''/> */}
                    <LazyLoadImage src={channelIcon?.url} effect='blur' />

                </div>
                <div className='video-items'>
                    <div className="container-title">
                        {title}
                    </div>
                    <div className="container-channel">

                        <p>{channelTitle}</p>
                    </div>
                    <div className="container-details">
                        <span>
                            {numeral(views).format('0.a')} Views •
                        </span>
                        <span> {moment(publishedAt).fromNow()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
