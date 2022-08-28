import React from "react";
import {Signin} from "./signin.js";
import {Signup} from "./signup.js";
import { CheckAppointment } from "./CheckAppointment.js";

const userRoutes = [
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
]

export default userRoutes;