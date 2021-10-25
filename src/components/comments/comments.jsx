import React from 'react'
import './comments.scss'
import Comment from '../comment/comment'

const Comments = () => {

    const handleComment = () => {

    }

    return (
        <div className='comments'>
            <p>234234 comments</p>
            <div className='comment-form d-flex w-100 my-2'>
                <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    alt=""
                    className='rounded-circle mr-3 '
                />
                <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                    <input type='text' className='flex-grow-1' placeholder='WriteAComment' />
                    <button className='border-0 p-2'>comment</button>
                </form>
            </div>

            <div className='comments-list'>
                {[...Array(15)].map(() => (
                    <Comment />
                ))}
            </div>
        </div>
    )
}

export default Comments
