// import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Api from '../../../http'

export const Signin = createAsyncThunk('Auth/Signin', async (data) => {
  const response = await Api.post('login', data) 
  if (response?.status == 200) {
    return { 'status': true, 'data': response?.data};
  } else {
    return { 'status': false, 'data': response?.data };
  }
})

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    UserData: [],
    accessToken: null
  },
  extraReducers: builder => {
    builder
      .addCase(Signin.fulfilled, (state, action) => {
        if(action?.payload?.status) {
          localStorage.setItem('userData', JSON.stringify(action.payload?.data?.user))
          localStorage.setItem('accessToken', JSON.stringify(action.payload?.data?.accessToken))
          localStorage.setItem("permissions", JSON.stringify(action.payload?.data?.permissions));

          state.UserData = action.payload?.user
          state.accessToken = action.payload?.accessToken
        }
      })
    }
})

export default AuthSlice.reducer
