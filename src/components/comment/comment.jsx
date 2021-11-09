import React from 'react'
import './comment.scss'

import moment from 'moment'

const Comment = ({ comment }) => {

    const { authorDisplayName,
        authorProfileImageUrl,
        publishedAt,
        textDisplay } = comment

    return (
        <div className='comment p-2 d-flex'>
            <img src={authorProfileImageUrl}
                alt=''
                className='rounded-circle mr-3' />

            <div className='comment-body'>
                <p className='commet-header '>
                    {authorDisplayName} • {moment(publishedAt).fromNow()}
                </p>
                <p className='mb-0' >{textDisplay}</p>
            </div>
        </div>
    )
}

export default Comment
