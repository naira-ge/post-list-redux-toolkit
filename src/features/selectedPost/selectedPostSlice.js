import { createSlice } from '@reduxjs/toolkit';

const selectedPostSlice = createSlice({
    name:'selectedPost',
    initialState: [],
    reducers: {
        select: (state, {payload}) => payload.id,
    }
});

export const {
    select: selectPostActionCreator,
} = selectedPostSlice.actions;

export const selectPosts = (state) => state.selectedPost.value;


export default selectedPostSlice.reducer;