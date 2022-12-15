import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {Toast, ToastContainer} from 'react-bootstrap';

const ToastComponent = forwardRef((props, ref) =>{
    const [showToast, setToast] = useState(false);
    const [typeToast, setTypeToast] = useState("success")
    const [headerToast, setHeaderToast] = useState("");
    const [bodyToast, setBodyToast] = useState("");
    const [delayToast, setDelayToast] = useState(20000);

    useImperativeHandle(ref, () => ({
        setValueToast(type, header, body, delay = delayToast)
        {
            setToast(true);
            setTypeToast(type);
            setHeaderToast(header);
            setBodyToast(body);
            setDelayToast(delay);
        }
    }));

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast
                onClose={() => setToast(false)}
                autohide
                show={showToast}
                delay={delayToast}
                bg={typeToast}
            >
                <Toast.Header>
                    <strong className="me-auto">{headerToast}</strong>
                </Toast.Header>
                <Toast.Body>{bodyToast}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
});

export default ToastComponent;