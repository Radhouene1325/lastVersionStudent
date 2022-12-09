import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





import Offcanvas from 'react-offcanvas';
import { Drawer, Modal, Space } from 'antd';

export const SouCommentaireResponsive = ({ c, props, placement, setOpen, open }) => {


    const { ReadMoreReact,
        post, aficheTime, setReponce, reponce, handleKeyDownrep, dispatch, update,
        loading, openComent, More, moment, sup, setSup, placeHolder, user, refdiv, repondre, focustext } = props

    const onfocuse = useRef()
    const scrolling = useRef()


    useEffect(() => {


        return (scrolling.current?.scrollIntoView({ behavior: 'smooth' }))



    }, [loading])

    const onClose = () => {
        setOpen(false);
    };


    const [formValue, setFormValue] = useState('');

    const dummy = useRef();
    const sendMessage = async (e) => {
        e.preventDefault();



        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (

            <Drawer
            
            onClose={(()=>{onClose()})}
            open={open}
            extra={
                <Space>
                        <Form style={{width:"19rem"}}>

                            <div className=" d-flex justify-content-between responsive" style={{ position: "relative" }}>
                                <div type="input" contenteditable="true" className="text responsivinp"
                                    style={{
                                        width: "17rem", display: "table-cell",
                                        paddingLeft: "21px",
                                        border: "none",
                                        background: "#f0f2f5",
                                        borderRadius: "30px",
                                        outline: "none",
                                        wordBreak: "break-word",
                                        paddingTop: "12px",
                                        paddingBottom: "11px",
                                        marginLeft: "25px",
                                        marginRight: "-35px"

                                    }}
                                    id="idText"
                                    ref={onfocuse}
                                    placeholder={placeHolder === false ? `Écrire un commentaire a ${post.user.name}` : `vous aves repondre a ${post.user.name}`}
                                    onInput={(e) => setReponce({ ...reponce, text: sup === true ? e.currentTarget.textContent = "" : e.currentTarget.textContent })}
                                    onKeyDown={handleKeyDownrep}
                                    onKeyUp={(() => { setSup(false) })}

                                >
                                    <p style={{
                                        color: "#212529", marginLeft: "1rem", fontSize: "smaller", marginBottom: "inherit", fontFamily: "math"
                                    }}> {c.user._id === openComent.iduser ? "@" + c.user.name : null}</p>

                                    {sup === true ? repondre(c._id) : null}
                                    <div ref={scrolling} style={{ width: "30%", height: "50px", position: "absolute", top: "-15rem" }}></div>


                                </div>



                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "10%",
                                    position: "absolute",
                                    left: "87%",
                                    top: "24px"
                                }
                                }

                                >
                                    {/* 
<FontAwesomeIcon icon={faFaceSmile} style={{ cursor: "pointer" }} />
<FontAwesomeIcon icon={faCamera} /> */}


                                </div>

                            </div>
                        </Form>
                    </Space>
                }
            >
                <div className='cmtResposev'>



                    <>
                        <main>


                            <span ref={dummy}>

                                <div className="insidecomment "  >

                                    <div className='cmtreponsive' style={{
                                        marginLeft: " -6rem", paddingLeft: "40px"
                                    }}>
                                        {

                                            !openComent.data ? <>login</> : openComent.data

                                                .map((c) => (

                                                    <div className="" style={{ display: "flex", margin: "auro" }}  >
                                                        <div style={{ position: "relative" }}>
                                                            <img
                                                                className="" style={{
                                                                    display: "flex",
                                                                    margin: "20px 7px 20px 10px",
                                                                    width: "28px",

                                                                    borderRadius: "50%",

                                                                    objectFit: "cover",
                                                                    cursor: "pointer"
                                                                }}
                                                                src={'http:localhost:4000/file/' + c.user.avatar}

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

                                </div>

                            </span>

                        </main>

                        <form >

                          

                        </form>
                    </>



                </div>
               
            </Drawer>
           
      


    );
}








