import { Component } from "react"
import { Navbar, Nav } from "react-bootstrap"
import {Link, Route, Routes} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <Navbar bg="dark-p3" variant='dark' expand="lg" collapseOnSelect>
            <Navbar.Brand href="#home" >Burgnyik</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/" style={{color:"black"}}>Főoldal</Nav.Link>
                <Nav.Link href="/tapasztalat" style={{color:"black"}} > Szakmai Tapasztalat</Nav.Link>
                <Nav.Link href="/idopont" style={{color:"black"}} > Időpontfoglalás</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
        )
    }
}