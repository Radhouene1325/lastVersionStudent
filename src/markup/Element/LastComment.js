
import React, { useContext } from 'react'
import InsideComments from './insideComments'
import { LastCommentContext } from './Posts'
const LastComment = () => {
    const theLast = useContext(LastCommentContext)
    const { setAfiche, props, update, pagine, last, openComent, ReadMoreReact, More, showDrawer, repondre, onChange, aficheTime, user, dispatch, getByiDcOMMENT, setUpdate, moment } = theLast

    return (
        <div className='lastcomment'>
            {pagine === false &&
                <>
                 <div className="comment " style={{    display: "block"}}>
                        <div className="commentWrapper"   >
                            <div style={{ position: "relative" }}>
                                <img
                                    className="commentProfileImg"
                                    src={'http://localhost:4000/file/' + last.user.avatar}
                                    // src={c.data.photoURL}
                                    alt=""
                                />

                            </div>

                            <div className="commentInfo" style={{ postion: "relative" }}>
                                <div className='' style={{
                                    maxWidth: "30rem",

                                    backgroundColor: last._id === openComent.idcmt ? "#e7f3ff" : '#f0f2f5', padding: "11px",
                                    marginTop: "21px", borderRadius: "30px 30px 30px 30px", wordBreak: "break-all"
                                }}>


                                    <div>  <p style={{
                                        color: "#212529",
                                        fontStyle: " oblique",
                                        fontSize: "0.9999rem",
                                        fontWeight: " bold",
                                        fontFamily: "serif"
                                    }} >{last.user.name} {last.user.lastName} </p></div>

                                    <div className="" style={{ marginTop: "-21px", marginBottom: "0em" }}    >
                                        <ReadMoreReact text={last.text} min={200}
                                            ideal={400}
                                            max={450}
                                            readMoreText={<More />}
                                        />
                                    </div>


                                </div>

                                <p onClick={(() => { repondre(last._id); showDrawer(); onChange() })} className='block' variant="primary" >
                                    repondre
                                </p>
                                <div className='d-flex  flex-direction-row'>
                                    <p className='none' onClick={(() => { repondre(last._id); aficheTime(); setUpdate(true) })} style={{
                                        cursor: "pointer",
                                        fontSize: "smaller",
                                        borderBottom: "ridge",
                                        width: "fit-content"
                                    }}>repondre</p>

                                    {/* {last.user._id === user.user._id ? <p className=''
                                        onClick={(() => { dispatch(getByiDcOMMENT(last._id)); setUpdate(false);setAfiche(true) })}
                                        style={{ cursor: "pointer", fontSize: "smaller", borderBottom: "ridge", marginLeft: "14px", width: "fit-content" }}>modifier</p> : null} */}
                                    <span style={{ fontSize: "xx-small", marginLeft: "14px", paddingTop: "6px" }}>{moment(last.createdAt).fromNow()}</span>
                                </div>
                            </div>
                            

                            
                        </div>
                    </div>


                    < div style={{

                    }}>
                        <div className="none" style={{ marginTop: "-1rem" }}>
                            {update === true && last._id === openComent.idcmt ?
                                <>
                                    <InsideComments props={props} c={last}
                                    />


                                </>
                                : null}
                        </div>

                    </div>
                
                  


                   






















                    {/* <div className="cmtresponsiv" style={{

                        margin: "24px 0px 11px",
                        marginRight: "56px",
                        background: "#fff",


                    }}>
                        <div className="create__first">
                            <div className="create__first-img">
                                <span>
                                    <img src={'http://localhost:4000/file/' + post.user.avatar} className='createFormAvatar m-t15' alt="" />
                                </span>
                            </div>
                            <div className="create__first-input d-flex justify-content-between" style={{ position: "relative" }}>
                                <div ref={refdiv} style={{ width: "30%", height: "20px", position: "absolute", top: "-29px" }}></div>

                                <div id="input" contenteditable="true" className="responsivinp commentaire"
                                    style={{
                                        width: "28rem",

                                        display: "table-cell",
                                        padding: "15px 20px",
                                        border: "none",
                                        background: "#f0f2f5",
                                        borderRadius: "30px",
                                        outline: "none",
                                        wordBreak: "break-word"
                                    }}
                                    placeholder='Écriver un nouvelle  commentaire'

                                    onInput={(e) => setCommentaire({ ...commentaire, text: sup === true ? e.currentTarget.textContent = "" : e.currentTarget.textContent })}
                                    onKeyDown={handleKeyDown}
                                    onKeyUp={(() => { setSup(false) })}

                                >



                                </div>



                                <div className='' style={
                                    {
                                        display: "flex",
                                        justifyContent: "space-between",

                                        width: "7%",
                                        position: "absolute",
                                        left: "87%",
                                        top: "17px"
                                    }
                                }

                                >

                                    <FontAwesomeIcon icon={faFaceSmile} style={{ cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faCamera} />


                                </div>

                            </div>
                        </div>

                    </div> */}
                </>
            }
        </div>
    )
}

export default LastComment