import React from 'react'
import moment from 'moment'

const Comment = () => {
    return (
        <div className='comment p-2 d-flex'>
            <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                alt=''
                className='rounded-circle mr-3' />

            <div className='comment-body'>
                <p className='commet-header'>
                    | name surname • {moment('2021-09-09').fromNow()}
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur...</p>
            </div>
        </div>
    )
}

export default Comment
