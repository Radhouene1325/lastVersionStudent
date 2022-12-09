import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {updateUser, uploadAvatar } from "./userApi";
import Swal from 'sweetalert2';


const initialState = {

  avatarstatus: "",
  user: null,
  updatestatus:""
  
};

//update user
export const UpdateUser = createAsyncThunk("users/updateUser", async (data) => {
  const response = await updateUser(data);

  return response;
});

// uploadd user avatar
export const uploadavatar = createAsyncThunk("users/avatar", async (data) => {
  const response = await uploadAvatar(data);
  return response;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers: (builder) => {

    //depond du server.js
    builder
      /// upload avatar
      .addCase(uploadavatar.pending, (state, action) => {
        state.avatarstatus = "loading";
      })
      .addCase(uploadavatar.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload.data) {
          state.avatarstatus = "success";
          state.user = action.payload.data.data;
          window.alert("image téléchargé avec succées")
          window.location.reload()
        } else {
          state.avatarstatus = "failure";
          window.alert("erreur de téléchargement")
         
        }
      })
      .addCase(uploadavatar.rejected, (state, action) => {

    })
    //update user
    .addCase(UpdateUser.pending, (state, action) => {
        state.updatestatus = 'loading'
    })
    .addCase(UpdateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        if(action.payload.data){
        state.updatestatus = 'success'
        Swal.fire({
			icon: 'success',
			title: 'votre profil est à jour!',
	  
		  })
      setTimeout(() => {
         window.location.reload()
      }, "1000")
   
        }
        else{

            window.alert('error')
        }
    })
    .addCase(UpdateUser.rejected, (state, action) => {
        state.updatestatus = 'failure'
    })
}
}
)

export const {} = userSlice.actions;
export const selectavatarstatus = (state) => state.users.avatarstatus;
export const selectupdatestatus = (state) => state.users.updatestatus;

export default userSlice.reducer
