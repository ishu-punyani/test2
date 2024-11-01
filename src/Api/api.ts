import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('users/getUsers', async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
})
