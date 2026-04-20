import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const addpost = createAsyncThunk("/add/post", async (post) => {
    const response = await axios.post(
        "https://server-1-zoux.onrender.com/api/post",
        post,
    );
    return response
});


export const getpost = createAsyncThunk("/fetch/post", async () => {
    const response = await axios.get(
        "https://server-1-zoux.onrender.com/api/post",
    );
    return response.data;
});

export const deletepost = createAsyncThunk("/delete/post", async (id, { dispatch }) => {
    const response = await axios.delete(

        `https://server-1-zoux.onrender.com/api/post/${id}`
    );
    dispatch(getpost())

});


const postslice = createSlice({
    name: "post",
    initialState: {
        data: [],
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(getpost.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(getpost.rejected, (state) => {
                state.error = "error fitshin data problem";
            });
    },
});


export default postslice.reducer;