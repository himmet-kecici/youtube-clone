import React from 'react'
import './videoHorizontal.scss'
import request from "../../api"
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
const VideoHorizontal = () => {


    const seconds = moment.duration('100').asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    return (
        <Row className="videoHorizontal m-1 py-1 align-items-center">
            <Col xs={6} md={4} className='videoHorizontal-left'>
                <LazyLoadImage src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    effect='blur'
                    className='videoHorizontal-thumbnail'
                    wrapperClassName='videoHorizontal-thumbnail-wrapper' />
                <span className='video-top-duration'>{_duration}</span>
            </Col>
            <Col xs={6} md={8} className='videoHorizontal-right p-0'>
                <p className='videoHorizontal-title mb-1'> lorem ipsum dolor sit amet</p>
                <div className='videoHorizontal-details'>

                    {numeral(1000000).format('0.a')} Views •

                    {moment('2021-06-0').fromNow()}
                </div>
                <div className='videoHorizontal-channel d-flex align-item-center my-1'>
                    <p>channel name </p>
                </div>
            </Col>
        </Row >
    )
}

export default VideoHorizontal
