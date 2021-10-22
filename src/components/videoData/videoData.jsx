import React from 'react'
import './videoData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'



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

                    <div>
                        <span className='mr-3'>
                            <MdThumbUp size={26} />{numeral(10000).format('0.a')}
                        </span>
                        <span className='mr-3'>
                            <MdThumbDown size={26} />{numeral(10000).format('0.a')}
                        </span>
                    </div>
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
            <div className='video-data-description'>
                <ShowMoreText
                    lines={3}
                    more='SHOW MORE'
                    less='SHOW LESS'
                    anchorClass='show-more-text'
                    expanded={false}
                >
                    Lorem ipsum dolor sit amet. Qui magni sunt ut esse repudiandae non voluptatibus voluptas ab consequatur voluptatem qui velit vero sit quas dolores ut numquam perferendis. In sint consequatur sit cumque nihil et praesentium molestias sed dolorem nisi. Aut quibusdam quaerat cum iusto autem et laboriosam iusto ad tempore quasi. Eos temporibus voluptatum ut internos voluptas vel earum corrupti et neque voluptate in aspernatur tenetur et nobis quidem non reiciendis culpa
                    Lorem ipsum dolor sit amet. Qui magni sunt ut esse repudiandae non voluptatibus voluptas ab consequatur voluptatem qui velit vero sit quas dolores ut numquam perferendis. In sint consequatur sit cumque nihil et praesentium molestias sed dolorem nisi. Aut quibusdam quaerat cum iusto autem et laboriosam iusto ad tempore quasi. Eos temporibus voluptatum ut internos voluptas vel earum corrupti et neque voluptate in aspernatur tenetur et nobis quidem non reiciendis culpa

                </ShowMoreText>
            </div>

        </div >
    )
}

export default VideoData
