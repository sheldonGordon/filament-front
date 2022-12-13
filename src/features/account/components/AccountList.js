import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {deleteAccountByIdAsync, getAllAccountAsync} from "../accountSlicer";
import AccountItem from "./AccountItem";
import {Container, Table, Modal, Button} from "react-bootstrap";


export function AccountList() {
    const [show, setShow] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState({});

    const dispatch = useDispatch();
    const handleClose = () => setShow(false);

    function selectedAccountToDelete(account){
        setShow(true);
        setSelectedAccount(account);
    }

    function deleteAccountById(){
        //dispatch({ type: 'accounts/deleteById', payload: selectedAccount.id });
        dispatch(deleteAccountByIdAsync(selectedAccount.id))
        handleClose();
    }

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
                            selectedAccountDelete={selectedAccountToDelete}
                            key={account.id}
                        />
                    ))}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleted Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sur to delete {selectedAccount.firstName} {selectedAccount.lastName}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteAccountById}>
                        Delete Account
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}