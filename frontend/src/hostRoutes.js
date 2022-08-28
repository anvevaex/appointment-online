import React from "react";
import {Signin} from "./signin.js";
import {Signup} from "./signup.js";
import { CheckAppointment } from "./CheckAppointment.js";

const hostRoutes = [
    {
        path: '/signin',
        component: Signin,
        exact:true,
    },
    {
        path: '/signup',
        component: Signup,
        exact:true,
    },
    {
        path: '/checkAppointment',
        component: CheckAppointment,
        exact:true,
    },
    {
        path: '/makeAppointment',
        component: MakeAppointment,
        exact:true,
    },
]

export default hostRoutes;