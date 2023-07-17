// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "store/getAllData",
  async (_, { dispatch, getState }) => {
    const { params } = getState().deposits;
    dispatch(setLoading(true));
    const res = await Api.get("transaction", { params });
    dispatch(setLoading(false));
    return res.data;
  }
);

export const addData = createAsyncThunk(
  "store/addData",
  async (_, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const { uploadData } = getState().deposits;
    const res = await Api.post("transaction", uploadData);
    if (res.status === 422) {
      dispatch(setError(res.data.errors));
    } else if (res.status === 201) {
      dispatch(toggleSidebarAction());
      dispatch(getAllData());
    }
    dispatch(setLoading(false));
  }
);

export const updateData = createAsyncThunk(
  "store/addData",
  async (_, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const { uploadData } = getState().deposits;
    const res = await Api.post(`transaction/${uploadData?.id}`, uploadData);
    if (res.status === 422) {
      dispatch(setError(res.data.errors));
    } else if (res.status === 201) {
      dispatch(toggleSidebarAction());
      dispatch(getAllData());
    }
    dispatch(setLoading(false));
  }
);

export const getUserOptions = createAsyncThunk(
  "store/getUserOptions",
  async () => {
    const res = await Api.get("option/user");
    return res;
  }
);

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    data: [],
    uploadData: {},
    errors: [],

    total: 1,
    from: 0,
    to: 0,
    loading: false,

    params: { rowsPerPage: 10, q: null, page: 1, type: "credit" },
    searchParams: {},
    pagination: {},

    sidebarOpen: false,

    options: {
      status: [
        { label: "Pending", value: "Pending" },
        { label: "Approved", value: "Approved" },
        { label: "Rejected", value: "Rejected" },
      ],
      user: [],
      month: [
        { label: "January", value: "January" },
        { label: "February", value: "February" },
        { label: "March", value: "March" },
        { label: "April", value: "April" },
        { label: "May", value: "May" },
        { label: "June", value: "June" },
        { label: "July", value: "July" },
        { label: "August", value: "August" },
        { label: "September", value: "September" },
        { label: "October", value: "October" },
        { label: "November", value: "November" },
        { label: "December", value: "December" },
      ],
      year: []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.total = action.payload?.total;
      state.from = action.payload?.from;
      state.to = action.payload?.to;
    });
    builder.addCase(getUserOptions.fulfilled, (state, action) => {
      state.options = { ...state.options, user: action.payload?.data };
      let years = [];
      for (let index = new Date().getFullYear(); index >= 2020; index--) {
        years.push({ label: index, value: index });        
      }
      state.options = { ...state.options, user: action.payload?.data, year:years };
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
      state.errors = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.errors = action.payload;
    },
    setUploadData: (state, action) => {
      state.uploadData = { ...state.uploadData, ...action.payload };
    },
    emptyUploadData: (state, action) => {
      state.uploadData = action.payload;
    },
  },
});

export const {
  setParams,
  setSearchParams,
  toggleSidebarAction,
  setLoading,
  setError,
  setUploadData,
  emptyUploadData,
} = storeSlice.actions;
export default storeSlice.reducer;
