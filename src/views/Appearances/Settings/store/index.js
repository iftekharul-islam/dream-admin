// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk("store/getAllData", async () => {
  const res = await Api.get("settings");
  return res.data;
});

export const updateData = createAsyncThunk(
  "store/addData",
  async (_, { dispatch, getState }) => {
    const { data } = getState().settings;
    const res = await Api.post(`settings`, data);
    if (res.status === 201) {
      dispatch(getAllData());
    }
  }
);

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: {},
    uploadData: {},
    errors: [],

    total: 1,
    from: 0,
    to: 0,
    loading: false,

    params: { rowsPerPage: 10, q: null, page: 1 },
    searchParams: {},
    pagination: {},

    sidebarOpen: false,

    options: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload?.data;
    });
  },
  reducers: {
    setData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setData } = storeSlice.actions;
export default storeSlice.reducer;
