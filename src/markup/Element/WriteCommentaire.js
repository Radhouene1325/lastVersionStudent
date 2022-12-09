import React, { useContext } from 'react'
import "./sercheruser.css"
import { FaRegSmile } from 'react-icons/fa'
import { BsCamera } from 'react-icons/bs'
import { CoometaireContext } from './Posts'

const WriteCommentaire = () => {
    const { user, refdiv, setCommentaire, commentaire, input, setInput, placeHolder, handleKeyDown } = useContext(CoometaireContext)
    return (
        <div className="" style={{
            background: "#fff",
        }}>
            
            <div className style={{ display: "flex" }}>
                <div className='max' style={{

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
                        src={'http://localhost:4000/file/' + user.user.avatar}

                        alt=""
                    />

                </div>



                <div className=" d-flex justify-content-between responsive responsev500 " style={{ position: "relative", width: "87%",alignSelf:" baseline" }}>
                    <div ref={refdiv} style={{ width: "30%", height: "20px", position: "absolute", top: "-29px" }}></div>

                    <div id="input" contenteditable="true" className="commentaireinput   "
                        style={{
                            width: "119%",
                            paddingLeft: "3%",
                            paddingRight: "33%",
                            paddingTop: "3%",
                            paddingBottom: "3%",
                            margin: '1% -3% 0% 1%',
                           
                            display: "table-cell",
                            background: "#f0f2f5",
                            borderRadius: "30px",
                            outline: "none",
                            wordBreak: "break-word"
                         

                        }}
                        placeholder={placeHolder === false ? 'Écriver un commentaire' : 'Écriver un commentaire'}

                        onInput={(e) => setCommentaire({ ...commentaire, text: input === true ? e.currentTarget.textContent = "" : e.currentTarget.textContent })}
                        onKeyDown={handleKeyDown}
                        onKeyUp={(() => { setInput(false) })}

                    >

                    </div>
                    <div className='icon' style={{
                         position: "revert",
                         left: "77%",
                         top: "27%",
                         marginLeft: "-8%",
                         /* margin-bottom: -28%, */
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
    )
}

export default WriteCommentaire