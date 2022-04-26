import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {
    fetchDeleteAccount,
    fetchGetAccountById,
    fetchGetAllAccount,
    fetchSaveAccount,
    fetchUpdateAccount
} from "./accountAPI";

import {createSlice} from "@reduxjs/toolkit";

const initialState={
    account:{},
    status: null
}


export const getAllAccountAsync = createAsyncThunk(
    'account/getAll',
    async () => {
        return await fetchGetAllAccount()
    }
)

export const getAccountByIdAsync = createAsyncThunk(
    'account/getById',
    async (id) => {
        return await fetchGetAccountById(id)
    }
)

export const saveAccountAsync = createAsyncThunk(
    'account/save',
    async (account) => {
        return await fetchSaveAccount(account)
    }
)

export const updateAccountAsync = createAsyncThunk(
    'account/update',
    async (account) => {
        return await fetchUpdateAccount(account)
    }
)

export const deleteAccountByIdAsync = createAsyncThunk(
    'account/deleteById',
    async (id) => {
        return await fetchDeleteAccount(id)
    }
)

export const accountSlicer = createSlice({
    name: 'account',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllAccountAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAllAccountAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.account = action.payload
            })
            .addCase(getAllAccountAsync.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(getAccountByIdAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAccountByIdAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.account = action.payload
            })
            .addCase(getAccountByIdAsync.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(saveAccountAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(saveAccountAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.account = action.payload
            })
            .addCase(saveAccountAsync.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(updateAccountAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateAccountAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.account = action.payload
            })
            .addCase(updateAccountAsync.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(deleteAccountByIdAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteAccountByIdAsync.fulfilled, (state, action) => {
                state.status = 'success'
            })
            .addCase(deleteAccountByIdAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
})