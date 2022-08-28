import React from "react";
import {useState} from "react";
//import {Button, Form, Input} from "antd";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import "./signup.css";


export function Signup() {

const [info, setInfo] = useState({
    signupData: {
    first_name: "",
    last_name: "",
    gender: "",
    mobile_number: "",
    email: "",
    birthdate: "",
    password: "",
    isLoading: "",
    },
    msg: "",
});

const onChangehandler = (e, key) => {
  const {signupData} = info;
  signupData[e.target.name] = e.target.value;
  setInfo({signupData});
}

const onSubmithandler = (e) => {
    e.preventDefault();
    setInfo({isLoading: true});
    axios.post("http://localhost:4000/signup", info.signupData)
         .then((response) => {
            setInfo({isLoading: false});
            if (response.data.status === 200) {
                setInfo({
                    msg: response.data.message,
                    signupData: {
                        first_name: "",
                        last_name: "",
                        gender: "",
                        mobile_number: "",
                        email: "",
                        birthdate: "",
                    }
                });
                setTimeout(() => {
                    setInfo({msg: ""});
                }, 2000);
            }

            if (response.data.status === "failed") {
                setInfo({msg: response.data.message});
                setTimeout(() => {
                    setInfo({msg: ""});
                }, 2000);
            }
         }

         );
}

    return (
        
            <Form className="containers shadow">
               <Form.Group className="mb-3" controlId="lastName">
               <Form.Label>Last Name</Form.Label>
                <Form.Control type="last_name"
                       name="last_name"
                       value={info.signupData.last_name}
                       onChange={onChangehandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="firstName">
               <Form.Label>First Name</Form.Label>
                <Form.Control type="first_name"
                       name="first_name"
                       value={info.signupData.first_name}
                       onChange={onChangehandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="gender">
               <Form.Label>Gender</Form.Label>
                <Form.Control type="gender"
                       name="gender"
                       value={info.signupData.gender}
                       onChange={onChangehandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="mobileNumber">
               <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="mobile_number"
                       name="mobile_number"
                       value={info.signupData.mobile_number}
                       onChange={onChangehandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                       name="email"
                       value={info.signupData.email}
                       onChange={onChangehandler} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="password">
               <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                       name="password"
                       value={info.signupData.password}
                       onChange={onChangehandler} />
               </Form.Group>
               <p className="text-white">{info.msg}</p>
               <Button variant='primary' type='submit'
                       onClick={onSubmithandler}>Sign Up</Button>
            </Form>   
        
    );
}