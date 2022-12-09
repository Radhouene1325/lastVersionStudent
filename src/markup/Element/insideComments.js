import React, { useEffect, useRef, useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Switch } from 'antd';

import { repcommente } from '../../features/Comment/commentSlice';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { BsCamera } from 'react-icons/bs';
import { FaRegSmile } from 'react-icons/fa';

const listData = Array.from({
    length: 1,
}).map((_, i) => ({
    href: 'https://ant.design',

    avatar: 'https://joeschmoe.io/api/v1/random',

}));


const InsideComments = ({ props, c }) => {

    const { ReadMoreReact,
        post, aficheTime, setReponce, reponce, handleKeyDownrep, dispatch, update,
        loading, openComent, More, moment, sup, setSup, placeHolder, user, refdiv, repondre, focustext } = props

    const onfocuse = useRef()
    const scrolling = useRef()


    useEffect(() => {
        if (!loading) {
            onfocuse.current.focus()
            return (scrolling.current?.scrollIntoView({ behavior: 'smooth' }))

        }

    }, [loading])

    return (
        <>
            <Switch checked={!loading} onChange={aficheTime} style={{ display: "none" }} />

            <List

                dataSource={listData}
                renderItem={(item) => (
                    <List.Item
                        style={{ display: "flow-root",marginRight: "2%" }}


                    >
                        <Skeleton loading={loading} active avatar >


                            <div className='cmtreponsive' style={{ marginLeft: "13%" }}>
                                {

                                    !openComent.data ? <>login</> : openComent.data

                                        .map((c) => (

                                            <div className="" style={{ display: "flex", margin: "auro" }}  >
                                                <div style={{

                                                }}>
                                                    <img style={{
                                                        display: "flex",
                                                        margin: "16px 7px 20px 10px",
                                                        width: "36px",
                                                        height: "34px",
                                                        borderRadius: "50%",
                                                        OobjectFit: "cover",
                                                        objectFit: "cover",
                                                        cursor: "pointer"
                                                    }}
                                                        className="commentProfileImg"
                                                        src={'http://localhost:4000/file/' + c.user.avatar}

                                                        alt=""
                                                    />

                                                </div>

                                                <div className="" style={{
                                                    postion: "relative", maxWidth: "80%"
                                                }}>
                                                    <span className="" style={{
                                                        fontWeight: "600",
                                                        cursor: "pointer"
                                                    }}>

                                                    </span>
                                                    <div className='' style={{
                                                        backgroundColor: '#f0f2f5', padding: "10px", marginTop: "3px", borderRadius: "30px 30px 30px 30px", wordBreak: "break-all"
                                                    }}>
                                                        <div>  <p style={{
                                                            color: "#212529",
                                                            fontWeight: " bold",
                                                            fontStyle: " oblique",
                                                            fontSize: "0.9999rem",
                                                            fontFamily: "serif"
                                                        }} >{c.user.name} {c.user.lastName}  </p></div>


                                                        <div className="" style={{
                                                            marginTop: "-21px", marginBottom: "0em", font: "menu",
                                                            fontSize: "revert"
                                                        }}    >
                                                            <ReadMoreReact text={c.text} min={200}
                                                                ideal={400}
                                                                max={450}
                                                                readMoreText={<More />}
                                                            />
                                                        </div>
                                                    </div>
                                                    <span style={{ fontSize: "xx-small" }}>{moment(c.createdAt).fromNow()}</span>
                                                </div>

                                            </div>

                                        )
                                        )
                                }

                            </div>




                            <div className="" style={{
                                background: "#fff",
                            }}>

                                <div className style={{ display: "flex", marginLeft: "12%" }}>
                                    <div style={{

                                    }}>
                                        <img style={{
                                            display: "flex",
                                            margin: "16px 7px 20px 10px",
                                            width: "36px",
                                            height: "34px",
                                            borderRadius: "50%",
                                            OobjectFit: "cover",
                                            objectFit: "cover",
                                            cursor: "pointer"
                                        }}
                                            className="commentProfileImg"
                                            src={'http://localhost:4000/file/' + user.user.avatar}

                                            alt=""
                                        />

                                    </div>



                                    <div className=" d-flex justify-content-between responsive responsev500 " style={{ position: "relative", width: "87%", alignSelf: " baseline" }}>
                                        {/* <div ref={refdiv} style={{ width: "30%", height: "20px", position: "absolute", top: "-29px" }}></div> */}

                                        <div id="input" contenteditable="true" className="commentaireinput   "
                                            style={{
                                                width: "96%",
                                                padding: "3% 19% 3% 3%",
                                                margin: '2% 1% 1% 0%',

                                                display: "table-cell",
                                                background: "#f0f2f5",
                                                borderRadius: "30px",
                                                outline: "none",
                                                wordBreak: "break-word"


                                            }}
                                            ref={onfocuse}
                                            placeholder={placeHolder === false ? `Écrire un commentaire a ${post.user.name}` : `vous aves repondre a ${post.user.name}`}
                                            onInput={(e) => setReponce({ ...reponce, text: sup === true ? e.currentTarget.textContent = "" : e.currentTarget.textContent })}
                                            onKeyDown={handleKeyDownrep}
                                            onKeyUp={(() => { setSup(false) })}

                                        >
                                            <p style={{color: "#212529", marginBottom: "-1%",fontFamily: "sans-serif"}}> {c.user._id === openComent.iduser ? "@" + c.user.name : null}</p>

                                            {sup === true ? repondre(c._id) : null}
                                            <div ref={scrolling} style={{ width: "30%", height: "50px", position: "absolute", top: "-15rem" }}></div>


                                        </div>
                                        <div className='icon' style={{
                                            position: "revert",
                                            left: "77%",
                                            top: "27%",
                                            marginLeft: "-17%",
                                            marginTop: "5%",
                                            display: "grid",
                                            gridAutoFlow: "column",
                                            width: "16%",
                                        }}

                                        >
                                            <div class="image-upload">
                                                <label for="file-input">
                                                    <BsCamera typle='file' style={{ cursor: "pointer", fontSize: "146%" }} alt="inserer une image" />
                                                </label>

                                                <input id="file-input" type="file" style={{ display: "none" }} />
                                            </div>

                                            <FaRegSmile style={{ cursor: "pointer", fontSize: "146%" }} />


                                        </div>

                                    </div>
                                </div>

                            </div >

                        </Skeleton>

                    </List.Item>





                )
                }
            />

        </>
    );
};
export default InsideComments;






// <div className='cmtreponsive' style={{ marginLeft: "13%" }}>
//     {

//         !openComent.data ? <>login</> : openComent.data

//             .map((c) => (

//                 <div className="" style={{ display: "flex", margin: "auro" }}  >
//                     <div style={{ position: "relative", display: "contents" }}>
//                         <img
//                             className="" style={{
//                                 display: "flex",
//                                 margin: "20px 7px 20px 10px",
//                                 width: "9%",
//                                 height: "fit-content",
//                                 borderRadius: "50%",

//                                 objectFit: "cover",
//                                 cursor: "pointer"
//                             }}
//                             src={'http://localhost:4000/file/' + c.user.avatar}

//                             alt=""
//                         />

//                     </div>

//                     <div className="" style={{
//                         postion: "relative", maxWidth: "80%"
//                     }}>
//                         <span className="" style={{
//                             fontWeight: "600",
//                             cursor: "pointer"
//                         }}>

//                         </span>
//                         <div className='' style={{
//                             backgroundColor: '#f0f2f5', padding: "10px", marginTop: "3px", borderRadius: "30px 30px 30px 30px", wordBreak: "break-all"
//                         }}>
//                             <div>  <p style={{
//                                 color: "#212529",
//                                 fontWeight: " bold",
//                                 fontStyle: " oblique",
//                                 fontSize: "0.9999rem",
//                                 fontFamily: "serif"
//                             }} >{c.user.name} {c.user.lastName}  </p></div>


//                             <div className="" style={{
//                                 marginTop: "-21px", marginBottom: "0em", font: "menu",
//                                 fontSize: "revert"
//                             }}    >
//                                 <ReadMoreReact text={c.text} min={200}
//                                     ideal={400}
//                                     max={450}
//                                     readMoreText={<More />}
//                                 />
//                             </div>
//                         </div>
//                         <span style={{ fontSize: "xx-small" }}>{moment(c.createdAt).fromNow()}</span>
//                     </div>

//                 </div>

//             )
//             )
//     }

// </div>

// <Form>
//     <div className="cmtresponsiv" style={{marginTop: "5%"}}>
//         <div style={{ display: "flex",     alignItems: "flex-start" }}>
//             <div style={{

//             }}>
//                 <img style={{
//                     display: "flex",
//                     margin: "0% 4% 3% 29%",
//                     width: "28%",
//                     height: "99%",
//                     borderRadius: "50%",
//                     OobjectFit: "cover",
//                     objectFit: "cover",
//                     cursor: "pointer"
//                 }}
//                     className="commentProfileImg"
//                     src={'http://localhost:4000/file/' + user.user.avatar}

//                     alt=""
//                 />

//             </div>

//             <div className="  justify-content-between responsive" style={{ position: "relative" }}>
//                 <div type="input" contenteditable="true" className="text responsivinp"
//                     style={{
//                         // width: "24rem",
//                         paddingLeft: "6%",
//                         paddingRight: "23%",
//                         border: "none",
//                         background: "rgb(240, 242, 245)",
//                         borderRadius: "30px",
//                         outline:" none",
//                         width: "22rem",
//                         marginLeft: "-11%",
//                         marginRight: "8%",
//                         paddingTop: "1%",
//                         display: "flex",
//                         wordBreak: "break-all",
//                     }}
//                     id="idText"
//                     ref={onfocuse}
//                     placeholder={placeHolder === false ? `Écrire un commentaire a ${post.user.name}` : `vous aves repondre a ${post.user.name}`}
//                     onInput={(e) => setReponce({ ...reponce, text: sup === true ? e.currentTarget.textContent = "" : e.currentTarget.textContent })}
//                     onKeyDown={handleKeyDownrep}
//                     onKeyUp={(() => { setSup(false) })}

//                 >
//                     <p style={{
//                         color: "#212529", marginBottom: "1%"

//                     }}> {c.user._id === openComent.iduser ? "@" + c.user.name : null}</p>

//                     {sup === true ? repondre(c._id) : null}
//                     <div ref={scrolling} style={{ width: "30%", height: "50px", position: "absolute", top: "-15rem" }}></div>


//                 </div>



//                 <div style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     width: "10%",
//                     position: "absolute",
//                     left: "87%",
//                     top: "24px"
//                 }
//                 }

//                 >
//                     {/* 
//                         <FontAwesomeIcon icon={faFaceSmile} style={{ cursor: "pointer" }} />
//                         <FontAwesomeIcon icon={faCamera} /> */}


//                 </div>

//             </div>

//         </div>

//     </div>
// </Form>

// </div> 