import React from "react"

import '../../css/post.css'
import 'antd/dist/antd.css';


import "./sercheruser.css"
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
const CreatePost = ({ user, postText, setpostText, handlepostimage, handelClick }) => {

    // window.addEventListener("scroll", function () {
    //     const search = document.querySelector(".search")
    //     search.classList.toggle("active", window.scrollY > 100)
    // }) 

    return (
        <section className=' boxShadow' style={{ width: "100%" }}>
            <div className="create"  >

                <div className="" style={{
                    background: "#fff",
                }}>

                    <div  style={{ display: "flex" }}>
                        <div className="max300" style={{

                        }}>
                            <img style={{
                                display: "flex",
                                margin: "7px 7px 20px 10px",
                                width: "49px",
                                height: "45px",
                                borderRadius: "50%",
                                OobjectFit: "cover",
                                objectFit: "cover",
                                cursor: "pointer"
                            }}
                                className="commentProfileImg"
                                src={'http://localhost:4000/file/' + user.avatar}

                                alt=""
                            />

                        </div>



                        <div className=" d-flex justify-content-between responsive responsev500 " style={{ position: "relative", width: "87%", alignSelf: " baseline" }}>
                            {/* <div ref={refdiv} style={{ width: "30%", height: "20px", position: "absolute", top: "-29px" }}></div> */}

                            <div id="input" contenteditable="true" className="commentaireinput   "
                                style={{
                                    width: "119%",
                                    paddingLeft: "3%",
                                    paddingRight: "19%",
                                    paddingTop: "3%",
                                    paddingBottom: "3%",
                                    margin: '1% -3% 0% 1%',

                                    display: "table-cell",
                                    background: "#f0f2f5",
                                    borderRadius: "30px",
                                    outline: "none",
                                    wordBreak: "break-word"


                                }}
                                placeholder='Écriver un post'

                                onInput={(e) => setpostText(e.currentTarget.textContent)}
                            // onKeyDown={handleKeyDown}
                            // onKeyUp={(() => { setInput(false) })}

                            >

                            </div>
                          

                        </div>
                    </div>

                </div >
                {/* <div className="create__first">
                    <div className="create__first-img">
                        <span>
                            <img src={'http://localhost:4000/file/' + user.avatar} className='createFormAvatar m-t15' alt="" />
                        </span>
                    </div>
                    <div className="create__first-input">
                        <input contenteditable="true"
                            value={postText} onChange={(e) => setpostText(e.target.value)} type='text'

                            className="create__first-inputs"
                            placeholder="Shakil what are your mind? "
                        />
                    </div>
                </div> */}
                <div className="create__second">
                    <span className="create__second-icon">
                        <FaVideo className="redColor" />{" "}
                        <span className="text">Live Video</span>
                    </span>
                    <span className="create__second-icon">
                        <input type="file" id='postimage' onChange={(e) => handlepostimage(e)} hidden />



                        {/* <FontAwesomeIcon className='' onClick={() => document.getElementById('postimage').click()} type='file' icon={faImage} /> */}

                        <FaRegFileImage className="greenColor" onClick={() => document.getElementById('postimage').click()} type='file' />{" "}

                        <span className="text">Photo / Video</span>
                    </span>
                    <span className="create__second-icon">
                        <FaRegGrinAlt className="orangeColor" />{" "}
                        <span className="text">Feeling</span>
                    </span>
                    <button onClick={handelClick} >valider</button>
                </div>
            </div>
        </section>
    );
};

export default CreatePost;

