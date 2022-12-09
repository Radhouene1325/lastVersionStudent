
import { configureStore } from "@reduxjs/toolkit";
import authetificationReducer from'../features/authentification/authSlice'
import annonceReducer from "../features/annonce/annonceSlice";
import userReducer from '../features/users/userSlice'
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/Comment/commentSlice'
export const store = configureStore({
    
  reducer: {

    auth : authetificationReducer,
    users:userReducer,
    annonce: annonceReducer,
    posts:postsReducer,
    comments:commentsReducer
  },
 
  // middleware: getDefaultMiddleware =>
  // getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
 
});
  













