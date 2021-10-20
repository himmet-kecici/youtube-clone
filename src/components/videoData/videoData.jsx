import React from 'react'
import './videoData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'


const VideoData = () => {
    return (
        <div className='video-data py-2'>
            <div className='video-data-top'>
                <h5>video title </h5>
                <div className='d-flex justify-content-between align-items-center py-1'>
                    <span>
                        {numeral(10000).format('0.a')} Views •
                        {moment('2021-10-10').fromNow()}
                    </span>
                </div>
                <div>
                    <span>
                        <MdThumbUp size={26} />{numeral(10000).format('0.a')}
                    </span>
                    <span>
                        <MdThumbDown size={26} />{numeral(10000).format('0.a')}
                    </span>
                </div>
            </div>
            <div className='video-data-channel d-flex justify-content-between align-items-center my-2 py-3'>
                <div className='d-flex'>
                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                        alt=""
                        className='rounder-circle mr-3' />
                    <div className='d-flex flex-column'>
                        <span>Channel name</span>
                        <span>{numeral(10000).format('0.a')} subscribers</span>
                    </div>
                </div>
                <button className='btn border-0 p-2 m-2'>Subscribe</button>
            </div>
            <div className='video-data-description'></div>

        </div>
    )
}

export default VideoData
