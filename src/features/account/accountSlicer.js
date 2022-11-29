import {
    fetchDeleteAccount,
    fetchGetAccountById,
    fetchGetAllAccount,
    fetchSaveAccount,
    fetchUpdateAccount
} from "./accountAPI";

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState={
    accounts:[],
    status: null
}

export const getAllAccountAsync = createAsyncThunk(
    'accounts/getAll',
    async (dispatch, getState) => {
        return await fetchGetAllAccount()
    }
)

export const getAccountByIdAsync = createAsyncThunk(
    'accounts/getById',
    async (id) => {
        return await fetchGetAccountById(id)
    }
)

export const saveAccountAsync = createAsyncThunk(
    'accounts/save',
    async (account) => {
        return await fetchSaveAccount(account)
    }
)

export const updateAccountAsync = createAsyncThunk(
    'accounts/update',
    async (account) => {
        return await fetchUpdateAccount(account)
    }
)

export const deleteAccountByIdAsync = createAsyncThunk(
    'accounts/deleteById',
    async (id) => {
        return await fetchDeleteAccount(id)
    }
)

export const accountSlicer = createSlice({
    name: 'accounts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllAccountAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAllAccountAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.accounts = action.payload
            })
            .addCase(getAllAccountAsync.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(getAccountByIdAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAccountByIdAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.accounts = action.payload
            })
            .addCase(getAccountByIdAsync.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(saveAccountAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(saveAccountAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.accounts = action.payload
            })
            .addCase(saveAccountAsync.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(updateAccountAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateAccountAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.accounts = action.payload
            })
            .addCase(updateAccountAsync.rejected, (state) => {
                state.status = 'failed'
            })
            .addCase(deleteAccountByIdAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(deleteAccountByIdAsync.fulfilled, (state, action) => {
                state.status = 'success'
                state.accounts = action.payload
            })
            .addCase(deleteAccountByIdAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default accountSlicer.reducer