import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: false,
    loading: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder.addCase('users/getUsers/pending', (state : any) => {
            state.loading = true;
            state.error = false;
        }),
        builder.addCase('users/getUsers/fulfilled', (state : any, action : any) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        }),
        builder.addCase('users/getUsers/rejected', (state : any, action : any) =>{
            state.loading = false;
            state.error = true;
        });
    },
});

export const {actions, reducer } = usersSlice;
export default usersSlice;