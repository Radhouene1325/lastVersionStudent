
import ReadMoreReact from 'read-more-react';

import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { FiCornerDownRight } from "react-icons/fi"

import {deletePost, Dislike, GetPostbyid, getPosts, idPost,  Like } from '../../features/posts/postsSlice';

import { Menu, Dropdown } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { AuthContext } from '../../context/AuthContext';

import Pagination from "./PaginationPaage";

import { AllComments, comt, creatComment, createReponce, deletComment, deletecomt, getByiDcOMMENT, getCommentaire, openrep, repcommente, repondreCommtaire, selectChangedPost, ShowAllComments, showComments, showCommentsStatus } from '../../features/Comment/commentSlice';


import React, { useContext, useEffect, useRef, useState } from "react";


import {selectloginstatus } from '../../features/authentification/authSlice';

import { SouCommentaireResponsive } from './soucommentaireResponsive';
import InsideComments from './insideComments';
import LastComment from './LastComment';
import PublicationPost from './PublicationPost';
import UpdateComment from './UpdateComment';
import WriteCommentaire from './WriteCommentaire';
import "./cssformie/poste.css"

export const LastCommentContext = React.createContext()
export const PostContext = React.createContext()
export const updateCommetsContext = React.createContext()
export const CoometaireContext = React.createContext()

export default function Posts({ post }) {

    const [afiche, setAfiche] = useState(false)
    const openComent = useSelector(openrep)
    console.log(openComent)
    const [update, setUpdate] = useState(false)
    const [commentOpen, setCommentOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('bottom');
    const [loading, setLoading] = useState(true);
    const [sup, setSup] = useState(false)
    const[input,setInput]=useState(false)
    console.log(sup)
    const [placeHolder, setPlaceHolder] = useState(false)
    const [pagine, setPagine] = useState(false)

    const aficheTime = (checked) => {
        setTimeout(() => {
            setLoading(checked);

        }, 2000);
    };

    const showDrawer = () => {
        setOpen(true);
    };
    const onChange = (e) => {
        setPlacement("bottom");
    };

    const user = useContext(AuthContext)
    console.log(user)
    const connect = useSelector(selectloginstatus)
    console.log(connect)
    const dispatch = useDispatch()
    const menu = (
        <Menu>
            <Menu.Item onClick={() => dispatch(deletePost(post._id))} icon={<DeleteOutlined />} danger>delete</Menu.Item>
        </Menu>
    );
    const More = () => {
        return (
            <>
                <span style={{ cursor: "pointer", fontSize: "14px", color: "lightgrey" }} >...more</span>
            </>
        )
    }

    /***************fonction permette decrire une publication (post)*********** */
    setTimeout(() => {
        setPagine(false)
    }, 500000);
    const [commentaire, setCommentaire] = useState({
        text:''
    })

    const comment = useSelector(selectChangedPost)
    console.log(comment)
    console.log(commentaire)
    let data = {
        text: commentaire.text,
        post: post._id,
        user: user.user._id

    }
    console.log(data)
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (data.text.trim().length !== 0) {

                dispatch(creatComment(data))
                dispatch(getPosts())
                setInput(true)
                setPlaceHolder(true)


            } else {
                e.preventDefault()

            }

        }

    };



    const refdiv = useRef(null)
    useEffect(() => {
        if (pagine === true) {
            return (refdiv.current?.scrollIntoView({ behavior: 'smooth' }))
        }

    }, [pagine])




 

    /***********fonction permette de crier un commentaire********************************* */
    const [reponce, setReponce] = useState({
        text: ""

    })
    console.log(reponce)

    const index = {
        text: reponce.text,
        user: user.user._id,
        comment: openComent.idcmt,
    }
    console.log(index)
    const handleKeyDownrep = (event) => {
        if (event.key === "Enter") {
            if (index.text.trim().length !== 0) {
                console.log("chapnt  not vide")
                dispatch(createReponce(index))
                dispatch(getPosts())
                setSup(true)
                setPlaceHolder(true)

                return true
            } else {
                event.preventDefault()
                setPlaceHolder(false)


                return false
            }
        }
    };
    /*******************************************end**** */

    const reponseCommentaire = useSelector(repcommente)
    console.log(reponseCommentaire)
    const repondre = (id) => {
        dispatch(getByiDcOMMENT(id))

    }

    /*****************getpostById */
    const getPostByID = (id) => {
        dispatch(GetPostbyid(id))
    }

    const idpost = useSelector(idPost)
    console.log(idpost)
    /************************/
    /******* get the last commentaire to all post****** */
    const last = post.comments[post.comments.length - 1]
    console.log(last)

    /***********end************* */


    const props = {
        ReadMoreReact,
        post, aficheTime, setReponce, reponce, handleKeyDownrep, dispatch, getByiDcOMMENT,
        loading, openComent, More, moment, sup, setSup, placeHolder, user, refdiv, repondre
    }

    //display the last comment in first render 
    const lastComment = { post,setAfiche, setCommentaire, commentaire, sup, handleKeyDown, setSup, refdiv, pagine, last, post, openComent, ReadMoreReact, More, showDrawer, repondre, onChange, afiche, setAfiche, aficheTime, user, dispatch, getByiDcOMMENT, setPagine, setUpdate, moment, props, update }
    ///end


    /*****paramétre de creation de nouvelle publication post***** */

    const publicationPost = { post, moment, getPostByID, More, setPlaceHolder,user, Dislike, setCommentOpen, commentOpen, setPagine, pagine, Like, menu }
    /*************************end***************** */
    /************parametre input commentaire**************** */
    const parametreInputCommentaire = { user, input,placeHolder,refdiv, setCommentaire, commentaire, sup, setInput, handleKeyDown }
    /******************************** */

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = post.comments.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    /****************getpostId** */



    /**************end */

    /******getAll commments**** */
    useEffect(() => {
        dispatch(ShowAllComments())
    }, [dispatch])

    const comments_all = useSelector(AllComments)
    console.log(comments_all)

    /******** */


    return (
        <div className="post ">
        
            <PostContext.Provider value={publicationPost}>
                <PublicationPost />
            </PostContext.Provider>




            <>
                {/* //display the last comment in first render  */}
                <LastCommentContext.Provider value={lastComment}>
                    {!post.comments[0] ? null : <LastComment />}
                </LastCommentContext.Provider>
                {/* end */}






                {post.comments.length === 0 ?

                    /**********write comments (input comments)****** */
                    <CoometaireContext.Provider value={parametreInputCommentaire}>
                        {pagine === false && <WriteCommentaire />}
                    </CoometaireContext.Provider>
                    : pagine === true && <>
                        <CoometaireContext.Provider value={parametreInputCommentaire}>
                            <WriteCommentaire />
                        </CoometaireContext.Provider>
                        {/* end */}


                        <div className="comment" >
                            {/* <Pagination totalPosts={post.comments.length} postsPerPage={postsPerPage} paginate={paginate} /> */}

                            {post.comments.length === 0 ? null : post.comments

                                .map((c) => (
                                    <div>

                                        <div className="commentWrapper"   >
                                            <div style={{ position: "relative" }}>
                                                <img
                                                    className="commentProfileImg"
                                                    src={'http://localhost:4000/file/' + c.user.avatar}

                                                    alt=""
                                                />

                                            </div>
                                            <div className="commentInfo" style={{ postion: "relative" }}>

                                                {

                                                    update === false && afiche === true && c._id === openComent.idcmt ?
                                                     <div className="create__first">
                                                        {/*updateCommentaire   */}
                                                        <updateCommetsContext.Provider value={{ refdiv,getByiDcOMMENT,dispatch,post, user, setCommentaire, commentaire, handleKeyDown, openComent, c, setAfiche,afiche }}>
                                                            <UpdateComment />
                                                        </updateCommetsContext.Provider>


                                                        {/* end Update */}
                                                    </div> : <>
                                                        <div className='' style={{
                                                            maxWidth: "30rem",

                                                            backgroundColor: c._id === openComent.idcmt ? "#e7f3ff" : '#f0f2f5', padding: "11px",
                                                            marginTop: "21px", borderRadius: "30px 30px 30px 30px", wordBreak: "break-all"
                                                        }}>


                                                            <div>  <p style={{
                                                                color: "#212529",
                                                                fontStyle: " oblique",
                                                                fontSize: "0.9999rem",
                                                                fontWeight: " bold",
                                                                fontFamily: "serif"
                                                            }} >{c.user.name} {c.user.lastName} </p>
                                                            </div>

                                                            <div className="" style={{ marginTop: "-21px", marginBottom: "0em" }}    >
                                                                <ReadMoreReact text={c.text} min={200}
                                                                    ideal={400}
                                                                    max={450}
                                                                    readMoreText={<More />}
                                                                />
                                                            </div>
                                                        </div>
                                                        <p onClick={(() => { repondre(c._id); showDrawer(); onChange() })} className='block' variant="primary" >
                                                            repondre
                                                        </p>
                                                        <div style={{ marginTop: " 2px", marginBottom: "6px" }} className="resp">
                                                            <div className='d-flex  flex-direction-row'>
                                                                <p onMouseEnter={((e) => e.target.style.borderBottom = '1px solid red')} onMouseOut={((e) => e.target.style.borderBottom = 'none')} className='none' onClick={(() => { repondre(c._id); aficheTime(); setUpdate(true) })} style={{

                                                                    cursor: "pointer",
                                                                    fontSize: "smaller",
                                                                    width: "fit-content",
                                                                    color: c._id === c._id ? "blue" : null
                                                                }}>repondre</p>

                                                                {c.user._id === user.user._id ? <p onMouseEnter={((e) => e.target.style.borderBottom = '1px solid red')} onMouseOut={((e) => e.target.style.borderBottom = 'none')} className=''
                                                                    onClick={(() => { dispatch(getByiDcOMMENT(c._id)); setUpdate(false); setAfiche(true) })}
                                                                    style={{ cursor: "pointer", fontSize: "smaller", marginLeft: "14px", width: "fit-content", color: c._id === c._id ? "blue" : null }}>modifier</p> : null}
                                                                <span onMouseEnter={((e) => e.target.style.borderBottom = '1px solid red')} onMouseOut={((e) => e.target.style.borderBottom = 'none')} style={{ fontSize: "xx-small", marginLeft: "14px", paddingTop: "6px" }}>{moment(c.createdAt).fromNow()}</span>
                                                            </div>
                                                            {c.insidecom.length === 0 ? null : <span style={{ cursor: "pointer" }} onClick={(() => { repondre(c._id); aficheTime(); setUpdate(true) })}><FiCornerDownRight />  {c.insidecom.length} réponses </span>}
                                                        </div>
                                                    </>}
                                            </div>
                                        </div>

                                        {/* partie insideComent reponsive en coure */}
                                        {
                                            c._id === openComent.idcmt ?
                                                <SouCommentaireResponsive props={props} c={c} placement={placement} setOpen={setOpen} open={open}
                                                />
                                                : null
                                        }

                                        {/* end */}



                                        {/* repondre au commentaire insideComment  */}

                                        < div >
                                            <div className="none" style={{ marginTop: "-1rem" }}>
                                                {update === true && c._id === openComent.idcmt ?
                                                    <>
                                                        <InsideComments props={props} c={c} />


                                                    </>
                                                    : null}
                                            </div>

                                        </div>
                                        {/* end */}



                                    </div>
                                )
                                )


                            }

                        </div>

                    </>}


            </>



        </div >
    );
};


