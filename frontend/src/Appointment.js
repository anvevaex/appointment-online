import React from "react";
//import "./appointment.css";
import { useLocation } from "react-router-dom";

export function Appointment() {

  const location = useLocation();
  const appointment = location.state;

    return (
        <div className="body">
          <>
            <>
              <span><p>Client: {appointment.client}</p></span>
              <span><p>Advisor: {appointment.advisor}</p></span>
            </>
            <p>Subject: {appointment.subject}</p>
            <p>Address: {appointment.address}</p>
            <>
            <span><p>Time: {appointment.time}</p></span>
            <span><p>Date: {appointment.Date}</p></span>
            </>
          </>

          <div className="details">
            <h4>Details</h4>
            <p>{appointment.details}</p>
          </div>

        </div>
    );}