import React, { useState, useRef } from "react";
import {Button, Container, Form} from "react-bootstrap";
import {saveAccountAsync, getAccountByAliasAsync} from "../accountSlicer";
import uuid from 'react-uuid';
import {useDispatch} from "react-redux";
import ToastComponent from "../../../components/ToastComponent";

export function AccountAdd() {
    const dispatch = useDispatch();
    const toastComponentRef = useRef(null);

    const initialState = {
        aliasName: "",
        firstName: "",
        lastName: ""
    };

    const [{aliasName, firstName, lastName}, setState] = useState({...initialState});
    const [aliasIsUse, setAliasIsUse] = useState(false);

    const clearState = () => {
        setState({ ...initialState});
    };

    const submitAddAccount = (event) => {
        event.preventDefault();
        dispatch(saveAccountAsync({id: uuid(), aliasName, firstName, lastName })).then(clearState)
            .then(toastComponentRef.current.setValueToast("success","Account add with success", `the ${aliasName} account has been added`))
            .catch(err => {
                toastComponentRef.current.setValueToast("danger","Account was not created", "error while adding, please try again later");
                console.log(err);
            });
        event.target.reset();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
        if(name === "aliasName" && value.trim().length > 3){
            dispatch(getAccountByAliasAsync(value.trim())).then(res =>{
                setAliasIsUse(res.payload);
            });
        }
    };

    return(
        <Container>
            <ToastComponent ref={toastComponentRef} showToast={false}/>
            <Form name={"addAccount"} onSubmit={submitAddAccount}>
                <Form.Group className="mb-3">
                    <Form.Label>Alias Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter alias name" name="aliasName" onChange={handleChange} defaultValue={aliasName} required />
                    <Form.Text className="text-muted">
                        at least 4 characters
                    </Form.Text>
                    <Form.Text className="text-danger" hidden={!aliasIsUse}>
                        <br />
                        alias is already in use
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" name="firstName" onChange={handleChange} defaultValue={firstName} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" name="lastName" onChange={handleChange} defaultValue={lastName} required/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={aliasIsUse}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}