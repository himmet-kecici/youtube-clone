import React, { useEffect } from 'react'
import './comments.scss'
import Comment from '../comment/comment'
import { useDispatch, useSelector } from 'react-redux'
import { getCommentsOfVideoById } from '../../redux/comments/comments.actions'

const Comments = ({ videoId }) => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getCommentsOfVideoById(videoId))

    }, [videoId, dispatch])

    const comments = useSelector(state => state.commentsList.comments)

    const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet)

    const handleComment = () => { }

    return (
        <div className='comments'>
            <p>234234 comments</p>
            <div className='comments-form d-flex w-100 my-2'>
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
                {_comments?.map((comment, i) => (
                    <Comment comment={comment} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Comments
