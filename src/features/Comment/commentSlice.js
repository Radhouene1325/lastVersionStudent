import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../config/axios";
import { requests } from "../../config/requests";
import { CommentsService } from "./commentApi";


const initialState = {

    changedPost: null,
    addcomment: [],
    reponcecommentaire: {},
    getcomment: [],
    delete: [],
    open: "",
    idget:{},
    updatecommentaire:{}
}

/* asyncthunk actions  */

// craete post redux action reponce
export const creatComment = createAsyncThunk(
    'comments/create',
    async (commentaire) => {
        const response = await CommentsService.create(commentaire)

        return response
    }
)
export const commentaireUpdate = createAsyncThunk(
    'comments/updateCommtaireById',
    async ({id,data}) => {
        const response = await CommentsService.updateCommtaireById(id,data)

        return response
    }
)

export const deletComment = createAsyncThunk(
    'comments/cmtdelet',
    async (id) => {

        const response = await CommentsService.cmtdelet(id)
        console.log(response)
        return response

    }
)


/*****************reponce commentaire methode put */
export const createReponce = createAsyncThunk(
    'comments/reponcecommentaireapi',
    async (index) => {
        const response =await CommentsService.reponcecommentaireapi(index)
console.log(response)
        return response
    }
)

/***********************************end */
// display get allComments redux action
export const ShowAllComments = createAsyncThunk(
    'comments/getAllComments',
    async () => {
        const response = CommentsService.getAllComments()
        // const data = response.data.data.data
        return response
    }
)

export const getByiDcOMMENT = createAsyncThunk(
    'comments/getByIdCommtaire',
    async (id) => {
        const response = CommentsService.getByIdCommtaire(id)
        // const data = response.data.data.data
        return response
    }
)

/* createtion du slice */

const commentsSlice = createSlice({

    name: "comments",

    initialState,

    // reducers action ki ma nest7a9ech bech njib donnes mi serveru wala nsob fi serveur
    reducers: {
        afichage: (state, action) => {
            const index = state.reponcecommentaire.findIndex(e => e._id === action.payload)
            console.log(index)
            if (index >= 0) {
              state.open= state.reponcecommentaire[index]._id
            
            }
        },

        updatecommentaireempty:(state,action)=>{
            state.updatecommentaire={}
        }

    },
    // actions qui depond de la communication avec le serveur
    extraReducers: {
        //create post http request 3 cases
        [creatComment.pending]: (state, action) => {
            state.addcomment = 'loading'
        },
        [creatComment.fulfilled]: (state, action) => {
            console.log(action.payload);
            // state.createdPostsocket = action.payload.data.data
            //  state.changedPost = action.payload
            state.addcomment = action.payload
        },
        [creatComment.rejected]: (state, action) => {
            state.addcomment = 'failure'
        },
        /*********create Post** for reponce comments**************** */
        [createReponce.pending]: (state, action) => {
            state.repcomment = 'loading'
        },
        [createReponce.fulfilled]: (state, action) => {
            console.log(action.payload);
            // state.createdPostsocket = action.payload.data.data
            state.reponcecommentaire = action.payload
            // state.addcomment = 'success'
        },
        [createReponce.rejected]: (state, action) => {
            state.repcomment = 'failure'
        },


        [getByiDcOMMENT.fulfilled]:(state,action)=>{
            state.idget=action.payload
        },
        [ShowAllComments.fulfilled]:(state,action)=>{
            state.getcomment=action.payload
        },


        [commentaireUpdate.fulfilled]:(state,action)=>{
            state.updatecommentaire=action.payload
        }


    }

})

export const { afichage,updatecommentaireempty} = commentsSlice.actions;

export const selectChangedPost = (state) => state.comments
export const addcomstatus = (state) => state.comments.addcomment



export const deletecomt = (state) => state.comments.delete

export const repcommente = (state) => state.comments.reponcecommentaire
export const openrep=(state)=>state.comments.idget

export const AllComments=(state)=>state.comments.getcomment

export const commentaireupadte=(state)=>state.comments.updatecommentaire
export default commentsSlice.reducer;