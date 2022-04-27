import {configureStore} from "@reduxjs/toolkit";
import accountSlicer from "../features/account/accountSlicer";

export const store = configureStore({
    reducer:{
        accounts: accountSlicer
    }
})