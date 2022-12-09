
import React, { useContext, useEffect, useRef, useState } from 'react'
import { BiSend } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { commentaireupadte, commentaireUpdate, updatecommentaireempty } from '../../features/Comment/commentSlice'
import { getPosts } from '../../features/posts/postsSlice'
import Loding from './looding'
import { updateCommetsContext } from './Posts'
const UpdateComment = () => {

    const { refdiv, dispatch, getByiDcOMMENT, user, openComent, c, setAfiche,afiche } = useContext(updateCommetsContext)
    const updateRef=useRef()
    // const focusUpdate=()=>{
    //     updateRef.current.focus()

    // }
useEffect(()=>{
    if(afiche===true){
        updateRef.current.focus()
    }
},[afiche])

    const [lodding,setLoding]=useState(false)
    const [update, setUpdate] = useState({
        text: ""
    })

    let data = {
        text: update.text,
    }
    console.log(data)
    const handelUpdate = (e, id) => {
        if (e.key === 'Enter') {
            if (data.text.trim().length !== 0) {

                dispatch(commentaireUpdate({ id, data }))
                // dispatch(getPosts())
                // setInput(true)
                // setPlaceHolder(true)


            } else {
                e.preventDefault()

            }

        }

    };

    const handelClick = (id) => {
        dispatch(commentaireUpdate({ id, data }))
        setLoding(true)


    }
    const updateCommentaire = useSelector(commentaireupadte)
    console.log(updateCommentaire)
    useEffect(() => {
        if (Object.keys(updateCommentaire).length !== 0) {
            dispatch(getPosts())

            dispatch(getByiDcOMMENT(c._id))
            setTimeout(() => {

                setAfiche(false)
                dispatch(updatecommentaireempty())
                setLoding(false)
            }, 3000);
        }
        // setAfiche(false)

    }, [updateCommentaire, dispatch])



    return (
        <div>
            <div className="create__first-input d-flex justify-content-between" style={{ position: "relative", marginTop: "3%" }}>
               { lodding === false&&<div>
                    <div id="input" contenteditable="true" className="responsivinp commentaire"
                        style={{
                            width: "28rem",

                            display: "table-cell",
                            padding: "15px 20px",
                            border: "none",

                            marginTop: "16px",
                            marginBottom: "19px",
                            background: "#f0f2f5",
                            borderRadius: "30px",
                            outline: "none",
                            wordBreak: "break-word"
                        }}
                        placeholder='Écriver un commentaire'
                        ref={updateRef}
                        onInput={(e) => setUpdate({ ...update, text: e.currentTarget.textContent })}
                        onKeyDown={((e) => { handelUpdate(c._id, e) })}
                    >

                        {openComent.textComt}

                    </div>
                    <div style={{ display: "flex", marginLeft: "4%" }}>
                        {c._id === openComent.idcmt ? <p style={{ color: c._id === c._id ? "blue" : null, cursor: "pointer" }} onClick={(() => setAfiche(false))}>annuler</p> : null}
                        <BiSend style={{ cursor: "pointer", marginLeft: "8%", fontSize: "174%", color: "blue" }} onClick={(() => { handelClick(c._id) })} />
                    </div>
                </div>}
                {lodding === true?<Loding update={update} c={c} />:null}

            </div>

        </div>
    )
}

export default UpdateComment