// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "store/getAllData",
  async (_, { dispatch, getState }) => {
    const { params } = getState().artistChannels;
    dispatch(setLoading(true));
    const res = await Api.get("youtube-request", { params });
    dispatch(setLoading(false));
    return res.data;
  }
);

export const updateData = createAsyncThunk(
  "store/addData",
  async (_, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const { uploadData } = getState().artistChannels;
    const res = await Api.post(`youtube-request/${uploadData?.id}`, uploadData);
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

    params: { rowsPerPage: 10, q: null, page: 1, type: 3 },
    searchParams: {},
    pagination: {},

    sidebarOpen: false,

    options: {
      status: [
        { value: 1, label: "Pending" },
        { value: 2, label: "Approved" },
        { value: 3, label: "Rejected" },
      ],
      user: [],
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
        state.from = action.payload?.from;
        state.to = action.payload?.to;
      })
      .addCase(getUserOptions.fulfilled, (state, action) => {
        state.options = { ...state.options, user: action.payload?.data };
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
