import axios from "axios";
import { response } from "express";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppointmentContext = createContext();

export function AppointmentProvider({children}) {

    const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
    const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

    const [appointment, setAppointment] = useState(loadJSON('local'));

    useEffect(() => {
        saveJSON('local', appointment);
        // eslint-disable-next-line
    }, [appointment]
    );

    const removeFromList = (appointment) => {
        setAppointment(appointment.filter(item => item !== appointment));
        axios.delete("http://localhost:4000/deleteAppointment/${appointment.id}")
             .then(response=>{console.log(response.data.data)})
    }

    return (
        <AppointmentContext.Provider value={{appointment, setAppointment, removeFromList }}>
            {children}
        </AppointmentContext.Provider>
    )
}


export const useAppointment = () => useContext(AppointmentContext);