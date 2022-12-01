import React, { useState } from "react";
import {Button, Container, Form} from "react-bootstrap";
import {saveAccountAsync} from "../accountSlicer";
import uuid from 'react-uuid';
import {useDispatch} from "react-redux";

export function AccountAdd() {
    const dispatch = useDispatch()

    const submitAddAccount = (event) => {
        event.preventDefault();
        dispatch(saveAccountAsync({id, firstName, lastName}))
    };

    const [formValue, setFormValue] = useState({
        id: uuid(),
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const { id, firstName, lastName } = formValue;

    return(
        <Container>
            <Form onSubmit={submitAddAccount}>
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