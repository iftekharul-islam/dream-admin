// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "store/getAllData",
  async (_, { getState }) => {
    const response = await Api.get("inventories");
    console.log("A");
    return response.data;
  }
);

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: [],
    total: 1,
    params: {},
    searchParams: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload?.inventories?.data;
      state.cost = action.payload?.total_cost;
      state.total = action.payload?.inventories?.total;
    });
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setSearchParams: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
  },
});

export const { setParams, setSearchParams } = storeSlice.actions;
export default storeSlice.reducer;
