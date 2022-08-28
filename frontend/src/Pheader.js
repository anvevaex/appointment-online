import React from 'react';
import { Link } from 'react-router-dom';
//import { Menu, Layout} from "antd";
//import { AiOutlineLogin, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
//import "antd";
import "./Pheader.css";
import Nav from 'react-bootstrap/Nav';


export default function Pheader() {
    //const {Header} = Layout;
    return (
        <div className="header">
            
            <h3>Online Appointment</h3>
            
            <div className='navbar'>
                
              <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href=""><Link to="signin">Log In</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey=""><Link to="signup">Sign Up</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="">
                  <Link to="MakeAppointment">Make Appointment</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="">
                  <Link to="CheckAppointment">Check Appointment</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>

            </div>
        </div>
    )
}