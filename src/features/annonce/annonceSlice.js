import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import { createAnnonce, deleteAnnonce, getAllAnnonce, getAnnonceById, getAnnonceByUser, updateAnnonce } from "./annonceApi";
import { message } from 'antd';

const initialState = {

  AllAnnonce: [],
  addAnnonce: "",
  deleteAnnonce: "",
  updateAnnonce: "",
  errors: [],
  getId: "",
  getByUser: [],

};


export const GetAllAnnonce = createAsyncThunk(

  "Annonces/getallAnnonces",
  async () => {
    const response = await getAllAnnonce();
    // The value we return becomes the fulfilled action payload
    return response.data;
  }

);

export const GetByUser = createAsyncThunk(
  "annonces/getByUser", async (id) => {
  const response = await getAnnonceByUser(id);
  // The value we return becomes the fulfilled action payload
  return response;
});

export const CreateAnnonce = createAsyncThunk(
  "Annonces/createAnnonces",
  async (data) => {
    const response = await createAnnonce(data);
    // The value we return becomes the fulfilled action payload
    return response;

  }

);
export const DeleteAnnonce = createAsyncThunk(
  "Annonces/deleteAnnonce",
  async (id) => {
    const response = await deleteAnnonce(id);
    // The value we return becomes the fulfilled action payload
    return response.data;
  }
);

export const UpdateAnnonce = createAsyncThunk(
  "Annonces/updateAnnonce",
  async (data) => {
    const response = await updateAnnonce(data);
    // The value we return becomes the fulfilled action payload
    return response.data;
  }
);

export const GetAnnonceById = createAsyncThunk(
  "Annonces/getAnnonceById",
  async (id) => {
    const response = await getAnnonceById(id);
    // The value we return becomes the fulfilled action payload
    return response.data;
  }
);


export const annonceSlice = createSlice({
  name: "annonce",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    
    builder

      //get all

      .addCase(GetAllAnnonce.pending, (state) => { })
      .addCase(GetAllAnnonce.fulfilled, (state, action) => {

        console.log(action.payload);
        state.AllAnnonce = action.payload.data;
      })

      .addCase(GetAllAnnonce.rejected, (state, action) => { })

      //GetByUser

      .addCase(GetByUser.pending, (state) => {})
      .addCase(GetByUser.fulfilled, (state, action) => {
        console.log(action.payload.data, "data");
        state.getByUser = action.payload.data.data;
      })
      .addCase(GetByUser.rejected, (state, action) => {})

      //create

      .addCase(CreateAnnonce.pending, (state) => {
        state.addAnnonce = 'loading'
      })

      .addCase(CreateAnnonce.fulfilled, (state, action) => {

        console.log(action.payload, 'oooooo');

        if (action.payload.status === 200) {
          state.addAnnonce = 'success'
          state.AllAnnonce.push(action.payload.data)
          window.alert('Annonce Annonceed successfuly')
        }
        else {
          state.addAnnonce = 'failure'
          state.errors = action.payload.response.data.errors.details
        }
      })

      .addCase(CreateAnnonce.rejected, (state, action) => {

      })


      //update

      .addCase(UpdateAnnonce.pending, (state) => {})

      .addCase(UpdateAnnonce.fulfilled, (state,action) => {

        console.log(action.payload);

        if (action.payload.status = 200) {

          state.updateAnnonce = "success";
          

        }

         else {

          state.updateAnnonce = "failure";

        }
      })

      .addCase(UpdateAnnonce.rejected, (state, action) => { })


      //delete
      .addCase(DeleteAnnonce.pending, (state) => { })

      .addCase(DeleteAnnonce.fulfilled, (state, action) => {

        if (action.payload.data) {
          state.deleteAnnonce = "success"
          let index = state.AllAnnonce.findIndex(AllAnnonce => AllAnnonce._id === action.payload._id);
          state.AllAnnonce.splice(index, 1);
          message.success("Annonce supprimé avec succées")
        }

        else {

          state.deleteAnnonce = "failure"
          message.success("suppression echoué")
        }

      })

      .addCase(DeleteAnnonce.rejected, (state, action) => {

      })

      //GetAnnonceById
      .addCase(GetAnnonceById.pending, (state) => { })

      .addCase(GetAnnonceById.fulfilled, (state, action) => {

        if ((state.getId = "success")) {
          console.log(action.payload.data, 'loooog');
          state.getId = action.payload.data;
        } else {
          state.getId = "failure";
        }
      })

  },

});

export const { } = annonceSlice.actions;

export const selectAnnonces = (state) => state.annonce.AllAnnonce;
export const selectAddAnnonces = (state) => state.annonce.addAnnonce;
export const selectdeleteAnnonces = (state) => state.annonce.deleteAnnonce;
export const selectupdateAnnonces = (state) => state.annonce.updateAnnonce;
export const selectgetByUser = (state) => state.annonce.getByUser;
export const selecterrors = (state) => state.annonce.errors;
export default annonceSlice.reducer;