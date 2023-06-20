// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "store/getAllData",
  async (_, { dispatch, getState }) => {
    const { params } = getState().labels;
    dispatch(setLoading(true));
    const res = await Api.get("label", { params });
    dispatch(setLoading(false));
    return res.data;
  }
);

export const addData = createAsyncThunk(
  "store/addData",
  async (_, { dispatch, getState }) => {
    dispatch(setLoading(true));
    const { uploadData } = getState().labels;
    const res = await Api.post("label", uploadData);
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
    const { uploadData } = getState().labels;
    const res = await Api.post(`label/${uploadData?.id}`, uploadData);
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
    const res = await Api.get('option/user');
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

    params: { rowsPerPage: 10, q: null, page: 1 },
    searchParams: {},
    pagination: {},

    sidebarOpen: false,

    options: {
      status: [
        { label: "Pending", value: 1 },
        { label: "Approved", value: 2 },
        { label: "Rejected", value: 3 },
      ],
      user: [],
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload?.data;
      state.total = action.payload?.total;
      state.from = action.payload?.from;
      state.to = action.payload?.to;
    })
    builder.addCase(getUserOptions.fulfilled, (state, action) => {    
      state.options = {...state.options, user: action.payload?.data}
    })
    ;
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
      state.errors= [];
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
