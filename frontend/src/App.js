import React from "react";
import {Routes, Route} from "react-router-dom";
import {MakeAppointment} from "./MakeAppointment.js";
import Layout from "./Layout.js";
//import {Contact} from "./Contact.js";
import {Signin} from "./signin.js";
import {Signup} from "./signup.js";
import { CheckAppointment } from "./CheckAppointment.js";
//import {Product} from "./Product.js";
//import {Milkpowder} from "./milkpowder.js";
//import {Household} from "./household.js";
import {Appointment} from "./Appointment.js";




function App() {
  return (
    <>

      
        <Routes>  
            <Route path="/" element={<Layout />}>
             <Route index element={<Signin />} />
             <Route path='/signin' element={<Signin />} />
             <Route path='/signup' element={<Signup />} />
             <Route path='/MakeAppointment' element={<MakeAppointment />} />
             <Route path='/checkAppointment' element={<CheckAppointment />} />
            </Route> 
            <Route path='appointment.id=:id' exact element={<Appointment />} /> 
        </Routes>
        
    
    </>
  );
}

export default App;
