import React from 'react'
import './video.scss'

const Video = () => {
    return (
        <div className="video">
            <div className="video-top">

                <img src="https://i.ytimg.com/vi/DyvDXY1aAzA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjpnqIpRrltzJ0EcbXRi8N2HtCWQ" alt="" />
                <span>05:34</span>

            </div>
            <div className='video-container'>
                <div className='video-logo'>
                    <img
                        src='https://yt3.ggpht.com/a-/AOh14GixdVjxqi11Md_OCDd3K7SOQEhizq4f3EI_0g=s68-c-k-c0x00ffffff-no-rj-mo'
                        alt=''
                    />
                </div>
                <div className='video-items'>
                    <div className="container-title">

                        lorem ipsum dolor

            </div>
                    <div className="container-channel">

                        <p>Rainbow Hat Jr</p>
                    </div>
                    <div className="container-details">
                        <span>
                            3m Views •
            </span>
                        <span> 3 days ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
