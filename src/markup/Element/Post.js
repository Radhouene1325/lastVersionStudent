import React from 'react'


import { Button, Result } from 'antd';


import 'antd/dist/antd.css';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { creatPost, getPosts, imageToPost, posteLike, selectadd, selectPosts, uploadImagePost } from '../../features/posts/postsSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import Posts from './Posts';
import CreatePost from './createNowPost';
import { addcomstatus, commentaireupadte, repcommente } from '../../features/Comment/commentSlice';

function Post() {


    const likePost=useSelector(posteLike)
    console.log(likePost)

    const { user } = useContext(AuthContext)
    console.log(user)
    const imagePost=useSelector(imageToPost)
    console.log(imagePost)

    const dispatch = useDispatch()
    const [postText, setpostText] = useState('')

    console.log(postText)
    const posts = useSelector(selectPosts)
    console.log(posts)
   
    const add = useSelector(selectadd)
    console.log(add)
    const handlepostimage = (e) => {
   
        const datafile = new FormData()
        datafile.append('image', e.target.files[0])
        dispatch(uploadImagePost(datafile))
    }

    
    let data = {
        text: postText,
        user: user._id,
        image: imagePost===undefined?<>log...err</>:imagePost.filename
    }
    console.log(data)
    const handelClick=()=>{
        dispatch(creatPost(data))
        
    }


    const comment = useSelector(addcomstatus)
    console.log(comment)
    const reponseCommentaire = useSelector(repcommente)
    console.log(reponseCommentaire)

    useEffect(() => {
        if (comment) {

            dispatch(getPosts())
        } else {
            dispatch(getPosts())
        }



    }, [dispatch, likePost, add, comment])

    useEffect(() => {
        if (reponseCommentaire) {
            dispatch(getPosts())
        }
    }, [dispatch, reponseCommentaire])

    return (

        <div class="col-lg-12 show-up wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.3s">
            <div className="d-flex ">
                <div className="  col-lg-12  col-md-10"  >
                    <CreatePost user={user} setpostText={setpostText} postText={postText} handlepostimage={handlepostimage} handelClick={handelClick}/>
                   

                </div>
            </div >
           
            {
                posts.length===0 ?   <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                
              /> : posts.map((post, i) => <Posts key={post._id} post={post} />)
            }
           
        </div>
    )
}

export default Post;




