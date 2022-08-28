import React from "react";
import {useState} from "react";
import Button from 'react-bootstrap/Button';
//import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
//import "./appointment.css";

export function MakeAppointment () {

    const [info, setInfo] = useState({
        appointment: {
        id: "",
        client: "",
        advisor: "",
        subject: "",
        address: "",
        time: "",
        date: "",
        details: "",
        isLoading: ""
        },
        msg: "",
    });

    const onChangehandler = (e, key) => {
      const {appointment} = info;
      appointment[e.target.name] = e.target.value;
      setInfo({appointment});
    }
    
    const onSubmithandler = (e) => {
        e.preventDefault();
        setInfo({isLoading: true});
        axios.post("http://localhost:4000/makeAppointment", info.appointment)
             .then((response) => {
                setInfo({isLoading: false});
                if (response.data.status === 200) {
                    setInfo({
                        msg: response.data.message,
                        appointment: {
                            id: "",
                            client: "",
                            advisor: "",
                            subject: "",
                            address: "",
                            time: "",
                            date: "",
                            details: "",
                            isLoading:""
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
        <Form className="containers">
             <Form.Group as={Row} className="mb-6" controlId="formHorizontalEmail">
               <Form.Label column sm={2}>Client</Form.Label>
                <Form.Control type="client_name"
                       name="client_name"
                       value={info.appointment.client}
                       onChange={onChangehandler} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
               <Form.Label column sm={2}>Advisor</Form.Label>
                <Form.Control type="advisor_name"
                       name="advisor_name"
                       value={info.appointment.advisor}
                       onChange={onChangehandler} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
               <Form.Label column sm={2}>Subject</Form.Label>
                <Form.Control type="asubject"
                       name="subject"
                       value={info.appointment.subject}
                       onChange={onChangehandler} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
               <Form.Label column sm={2}>Address</Form.Label>
                <Form.Control type="address"
                       name="address"
                       value={info.appointment.address}
                       onChange={onChangehandler} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
               <Form.Label column sm={2}>Time</Form.Label>
               <Form.Control type="time"
                       name="time"
                       value={info.appointment.time}
                       onChange={onChangehandler} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
               <Form.Label column sm={2}>Date</Form.Label>
               <Form.Control type="date"
                       name="date"
                       value={info.appointment.date}
                       onChange={onChangehandler} />
            </Form.Group>
            <Form.Group as={Row} className="mb-6" controlId="formHorizontalEmail">
               <Form.Label column sm={2}>Details</Form.Label>
               <Form.Control type="details" name="details" as="textarea" rows={3} value={info.appointment.details}
                       onChange={onChangehandler}/>
            </Form.Group>
            <p></p>
            <Button variant='primary' type='submit'
                       onClick={onSubmithandler}>Confirm Appointment</Button>
        </Form>
    );
}