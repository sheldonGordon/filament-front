import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getAllAccountAsync} from "../accountSlicer";
import AccountItem from "./AccountItem";

export function AccountList() {
    const dispatch = useDispatch()
    dispatch(getAllAccountAsync())
    const accounts = useSelector((state) => state.accounts.accounts)
    return(
        <>
            {accounts.map((account) => (
                <AccountItem
                    account={account}
                    key={account.id}
                />
            ))}
        </>
    );
}