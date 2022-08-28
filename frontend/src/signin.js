import React from "react";
//import { Button, Form, Input } from "antd";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";
import {Navigate} from "react-router-dom";
//import "antd";
import "./signin.css";


export function Signin() {

    const [info, setInfo] = useState({
        email: "",
        password: "",
        msg: "",
        isLoading: "",
        redirect: false,
        errMsgEmail: "",
        errMsgPwd: "",
        errMsg: "",
    })

    const onChangehandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        setInfo(data);
    }

    const onSubmithandler = () => {
        setInfo({isLoading: true});
        axios.post("http://localhost:4000/login", {
            email: info.email,
            password: info.password,
        })
        .then((response) => {
            setInfo({isLoading: false});
            if (response.data.status === 200) {
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("userData", JSON.stringify(response.data.data));
                setInfo({
                    msg: response.data.message,
                    redirect: true,
                });
            }

            if (response.data.status === "failed" && response.data.success === undefined) {
                setInfo({
                    errMsgEmail: response.data.validation_error.email,
                    errMsgPwd: response.data.validation_error.password,
                });
                setTimeout(() => {
                    setInfo({
                        errMsgEmail: "",
                        errMsgPwd: "",
                    })
                }, 2000);
            }

            else if (response.data.status === "failed" && response.data.success === false) {
                setInfo({errMsg: response.data.message,});
                setTimeout(() => {
                    setInfo({errMsg: ""});
                }, 2000);
            }
        })
        .catch((error) => {
            console.log(error);
        })
    } 


    if (info.redirect) {
        return <Navigate to="/Home" />;
    }

    const login = localStorage.getItem("isLoggedIn");

    if (login) {
        return <Navigate to="/Home" />;
    }

    //const isLoading = info.isLoading;

    return (
        <div className="signin">
            <Form className="containers">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                           name="email"
                           value={info.email}
                           onChange={onChangehandler} />
                    <span className="text-alert">{info.msg}</span>
                    <span className="text-alert">{info.errMsgEmail}</span>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                           name="password"
                           value={info.password}
                           onChange={onChangehandler} />
                    <span className="text-alert">{info.errMsgPwd}</span>
                </Form.Group>
                <p className="text-alert">{info.errMsg}</p>
                <Button variant="primary" type="submit"
                        onClick={onSubmithandler}>Login</Button>
            </Form>
        </div>
    )
}