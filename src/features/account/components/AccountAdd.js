import React, { useState, useRef } from "react";
import {Button, Container, Form} from "react-bootstrap";
import {saveAccountAsync} from "../accountSlicer";
import uuid from 'react-uuid';
import {useDispatch} from "react-redux";
import ToastComponent from "../../../components/ToastComponent";

export function AccountAdd() {
    const dispatch = useDispatch();
    const toastComponentRef = useRef(null);

    const initialState = {
        firstName: "",
        lastName: ""
    };

    const [{firstName, lastName}, setState] = useState({...initialState});

    const clearState = () => {
        setState({ ...initialState});
    };

    const submitAddAccount = (event) => {
        event.preventDefault();
        dispatch(saveAccountAsync({id: uuid(), firstName, lastName })).then(clearState)
            .then(toastComponentRef.current.setValueToast("success","Account add with success", `the ${firstName} ${lastName} account has been added`))
            .catch(toastComponentRef.current.setValueToast("danger","Account was not created", "error while adding, please try again later"));
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
    };

    return(
        <Container>
            <ToastComponent ref={toastComponentRef} showToast={false}/>
            <Form name={"addAccount"} onSubmit={submitAddAccount}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" name="firstName" onChange={handleChange} defaultValue={firstName} required />
                    <Form.Text className="text-muted">
                        Enter account first name
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" name="lastName" onChange={handleChange} defaultValue={lastName} required/>
                    <Form.Text className="text-muted">
                        Enter account last name
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}