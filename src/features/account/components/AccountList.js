import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getAccountByIdAsync, getAllAccountAsync} from "../accountSlicer";
import AccountItem from "./AccountItem";
import {Container, Table, Modal, Button} from "react-bootstrap";


export function AccountList() {
    const [show, setShow] = useState(false);
    const [accountDelete, setAccountDelete] = useState("");
    const [selectedAccount, setSelectedAccount] = useState({});

    const dispatch = useDispatch();
    const handleClose = () => setShow(false);

    function selectedAccountToDelete(accountDelete){
        setShow(true);
        setAccountDelete(accountDelete);
        selectedAccountById(accountDelete);
    }

    function selectedAccountById(accountId){
        console.log("laaaaaaaaaaaaa");
        dispatch(getAccountByIdAsync(accountId));
    }


    dispatch(getAllAccountAsync())
    const accounts = useSelector((state) => state.accounts.accounts)

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>id</th>
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
            <Button variant="danger" onClick={() => setShow(true)}>Show</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deleted Account {accountDelete}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}