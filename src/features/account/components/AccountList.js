import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getAllAccountAsync} from "../accountSlicer";
import AccountItem from "./AccountItem";
import {Container, Table} from "react-bootstrap";

export function AccountList() {
    const dispatch = useDispatch()
    dispatch(getAllAccountAsync())
    const accounts = useSelector((state) => state.accounts.accounts)
    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account) => (
                        <AccountItem
                            account={account}
                            key={account.id}
                        />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}