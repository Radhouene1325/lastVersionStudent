import React from 'react'
import '../../css/comment.css'
import moment from 'moment'


export default ({comment}) => {
    return (
        <>
            <div className="comment">
                <img src={'http://localhost:4000/file/'+comment.user.avatar} alt="" />
                <div>

                    <div className="commentcontent">
                        <span>{comment.user.username}</span>
                        <p> {comment.text} </p>
                    </div>
                    <span style={{paddingLeft:"10px" , fontSize:"12px" , color:"lightgrey"  }} >{moment(comment.createdAt).fromNow()}</span>
                </div>
            </div>
        </>
    )
}