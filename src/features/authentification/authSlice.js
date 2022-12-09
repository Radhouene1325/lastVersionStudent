import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, registerServicesProvider, registredAdvertiser } from "./authApi";

const initialState = {
  errors: [],
  registeer: '',

  loginstatus: {
    iserror: false,
    error: '',
    status: ''
  },
  cacheInscrire: true
};


/* asyncthunk actions  */

// login admin redux action
export const login = createAsyncThunk(
  'user/login',
  async (data) => {
    const response = await Login(data)
    console.log(response)

    return response;
  }
)

//Advertiser action
export const RegistredAdvertiser = createAsyncThunk(

  'advertiser/register',
  async (data) => {

    const response = await registredAdvertiser(data);
    return response;

  }
);

//servicesprovider action
export const RegistredServicesProvider = createAsyncThunk(

  'servicesprovider/register',
  async (data) => {

    const response = await registerServicesProvider(data);
    return response;

  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    cache(state) {
      state.cacheInscrire = false
    },
    show(state) {
      state.cacheInscrire = true
    }

  },


  extraReducers: (builder) => {

    //depond du server.js
    builder
      //advertiserSlice
      .addCase(RegistredAdvertiser.pending, (state) => {
        state.registeer = 'loading'
      })

      .addCase(RegistredAdvertiser.fulfilled, (state, action) => {

        console.log(action.payload.data, 'oooooo');

        if (action.payload.status === 200) {
          state.registeer = 'success'
          alert('Vous êtes inscrit avec succès')
          window.location.href = '/login';
        }

        else {
          state.registeer = 'failure'
          state.errors = action.payload.response.data.errors.details
        }

      })

      .addCase(RegistredAdvertiser.rejected, (state, action) => {

      })

      //servicesproviderSlice

      .addCase(RegistredServicesProvider.pending, (state) => {
        state.registeer = 'loading'
      })

      .addCase(RegistredServicesProvider.fulfilled, (state, action) => {

        console.log(action.payload, 'oooooo');

        if (action.payload.status === 200) {
          state.registeer = 'success'
          alert('Vous êtes inscrit avec succès')

        }

        else {

          state.registeer = 'failure'
          state.errors = action.payload.response.data.errors.details
        }
      })

      .addCase(RegistredServicesProvider.rejected, (state, action) => {

      })

      // login http request 3 cases
      .addCase(login.pending, (state) => {
        state.loginstatus.status = 'loading'
      })

      .addCase(login.fulfilled, (state, action) => {

        console.log(action.payload.data);

        if (action.payload.status === 200) {
        
          state.loginstatus.status = 'success'
          window.location.href = '/company-profile'

        } else {
          state.loginstatus.status = 'failure'
        }
      })
      .addCase(login.rejected, (state, action) => {
      })

  }
}
)

export const { cache, show } = authSlice.actions;
export const selectregister = (state) => state.auth.registeer;
export const selectregistererror = (state) => state.auth.errors;
export const selectloginstatus = (state) => state.auth.loginstatus;

/****************** */
export const insc = (state) => state.auth.cacheInscrire
/********************* */
export default authSlice.reducer
