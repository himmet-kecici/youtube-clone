import React, { useEffect, useState } from 'react'
import './comments.scss'
import Comment from '../comment/comment'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/comments/comments.actions'

const Comments = ({ videoId, totalComments }) => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getCommentsOfVideoById(videoId))

    }, [videoId, dispatch])

    const comments = useSelector(state => state.commentsList.comments)

    const [text, setText] = useState('')

    const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet)

    const handleComment = (e) => {
        e.preventDefault()
        if (text.length === 0) return;
        dispatch(addComment(videoId, text))
        setText('')
    }

    return (
        <div className='comments'>
            <p>{totalComments} comments</p>
            <div className='comments-form d-flex w-100 my-2'>
                <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    alt=""
                    className='rounded-circle mr-3 '
                />
                <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                    <input type='text' className='flex-grow-1' placeholder='WriteAComment' value={text} onChange={e => setText(e.target.value)} />
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
