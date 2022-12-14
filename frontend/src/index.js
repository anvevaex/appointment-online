import React from 'react';
//import "./index.css";
import ReactDOM from 'react-dom/client';
//import "antd";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Pfooter from './Pfooter';
import Pheader from './Pheader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppointmentProvider } from './appointment-hooks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
        <Pheader />
        
          <AppointmentProvider>
            <App />
          </AppointmentProvider>
        
        <Pfooter />
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
