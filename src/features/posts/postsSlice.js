import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import { PostsService } from './postsAPI'
import { PostsService } from "./postsAPI";
const initialState = {

    posts: [],
    myposts: [],
    // new craeted and saved  post in database to emit it in to the socket server 
    createdPostsocket: null,
    clickedOption: 'posts',
    likedPost: null,
    lasComent: [],
    imagepost: {},
    lastCMT:[],
    postId:{}



}

/* asyncthunk actions  */

// craete post redux action
export const creatPost = createAsyncThunk(
    'posts/create',
    async (data) => {
        const response = await PostsService.create(data)

        return response
    }
)

// get posts redux action 
export const getPosts = createAsyncThunk(
    'posts/getall',
    async () => {
        const response = await PostsService.getPosts()

        return response
    }
)
/************************getPostById*** */
export const GetPostbyid = createAsyncThunk(
    'posts/idPost',
    async (id) => {
        const response = await PostsService.idPost(id)

        return response
    }
)
/***************** */


// connected user  posts redux action
export const getMyPosts = createAsyncThunk(
    'posts/myposts',
    async () => {
        const response = PostsService.getMyPosts()

        return response
    }
)

// like   post redux action
export const Like = createAsyncThunk(
    'posts/like',
    async ({id,data}) => {
        const response = PostsService.like(id,data)

        return response
    }
)

// dislike post redux action
export const Dislike = createAsyncThunk(
    'posts/dislike',
    async ({id,data}) => {
        const response = PostsService.dislike(id,data)

        return response
    }
)

// like   post redux action
export const deletePost = createAsyncThunk(
    'posts/delete',
    async (id) => {
        const response = PostsService.delete(id)

        return response
    }
)

export const uploadImagePost = createAsyncThunk(
    'posts/createImagePost',
    async (datafile) => {
        const response = PostsService.createImagePost(datafile)

        return response
    }
)

/* createtion du slice */

const postsSlice = createSlice({
    name: "posts",
    initialState,
    // reducers action ki ma nest7a9ech bech njib donnes mi serveru wala nsob fi serveur
    reducers: {
        pushpost: (state, action) => {
            state.posts = [action.payload.post, ...state.posts]
        },
        refreshPost: (state, action) => {
            let arr = [...state.posts]
            let pos
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                if (element._id === action.payload.post._id)
                    arr[i] = action.payload.post
            }

            state.posts = arr
        },
        swicthPosts: (state, action) => {
            state.clickedOption = action.payload.option
        },





    },
    // actions qui depond de la communication avec le serveur
    extraReducers: {
        //create post http request 3 cases
        [creatPost.pending]: (state, action) => {

        },
        [creatPost.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.createdPostsocket = action.payload.data.data
        },
        [creatPost.rejected]: (state, action) => {

        },
        [getPosts.pending]: (state, action) => {

        },
        [getPosts.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.posts = action.payload.data.data.sort((a, b) => { return (b.createdAt.localeCompare(a.createdAt)) })

            console.log(state.posts)


        },
        [getPosts.rejected]: (state, action) => {

        },
        [getMyPosts.pending]: (state, action) => {

        },
        [getMyPosts.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.myposts = action.payload.data.data
            console.log(state.myposts)
        },
        [getMyPosts.rejected]: (state, action) => {

        },
        [Like.pending]: (state, action) => {

        },
        [Like.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.likedPost = action.payload.data.data
        },
        [Like.rejected]: (state, action) => {

        },
        [deletePost.pending]: (state, action) => {
            state.deletecase = 'loading'
        },
        [deletePost.fulfilled]: (state, action) => {
            console.log(action.payload);


            if (action.payload.status === 200) {

                state.deletecase = 'success'
                state.posts = state.posts.filter(p => p._id !== action.payload.data.data._id)
                state.myposts = state.myposts.filter(p => p._id !== action.payload.data.data._id)


            } else {

                state.deletecase = 'failure'
            }
        },
        [deletePost.rejected]: (state, action) => {

        },
        [Dislike.pending]: (state, action) => {

        },
        [Dislike.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.likedPost = action.payload.data.data
        },
        [Dislike.rejected]: (state, action) => {

        },

        /* create image post*/
        [uploadImagePost.fulfilled]:(state,action)=>{
            state.imagepost=action.payload.data
        },

        /**************getpostByid */
        [GetPostbyid.fulfilled]:(state,action)=>{
            state.postId=action.payload.data.data

        }
        /************* */




    }

})

export const { pushpost, refreshPost, swicthPosts, lastComent } = postsSlice.actions;
export const allselectpost = (state) => state.posts

export const selectPosts = (state) => state.posts.posts
export const selectadd = (state) => state.posts.createdPostsocket

export const imageToPost=(state)=>state.posts.imagepost

export const lastcmott=(state)=>state.posts.lastCMT

export const idPost=(state)=>state.posts.postId

export const posteLike=(state)=>state.posts.likedPost


export default postsSlice.reducer;