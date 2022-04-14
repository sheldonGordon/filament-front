import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {fetchGetAccountById} from "./accountAPI";

const initialState={
    account:{},
    status: null
}

export const getAccountByIdAsync = createAsyncThunk(
    'account/getById',
    async () => {
        return await fetchGetAccountById()
    }
)