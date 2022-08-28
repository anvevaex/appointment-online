import React from 'react';
import "./list.css";
import { useState } from "react";
//import appointment_data from "./appointment.json";
import { useAppointment } from './appointment-hooks';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
//import { MakeAppointment } from './MakeAppointment';

export function CheckAppointment() {

    const [data, setData] = useState();

    axios.get("http://localhost:4000/checkAppointment")
         .then(function (response) {
          const result = response.data.data;
          setData(result);
         })
         .catch(function (error) {
          console.log(error);
         });

    
    const appointments = data;
    const {removeFromList} = useAppointment();
    

    return (
        
         <div className='flex-container'>
            <ul>
                {appointments.map(appointment => (
              <div className='flex-item'>
                <li key={appointment.id}>
                  <div className="img">
                    <Link key={appointment.id} to={"/appointment.id="+appointment.id} state={appointment}>

                    <Modal.Dialog>
                      <Modal.Title>{appointment.id}</Modal.Title>
                      <Modal.Body>
                      <>
                        <>
                        <span><h6>Client: {appointment.client}  &  Advisor: {appointment.advisor}</h6></span>
                        </>
                        <h6>Subject: {appointment.subject}</h6>
                        <p>Address: {appointment.address}</p>
                        <>
                        <span><h4>Time: {appointment.time}</h4></span>
                        <span><h4>Date: {appointment.date}</h4></span>
                        </>
                      </>
                      </Modal.Body>
                    </Modal.Dialog> 
                    </Link>
                   </div>
                   <Button variant="secondary" onClick={() => removeFromList(appointment)}>Delete</Button>
                </li>
                
                </div>
                ))}
            </ul>
        </div>
        
    );
}