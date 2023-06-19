// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "store/getAllData",
  async (_, { getState }) => {
    const response = await Api.get("language");
    console.log("A");
    return response.data;
  }
);

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: [],

    total: 1,
    current: 0,

    params: { rowsPerPage: 10, q: null },
    pagination: { currentPage: 1, total: 0 },
    sidebarOpen: false,
    searchParams: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.total = action.payload?.total;
      state.current = action.payload?.to - action.payload?.from + 1;
    });
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setSearchParams: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
    toggleSidebarAction: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    }
  },
});

export const { setParams, setSearchParams,toggleSidebarAction } = storeSlice.actions;
export default storeSlice.reducer;
